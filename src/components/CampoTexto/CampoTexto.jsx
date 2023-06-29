import hero from '../../assets/pngwing.com.png'

const CampoTexto = () => {
  return (
    <div className='px-12 py-3 bg-[#6278F7]'>
      <img
        className='w-full h-[400px] lg:h-[600px] object-cover'
        src={hero}
        alt=''
      />
    </div>
  )
}

export default CampoTexto
