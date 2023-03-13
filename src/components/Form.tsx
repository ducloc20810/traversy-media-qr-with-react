import { useContext, useState } from 'react'
import { Context } from 'App'

const Form = () => {
  const { url, setUrl, size, setSize, setLoading } = useContext(Context)

  const [urlInput, setUrlInput] = useState(url)
  const [sizeInput, setSizeInput] = useState(size)

  return (
    <form className='w-full'>
      <input
        value={urlInput}
        onChange={(e) => setUrlInput(e.target.value)}
        className='w-full p-3 my-3 rounded border-2 focus:outline-1'
        type='url'
        placeholder='Enter a URL'
      />
      <select
        value={sizeInput}
        onChange={(e) => setSizeInput(e.target.value)}
        className='w-full p-3 my-3 rounded cursor-pointer border-2 focus:outline-1'
      >
        <option value='100'>100x100</option>
        <option value='200'>200x200</option>
        <option value='300'>300x300</option>
        <option value='400'>400x400</option>
        <option value='500'>500x500</option>
        <option value='600'>600x600</option>
        <option value='700'>700x700</option>
        <option value='800'>800x800</option>
      </select>

      <button
        className='w-full bg-gray-600 p-4 my-3 rounded hover:bg-black text-white'
        disabled={!urlInput}
        type='submit'
        onClick={(e) => {
          e.preventDefault()

          const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')

          if (regex.test(urlInput)) {
            setLoading(true)

            setTimeout(() => {
              setLoading(false)
              setUrl(urlInput)
              setSize(sizeInput)
            }, 1000)
          } else {
            alert('Please enter a valid URL')
          }
        }}
      >
        Generate QR Code
      </button>
    </form>
  )
}

export default Form
