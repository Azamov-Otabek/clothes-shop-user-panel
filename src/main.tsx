import ReactDOM from 'react-dom/client'
import './index.css'
import Router from '@router'
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <GoogleOAuthProvider clientId="330372843039-urpvodf9rnkri977al5g2ktd9d6odpr3.apps.googleusercontent.com">
        <Router/>
    </GoogleOAuthProvider>
)
