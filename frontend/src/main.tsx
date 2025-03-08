import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // @ts-expect-error some type error
    <RecoilRoot>
  <React.StrictMode>
    <App />


  </React.StrictMode>,
    </RecoilRoot>
)
