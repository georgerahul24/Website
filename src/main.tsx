import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.tsx'
import App2 from './App2';
import './css/index.css'
import Navbar from "./Navbar.tsx";
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div className='theme'>
            <Navbar/>
            <div className='vh-100 d-flex justify-content-center align-items-center'>
                <App/>
            </div>
            <div className='vh-100 d-flex justify-content-center align-items-center'>
                <App2/>
            </div>
        </div>
    </StrictMode>,
)

