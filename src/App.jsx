import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './component/Navigation'
import InputData from './component/InputData'
import PreviewData from './component/PreviewData'

function App() {

  return (
    <div>
      <Navigation />
      <InputData />
      <PreviewData />
    </div>
  )
}

export default App
