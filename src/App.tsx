import Header from 'components/Header'
import QR from 'components/QR'
import Title from 'components/Title'
import { createContext, useMemo, useState } from 'react'
import { ReactComponent as Loading } from 'assets/images/spinner.svg'

interface ContextTypes {
  url: string
  size: string
  setUrl: (url: string) => void
  setSize: (size: string) => void
  setShow: (value: boolean) => void
  setLoading: (value: boolean) => void
}

export const Context = createContext<ContextTypes>({} as ContextTypes)

function App() {
  const [url, setUrl] = useState('')
  const [size, setSize] = useState('100')
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)

  const value = useMemo(() => {
    return {
      url,
      setUrl,
      size,
      setSize,
      setShow,
      show,
      setLoading
    }
  }, [url, size, show])

  return (
    <Context.Provider value={value}>
      <div>
        <Header />
        <Title />
        {loading && <Loading />}
        {!loading && url && <QR url={url} size={size} />}
      </div>
    </Context.Provider>
  )
}

export default App
