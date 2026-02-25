// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqQSI551MnoAzuG9eKIdJxhUXlQrlZQ_c",
  authDomain: "gen-lang-client-0578311065.firebaseapp.com",
  databaseURL: "https://gen-lang-client-0578311065-default-rtdb.firebaseio.com",
  projectId: "gen-lang-client-0578311065",
  storageBucket: "gen-lang-client-0578311065.firebasestorage.app",
  messagingSenderId: "437251449708",
  appId: "1:437251449708:web:3000e50ed5dc6c16ed0949",
  measurementId: "G-6YMJ91TETF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
