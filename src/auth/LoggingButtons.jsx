
import { useAuth0 } from '@auth0/auth0-react'; // Added Auth0

export const LoggingButtons = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0(); // Pulls authentication state and methods from the Auth0 hook

  const buttonText = isAuthenticated ? 'Log Out' : 'Log In';

  const handleLogging = () => {
    if (isAuthenticated) {
      logout({ returnTo: window.location.origin}); // Logs the user out and redirects them to the home page
    } else {
      loginWithRedirect(); // Redirects user to Auth0 login page
    }
  };

  return (
    <button className='nav-btn  px-4 py-1' onClick={handleLogging}>
      {buttonText}
    </button>
  );
};