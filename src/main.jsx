import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './Card.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Card />

    {/* reuse the card component */}
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </React.StrictMode>,
)
