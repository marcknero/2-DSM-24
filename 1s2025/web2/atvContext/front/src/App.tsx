import './App.css'
import { LetterCtxProvider } from './contexts/LetterCtx'
import { Input } from './components/Input'
import { Display } from './components/Display'
import { CSSProperties } from 'react'


function App() {
  return (
    <>
     <div style={divCtxStyle}>
     <LetterCtxProvider>
      <Input />
      <Display />
     </LetterCtxProvider>
    </div>
    </>
  )
}

const divCtxStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  justifySelf: "center",
  alignSelf: "center",
  backgroundColor: "black",
  color: "white",
  padding: "30px",
  }


export default App
