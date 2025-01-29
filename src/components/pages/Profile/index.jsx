import { useAuth0 } from '@auth0/auth0-react'; // Added Auth0
import { Navigate } from 'react-router-dom';

const Profile = () => {
  // Pulls authentication state, user info, loading state, and logout method from the Auth0 hook
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  // Removed " || !user" to stop it from blocking the redirect to homepage
  if (isLoading) {
    return <div className='text-center p-4'>Loading...</div>;
  }

  // Redirects to the homepage if the user is not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  // Styled the Profile Page
  return (
    <div className="profile-box mx-auto mt-10 bg-white rounded-lg shadow-lg p-6">
      <img src={user.picture} alt="Profile Picture" className="w-24 h-24 rounded-full mx-auto mb-4"/>
      <h2 className="text-2xl font-semibold mb-2">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <button 
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
          Logout
      </button>
    </div>
  );
};

export default Profile;