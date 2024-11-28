// import React, { useEffect } from 'react'
// import { Text, View } from 'react-native'
// import * as Google from "expo-auth-session/providers/google";
// import * as WebBrowser from "expo-web-browser";


// const webClientId="395059583256-r75bjioo4ftf24sbnk33k1ff57htl7au.apps.googleusercontent.com"
// const iosClientId="395059583256-v41umjrt6s3agmb1km7utbfuqevqovk8.apps.googleusercontent.com"
// const androidClientId="395059583256-aa4agj5q0t0i7pcng2np3qdmjr8a6evh.apps.googleusercontent.com"
// WebBrowser.maybeCompleteAuthSession();



// function GoogleLogin() {
//     const config={
//         webClientId,
//         iosClientId,
//         androidClientId
//     }
//     const [request,response,promptAsync]=Google.useAuthRequest(config,
//         {native:"com.anonymous.mycode"}
//     )
//     console.log(response);
//     const handleToken=()=>{
//         if(response?.type==="success")
//         {
//              const {authentication}=response;
//              const token=authentication?.accessToken;
//              console.log(token,"token")
//         }
//     }
//     useEffect(()=>{
//         handleToken();

//     },[response])
//     return (
//     <View>
//         <Text onPress={()=>promptAsync()}>Google</Text>
//     </View>

//   )
// }

// export default GoogleLogin

import React, { useState, useEffect } from 'react';
import { Button, Text, View, Platform } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import { makeRedirectUri } from 'expo-auth-session';
import { discovery } from 'expo-auth-session/build/providers/Google';

export default function GoogleLogin() {
  // State to store authentication result
  const [authResult, setAuthResult] = useState(null);

  // Set up Google OAuth configuration
  const CLIENT_ID = '395059583256-aa4agj5q0t0i7pcng2np3qdmjr8a6evh.apps.googleusercontent.com'; // Replace with your Google OAuth Client ID
  const REDIRECT_URI = makeRedirectUri({
    scheme: 'mycode',  // Use the scheme you defined in app.json
  });

  // Set up OAuth URLs
  const DISCOVERY = {
    authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
    tokenEndpoint: 'https://oauth2.googleapis.com/token',
    revocationEndpoint: 'https://oauth2.googleapis.com/revoke',
  };

  // Create the OAuth request
  const [request, response, promptAsync] = AuthSession.useAuthRequest({
    clientId: CLIENT_ID,
    redirectUri: REDIRECT_URI,
    scopes: ['openid', 'profile', 'email'],  // Request Google login scopes
  },
  DISCOVERY);

  // Handle the response once authentication is completed
  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      // You can use this 'code' to exchange for tokens
    }
  }, [response]);

  // Render the UI
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Sign in with Google"
        onPress={() => promptAsync()} // Trigger OAuth flow
      />
  
    </View>
  );
}