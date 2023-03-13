import { ReactComponent as Image } from 'assets/images/img.svg'
import Form from './Form'

const Title = () => {
  return (
    <div className='flex justify-center items-center p-10 gap-24 flex-col-reverse md:flex-row max-w-4xl m-auto'>
      <div className='w-full md:w-2/3'>
        <div className='text-3xl md:text-4xl font-bold mb-6'>QR Code Generator</div>
        <div className='mb-5'>
          <p className='mb-5'> QR Codes allow smartphone users to access your website simply and quickly.</p>
          <p> Enter your URL below to generate a QR Code and download the image.</p>
        </div>

        <Form />
      </div>
      <div className='w-full md:w-1/3'>
        <Image />
      </div>
    </div>
  )
}

export default Title
