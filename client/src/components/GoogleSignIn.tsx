import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";

const clientId = "153961282424-73kfahn3dvktninjn4oc9n4k1fqbahvd.apps.googleusercontent.com"

function Login() {
    const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        // Check if the response contains a profile object before accessing it
        if ('profileObj' in res) {
            console.log("Login Success", res.profileObj);
        } else {
            console.log("Login Success, but profileObj is not available");
        }
    }

    const onFailure = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        console.log("Login Failure", res);
    }

    return (
        <div>
            <GoogleLogin 
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}  
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;
