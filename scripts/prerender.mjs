import { readFile, writeFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const projectRoot = path.resolve(process.cwd())
const distDir = path.join(projectRoot, 'dist')
const ssrDir = path.join(projectRoot, 'dist-ssr')

function getEnvString(key, fallback = '') {
  const value = process.env[key]
  return typeof value === 'string' && value.trim().length > 0 ? value.trim() : fallback
}

function normalizePhoneE164(raw) {
  const cleaned = String(raw || '').replace(/[^\d+]/g, '')
  return cleaned.startsWith('+') ? cleaned : cleaned.length > 0 ? `+${cleaned}` : ''
}

async function findSsrEntryFile() {
  const files = await readdir(ssrDir)
  const entry =
    files.find((file) => file === 'entry-server.js') ||
    files.find((file) => file.startsWith('entry-server') && file.endsWith('.js'))
  if (!entry) {
    throw new Error(`SSR entry not found in ${ssrDir}`)
  }
  return path.join(ssrDir, entry)
}

async function prerenderIndex() {
  const templatePath = path.join(distDir, 'index.html')
  let html = await readFile(templatePath, 'utf8')

  const ssrEntryPath = await findSsrEntryFile()
  const ssrModule = await import(pathToFileURL(ssrEntryPath).href)
  if (typeof ssrModule.render !== 'function') {
    throw new Error('SSR module does not export a render() function')
  }

  const appHtml = await ssrModule.render()

  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  const phone = normalizePhoneE164(getEnvString('VITE_PHONE', ''))
  const email = getEnvString('VITE_EMAIL', '')

  html = html.replaceAll('__PHONE_E164__', phone)
  html = html.replaceAll('__EMAIL__', email)

  if (!phone) {
    html = html.replace(/\s*"telephone"\s*:\s*""\s*,\s*\n/g, '')
  }
  if (!email) {
    html = html.replace(/\s*"email"\s*:\s*""\s*,\s*\n/g, '')
  }

  await writeFile(templatePath, html, 'utf8')
}

await prerenderIndex()
console.log('Prerendered dist/index.html')
