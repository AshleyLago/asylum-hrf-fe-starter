import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';
import { ProvideAppContext } from './context/AppContext.jsx';
import { Auth0Provider } from '@auth0/auth0-react'; // Added Auth0

const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
const AUTH_CLIENT_ID = import.meta.env.VITE_AUTH_CLIENT_ID;

createRoot(document.getElementById('root')).render(
    <Auth0Provider
      domain={AUTH_DOMAIN}
      clientId={AUTH_CLIENT_ID}
      authorizationParams={{ redirect_uri: window.location.origin }}
      cacheLocation="localstorage"
    >
      <ProvideAppContext>
        <App />
      </ProvideAppContext>
    </Auth0Provider>
    // Wrapped ProvideAppContext with the Auth Provider
    // Connected domain and clientId to Auth0 credentials in .env file
    // Specified location for succesful login/logout in authorizationParams
    // Added cacheLocation to let user's login session persist on refresh
);