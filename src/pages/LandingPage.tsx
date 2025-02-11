import Hero from "../components/Landing/Hero";
import Howto from "../components/Landing/Howto";
import PopluarCategory from "../components/Landing/PopluarCategory";
import { useGoogleOneTapLogin, CredentialResponse } from '@react-oauth/google';
import { useAuth } from "../Context/AuthContext";
import { GoogleAuth } from "../Hooks/UserLogin";
import toast from "react-hot-toast";
import { useEffect, useState } from 'react';

const LandingPage = () => {
  // Google AUTH
  const { mutate: mutateGoogleLogin } = GoogleAuth();
  
  // Context auth
  const { login, isAuthenticated } = useAuth();
  
  // Track if the popup has been shown using localStorage
  const [hasShownPopup, setHasShownPopup] = useState(() => {
    // Initialize from localStorage, or false if not found
    return localStorage.getItem('hasShownGooglePopup') === 'true';
  });

  // Function to mark popup as shown
  const markPopupAsShown = () => {
    setHasShownPopup(true);
    localStorage.setItem('hasShownGooglePopup', 'true');
  };

  // Function to reset popup state
  const resetPopupState = () => {
    setHasShownPopup(false);
    localStorage.removeItem('hasShownGooglePopup');
  };

  // Handle successful login
  const handleLoginSuccess = async (credentialResponse: CredentialResponse) => {
    if (isAuthenticated) return;

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
            markPopupAsShown(); // Mark popup as shown on successful login
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

  // Reset popup state when user logs out
  useEffect(() => {
    if (!isAuthenticated) {
      resetPopupState();
    }
  }, [isAuthenticated]);

  // Initialize Google One Tap
  useGoogleOneTapLogin({
    onSuccess: handleLoginSuccess,
    onError: () => {
      console.error("Google One Tap login failed");
      toast.error("Google One Tap Login Failed. Please try again.");
      markPopupAsShown(); // Mark popup as shown even on error
    },
    cancel_on_tap_outside: false,
    prompt_parent_id: 'oneTap',
    disabled: isAuthenticated || hasShownPopup,
  });

  // Set up dark theme
  useEffect(() => {
    const container = document.getElementById('oneTap');
    if (container) {
      container.setAttribute('data-theme_id', 'dark');
    }
  }, []);

  return (
    <main className="w-full h-full relative">
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
      <div id="oneTap" data-theme_id="dark" className="absolute top-5 right-3" />
    </main>
  );
};

export default LandingPage;