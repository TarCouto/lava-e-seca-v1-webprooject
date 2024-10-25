'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import emailjs from 'emailjs-com'

const bookingFormSchema = z.object({
  name: z.string().nonempty('Nome é obrigatório.'),
  phone: z.string().nonempty('Telefone é obrigatório.'),
  email: z.string().email('Email inválido.').nonempty('Email é obrigatório.'),
  repairType: z.string().nonempty('Tipo de reparo é obrigatório.'),
  location: z.string().nonempty('Localização é obrigatória.'),
  date: z.string().nonempty('Data é obrigatória.'),
  time: z.string().nonempty('Horário é obrigatório.'),
})

type BookingFormData = z.infer<typeof bookingFormSchema>

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
  })

  const onSubmit: SubmitHandler<BookingFormData> = (data) => {
    const templateParams = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      repairType: data.repairType,
      location: data.location,
      date: data.date,
      time: data.time,
    }

    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_USER_ID',
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text)
          alert('Informações enviadas com sucesso!')
        },
        (error) => {
          console.error('FAILED...', error)
          alert('Falha ao enviar as informações. Tente novamente.')
        },
      )
  }

  return (
    <div className="relative z-10 bg-gray-900 p-8 rounded-lg shadow-md max-w-3xl mx-auto ">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <h2 className="text-xl font-bold text-white">Agende sua visita</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-4">
            <label
              htmlFor="repairType"
              className="block text-sm font-medium text-white"
            >
              Tipo de reparo
            </label>
            <select
              id="repairType"
              {...register('repairType')}
              className="mt-1 block w-full p-2.5 rounded-md bg-gray-700 text-white"
            >
              <option value="">Selecione...</option>
              <option value="Maquina de lavar">Máquina de lavar</option>
              <option value="Maquina de secar">Máquina de secar</option>
              <option value="Outros">Outros</option>
            </select>
            {errors.repairType && (
              <span className="text-red-500 text-sm">
                {errors.repairType.message}
              </span>
            )}
          </div>
          <div className="col-span-4 sm:col-span-2">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-white"
            >
              Localização
            </label>
            <input
              id="location"
              type="text"
              {...register('location')}
              className="mt-1 block w-full p-2.5 rounded-md bg-gray-700 text-white"
              placeholder="Sua localização"
            />
            {errors.location && (
              <span className="text-red-500 text-sm">
                {errors.location.message}
              </span>
            )}
          </div>
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <label
              htmlFor="date"
              className="block text-sm font-medium text-white"
            >
              Data
            </label>
            <input
              id="date"
              type="date"
              {...register('date')}
              className="mt-1 block w-full p-2.5 rounded-md bg-gray-700 text-white"
            />
            {errors.date && (
              <span className="text-red-500 text-sm">
                {errors.date.message}
              </span>
            )}
          </div>
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <label
              htmlFor="time"
              className="block text-sm font-medium text-white"
            >
              Horário
            </label>
            <input
              id="time"
              type="time"
              {...register('time')}
              className="mt-1 block w-full p-2.5 rounded-md bg-gray-700 text-white"
            />
            {errors.time && (
              <span className="text-red-500 text-sm">
                {errors.time.message}
              </span>
            )}
          </div>
          <div className="col-span-4 sm:col-span-2 lg:col-span-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Nome
            </label>
            <input
              id="name"
              type="text"
              {...register('name')}
              className="mt-1 block w-full p-2.5 rounded-md bg-gray-700 text-white"
              placeholder="Seu nome"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="col-span-4 sm:col-span-2 lg:col-span-2">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-white"
            >
              Telefone
            </label>
            <input
              id="phone"
              type="tel"
              {...register('phone')}
              className="mt-1 block w-full p-2.5 rounded-md bg-gray-700 text-white"
              placeholder="Seu telefone"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">
                {errors.phone.message}
              </span>
            )}
          </div>
          <div className="col-span-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className="mt-1 block w-full p-2.5 rounded-md bg-gray-700 text-white"
              placeholder="Seu email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full p-3 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700"
          >
            Agendar
          </button>
        </div>
      </form>
    </div>
  )
}
