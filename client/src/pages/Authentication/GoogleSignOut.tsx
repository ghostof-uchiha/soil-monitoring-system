import { GoogleLogout } from 'react-google-login';

const clientId =
  '153961282424-73kfahn3dvktninjn4oc9n4k1fqbahvd.apps.googleusercontent.com';

function LogOut() {
  const onSuccess = () => {
    console.log('Logout success');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default LogOut;
