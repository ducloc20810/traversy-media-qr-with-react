import { useEffect, useRef, useState } from 'react'
import QRCode from 'react-qr-code'

const QR = ({ url, size }: { url: string; size: string }) => {
  const ref = useRef<SVGSVGElement>(null)
  const [downloadLink, setDownloadLink] = useState('')

  useEffect(() => {
    if (ref.current) {
      const svg = ref.current
      const svgData = new XMLSerializer().serializeToString(svg)
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const img = new Image()
      img.src = `data:image/svg+xml;base64,${btoa(svgData)}`

      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx?.drawImage(img, 0, 0)
        const pngFile = canvas.toDataURL('image/png')
        setDownloadLink(pngFile)
      }
    }
  }, [url])

  return (
    <div className='max-w-5xl m-auto my-7 flex flex-col items-center justify-center'>
      <div className='bg-white'>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <QRCode ref={ref as any} value={url} size={+size} className='m-auto' bgColor='white' />
      </div>
      <a
        href={downloadLink}
        download='qr-code.png'
        className='text-center w-1/3 p-2 hover:bg-red-700 bg-red-500 font-bold rounded mt-6 text-white'
      >
        Save Image
      </a>
    </div>
  )
}

export default QR
