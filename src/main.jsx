import React from 'react'
import ReactDOM from 'react-dom/client'
import Swr from './WithSwr.jsx'
import Fetch from './WithJsFetchMethod.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Swr />
    <Fetch />
  </React.StrictMode>,
)
