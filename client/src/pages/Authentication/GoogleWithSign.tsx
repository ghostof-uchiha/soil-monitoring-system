import Login from "./GoogleSignIn";
import LogOut from "./GoogleSignOut";
import { useEffect } from "react";
import {gapi} from "gapi-script";

const clientId = '153961282424-73kfahn3dvktninjn4oc9n4k1fqbahvd.apps.googleusercontent.com';

function GoogleWithSignIn() {
    console.log('sdsdss');
    
    
    useEffect( () => {
        function start() {
            gapi.client.init({
                clientId:clientId,
                scope: ""
            });
        }

        gapi.load('client:auth2', start)
    });


    return(
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark h-screen z-999">
            <Login />
            <LogOut />
            
        </div>
    )
}

export default GoogleWithSignIn;