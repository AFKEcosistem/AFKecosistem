// config/firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB3rxYsrFhgMZ7MrHnh3oUlU1-CEqUKMpQ",
  authDomain: "afk-multiservices.firebaseapp.com",
  projectId: "afk-multiservices",
  storageBucket: "afk-multiservices.firebasestorage.app",
  messagingSenderId: "301911118658",
  appId: "1:301911118658:web:9bf381ade4e94b64276edb",
  measurementId: "G-ZKDBJKYDPD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
