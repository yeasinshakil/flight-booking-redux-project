import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './component/Navigation'
import InputData from './component/InputData'
import PreviewData from './component/PreviewData'
import { Provider } from 'react-redux'
import store from './redux/store'


function App() {

  return (
    <div>
      <Provider store={store}>
        <Navigation />
        <InputData />
        <PreviewData />
      </Provider>
    </div>
  )
}

export default App
