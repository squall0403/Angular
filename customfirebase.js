// Initialize Firebase
var config = {
  apiKey: "AIzaSyDs96sCsVkA2stZkeb75uhIm3dPxcCNWY8",
  authDomain: "fg100-dev.firebaseapp.com",
  databaseURL: "https://fg100-dev.firebaseio.com",
  projectId: "fg100-dev",
  storageBucket: "fg100-dev.appspot.com",
  messagingSenderId: "416966777376"
};

var app = firebase.initializeApp(config);
// setup

firebase.auth().useDeviceLanguage();


  var t0 = performance.now();
  console.log(t0);
  var timer = setInterval(function() {

    clearInterval(timer);
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
          'size': 'normal',
          'callback': function(response) {
              console.log("success", response);
          },
          'expired-callback': function() {
              console.log("expired-callback");
          }
      });

      recaptchaVerifier.render().then(function(widgetId) {
          window.recaptchaWidgetId = widgetId;
          var t1 = performance.now();
          console.log(t1);
          console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
      });

    },1);




// var phoneNumber = getPhoneNumberFromUserInput();
// var appVerifier = window.recaptchaVerifier;
// firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
//     .then(function (confirmationResult) {
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//       window.confirmationResult = confirmationResult;
//     }).catch(function (error) {
//       // Error; SMS not sent
//       // ...
//     });
//     var code = getCodeFromUserInput();
//     confirmationResult.confirm(code).then(function (result) {
//       // User signed in successfully.
//       var user = result.user;
//       // ...
//     }).catch(function (error) {
//       // User couldn't sign in (bad verification code?)
//       // ...
//     });


// PhoneAuthProvider
  // var uiConfig = {
  //         signInSuccessUrl: 'Angular_index.html',
  //         signInOptions: [
  //           {
  //             provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  //             recaptchaParameters: {
  //               type: 'image', // 'audio'
  //               size: 'compact ',
  //               badge: 'inline' //' bottomright' or 'inline' applies to invisible.
  //             },
  //             defaultCountry: 'VN', // Set default country to the United Kingdom (+44).
  //             defaultNationalNumber: '',
  //             loginHint: '+'
  //           }
  //
  //         ],
  //         // Terms of service url.
  //         tosUrl: 'http://fastget.net'
  //       };
  //
  //       // Initialize the FirebaseUI Widget using Firebase.
  //       firebase.auth().languageCode = 'en';
  //       var ui = new firebaseui.auth.AuthUI(firebase.auth());
  //       // The start method will wait until the DOM is loaded.
  //       console.log(ui);
  //       ui.start('#firebaseui-auth-container', uiConfig);
// PhoneAuthProvider

// Realtime databaseURL

// var database = firebase.database();
// function writeUserData(userId, name, email, imageUrl) {
//   firebase.database().ref('EN/' + userId).set({
//     NAME: name,
//     EMAIL: email,
//     IMAGE : imageUrl
//   });
// }
//
// writeUserData('USER','Duy','nguyenduy573@gmail.com','the url');
