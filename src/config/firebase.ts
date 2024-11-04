import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAMa9C2EXcZ9ULgLq0tYUuK3ftCviA3Hj0",
  authDomain: "sus-iot.firebaseapp.com",
  databaseURL: "https://sus-iot-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "sus-iot",
  storageBucket: "sus-iot.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);