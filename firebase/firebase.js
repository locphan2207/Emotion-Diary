import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCr1hRj2XtJyxTG_IHcPXIrqRoGhG5sSfo",
  authDomain: "emotion-diary.firebaseapp.com",
  databaseURL: "https://emotion-diary.firebaseio.com"
  // storageBucket: "<your-storage-bucket>",
};
firebase.initializeApp(config);

export default firebase;
