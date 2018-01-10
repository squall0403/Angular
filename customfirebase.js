var config = {
  apiKey: "AIzaSyDs96sCsVkA2stZkeb75uhIm3dPxcCNWY8",
  authDomain: "fg100-dev.firebaseapp.com",
  databaseURL: "https://fg100-dev.firebaseio.com",
  projectId: "fg100-dev",
  storageBucket: "fg100-dev.appspot.com",
  messagingSenderId: "416966777376"
  };
  firebase.initializeApp(config);

  var uiConfig = {
          signInSuccessUrl: 'Angular_index.html',
          signInOptions: [
            {
              provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
              recaptchaParameters: {
                type: 'image', // 'audio'
                size: 'normal',
                badge: 'inline' //' bottomright' or 'inline' applies to invisible.
              },
              defaultCountry: 'VN', // Set default country to the United Kingdom (+44).
              defaultNationalNumber: '',
              loginHint: '+'
            }

          ],
          // Terms of service url.
          tosUrl: '<your-tos-url>'
        };

        // Initialize the FirebaseUI Widget using Firebase.
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        // The start method will wait until the DOM is loaded.

        ui.start('#firebaseui-auth-container', uiConfig);
