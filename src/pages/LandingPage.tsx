import Hero from "../components/Landing/Hero";
import Howto from "../components/Landing/Howto";
import PopluarCategory from "../components/Landing/PopluarCategory";
import { useGoogleOneTapLogin, CredentialResponse } from '@react-oauth/google';
import { useAuth } from "../Context/AuthContext";
import { GoogleAuth } from "../Hooks/UserLogin";
import toast from "react-hot-toast";
import { useEffect, useRef } from 'react';

const LandingPage = () => {


  // Google AUTH
  const { mutate: mutateGoogleLogin } = GoogleAuth();
  
  // Context auth
  const { login, isAuthenticated } = useAuth();
  
  // Track if the popup has been shown
  const hasShownPopup = useRef(false);



  // Handle successful login
  const handleLoginSuccess = async (credentialResponse: CredentialResponse) => {


    if (isAuthenticated || hasShownPopup.current) return;

    try {
      

      if (!credentialResponse.credential) {
        toast.error("Login failed - no credentials received");
        return;
      }

      const token = credentialResponse.credential;
      const tokenParts = token.split(".");

      if (tokenParts.length !== 3) {
        toast.error("Invalid token received");
        return;
      }

      const payload = JSON.parse(atob(tokenParts[1]));

      const formdata = new FormData();
      formdata.append("username", payload.name);
      formdata.append("email", payload.email);

      mutateGoogleLogin(formdata, {
        onSuccess: (response) => {
          if (response.status >= 200 && response.status <= 300) {
            login(response.data.access);
            toast.success("Login Successful!");
          } else {
            console.error("Login failed:", response);
            toast.error("Login failed. Please try again.");
          }
        },
        onError: (error) => {
          console.error("Login mutation error:", error);
          toast.error("Login failed. Please try again.");
        },
      });
    } catch (error) {
      console.error("One Tap login error:", error);
      toast.error("Login failed. Please try again.");
    }
  };



  // Initialize Google One Tap at component level
  useGoogleOneTapLogin({
    onSuccess: handleLoginSuccess,
    onError: () => {
      console.error("Google One Tap login failed");
      toast.error("Google One Tap Login Failed. Please try again.");
      hasShownPopup.current = true;
    },
    cancel_on_tap_outside: false,
    prompt_parent_id: 'oneTap',
    disabled: isAuthenticated || hasShownPopup.current, // Disable the popup if authenticated or already shown
  });


  // Set up dark theme
  useEffect(() => {
    const container = document.getElementById('oneTap');
    if (container) {
      container.setAttribute('data-theme_id', 'dark');
    }
  }, []);

  return (
    <main className="w-full h-full">
      {/* Hero */}
      <div>
        <Hero />
      </div>

      <div>
        <PopluarCategory />
      </div>

      <div>
        <Howto />
      </div>

      {/* Container for Google One Tap */}
      <div id="oneTap" data-theme_id="dark" />
    </main>
  );
};

export default LandingPage;