import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router} from 'react-router-dom'
import {AppProvider} from './components/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<AppProvider>
  <Router>
    <App />
  </Router>
  </AppProvider>

 
)
