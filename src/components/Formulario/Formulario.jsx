import { useState } from 'react'

const Formulario = () => {
  const [info, setInfo] = useState({})

  const submitForm = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const payload = Object.fromEntries(formData)

    setInfo(payload)
  }

  return (
    <div
      className={
        Object.keys(info) != 0
          ? ' bg-white m-12 p-5 shadow-xl rounded-xl grid grid-cols-2 gap-4'
          : ' bg-white m-12 p-5 shadow-xl rounded-xl'
      }>
      {/* Formulario */}
      <div>
        <form onSubmit={submitForm}>
          <div className='mb-6'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Nombre
            </label>
            <input
              type='text'
              name='Nombre'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
              placeholder='Ingrese su Nombre'
            />
          </div>
          <div className='mb-6'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Apellido
            </label>
            <input
              type='text'
              name='Apellido'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
              placeholder='Ingrese su Apellido'
            />
          </div>
          <div className='mb-6'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Puesto
            </label>
            <input
              type='text'
              name='Puesto'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
              placeholder='Ingrese su Puesto'
            />
          </div>
          <div className='mb-6'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Foto
            </label>
            <input
              type='text'
              name='Foto'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
              placeholder='Ingrese su Foto'
            />
          </div>
          <div className='mb-6'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Equipos
            </label>
            <select
              name='Equipos'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
              <option>Programacion</option>
              <option>Redes</option>
              <option>Marketing</option>
              <option>Finanzas</option>
            </select>
          </div>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Crear on click
          </button>
        </form>
      </div>
      {/* Mostrar eventos */}
      {Object.keys(info) != 0 && (
        <div className='flex flex-col justify-center items-center'>
          <p className='text-xl my-3'>
            <span className='font-bold text-xl'>Nombre: </span> {info.Nombre}
          </p>
          <p className='text-xl my-3'>
            <span className='font-bold text-xl'>Apellido: </span>{' '}
            {info.Apellido}
          </p>
          <p className='text-xl my-3'>
            <span className='font-bold text-xl'>Puesto: </span> {info.Puesto}
          </p>
          <p className='text-xl my-3'>
            <span className='font-bold text-xl'>Foto: </span> {info.Foto}
          </p>
          <p className='text-xl my-3'>
            <span className='font-bold text-xl'>Equipos: </span> {info.Equipos}
          </p>
        </div>
      )}
    </div>
  )
}

export default Formulario
