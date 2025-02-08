// src/services/lightcastAuth.ts

import axios from "axios";

// Function to get the access token
export const getAccessToken = async (): Promise<string | null> => {
  const clientId = "may2ln9cdpfdjkhq"; // From Lightcast
  const clientSecret = "CHDkwfmo"; // From Lightcast
  const authCode = "68d2e0bad6f7416abc335d3205eac2d5"; // If using authorization code flow

  try {
    // Make the request to get the access token
    const response = await axios.post(
      "https://api.lightcast.dev/oauth/token",
      new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        code: authCode, // If needed
        grant_type: "authorization_code",
        redirect_uri: "YOUR_REDIRECT_URI", // If needed
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    return response.data.access_token; // Return the token for future API calls
  } catch (error) {
    console.error("Error fetching access token:", error);
    return null;
  }
};
