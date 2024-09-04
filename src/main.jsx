import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CourseProvider } from './context api/CourseContext.jsx'

createRoot(document.getElementById('root')).render(

    <CourseProvider>

    <App />
    </CourseProvider>
 
)
