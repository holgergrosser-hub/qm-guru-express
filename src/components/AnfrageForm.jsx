import { X, CheckCircle, Clock } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export default function AnfrageForm({ onClose }) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const onSubmit = async (data) => {
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('phone', data.phone)
      formData.append('company', data.company)
      formData.append('employees', data.employees)
      formData.append('deadline', data.deadline)
      formData.append('message', data.message)
      formData.append('source', 'QM-Guru Express Landing')

      await fetch(import.meta.env.VITE_FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      })

      setSuccess(true)
      setTimeout(() => onClose(), 5000)

    } catch (error) {
      console.error('Fehler:', error)
      alert('Ein Fehler ist aufgetreten. Bitte rufen Sie uns an: ' + import.meta.env.VITE_PHONE)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl my-8">

        <div className="bg-primary-500 text-white px-8 py-6 rounded-t-2xl flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Express-Anfrage</h2>
            <p className="text-primary-100 text-sm mt-1">⚡ Rückmeldung innerhalb 2 Stunden</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-primary-600 rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </div>

        {success ? (
          <div className="px-8 py-12 text-center">
            <div className="w-20 h-20 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-secondary-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Anfrage erhalten!</h3>
            <p className="text-xl text-gray-600">
              Wir melden uns innerhalb von 2 Stunden bei Ihnen.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="px-8 py-6 space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Ihr Name *</label>
                <input
                  {...register('name', { required: 'Bitte Namen eingeben' })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:outline-none"
                  placeholder="Max Mustermann"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Unternehmen *</label>
                <input
                  {...register('company', { required: 'Bitte Unternehmen eingeben' })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:outline-none"
                  placeholder="Mustermann GmbH"
                />
                {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">E-Mail *</label>
                <input
                  {...register('email', {
                    required: 'Bitte E-Mail eingeben',
                    pattern: { value: /^\S+@\S+$/i, message: 'Ungültige E-Mail' }
                  })}
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:outline-none"
                  placeholder="max@unternehmen.de"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Telefon *</label>
                <input
                  {...register('phone', { required: 'Bitte Telefon eingeben' })}
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:outline-none"
                  placeholder="+49 911 1234567"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Anzahl Mitarbeiter *</label>
                <select
                  {...register('employees', { required: 'Bitte auswählen' })}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:outline-none"
                >
                  <option value="">Bitte wählen</option>
                  <option value="bis-5">Bis 5 Mitarbeiter (2.500€)</option>
                  <option value="6-20">6-20 Mitarbeiter (3.500€)</option>
                  <option value="21-50">21-50 Mitarbeiter (5.500€)</option>
                  <option value="51-100">51-100 Mitarbeiter (7.000€)</option>
                  <option value="100+">Über 100 Mitarbeiter</option>
                </select>
                {errors.employees && <p className="text-red-500 text-sm mt-1">{errors.employees.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Deadline / Ausschreibung *</label>
                <input
                  {...register('deadline', { required: 'Bitte Deadline eingeben' })}
                  type="date"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:outline-none"
                />
                {errors.deadline && <p className="text-red-500 text-sm mt-1">{errors.deadline.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Nachricht (optional)</label>
              <textarea
                {...register('message')}
                rows="4"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary-500 focus:outline-none"
                placeholder="z.B.: Ausschreibung bei Jagger läuft bis 15.03..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 rounded-lg text-lg disabled:opacity-50"
            >
              {isSubmitting ? 'Wird gesendet...' : '⚡ Express-Anfrage absenden'}
            </button>

          </form>
        )}
      </div>
    </div>
  )
}
