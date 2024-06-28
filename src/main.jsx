import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PokeProvider from './Context/PokeProvider/PokeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <PokeProvider>
            <App />
        </PokeProvider>    
    </BrowserRouter>
)
