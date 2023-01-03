import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { CalculatorProvider } from './context/calculator_context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CalculatorProvider>
      <Router>
        <App />
      </Router>
    </CalculatorProvider>
  </React.StrictMode>
)
