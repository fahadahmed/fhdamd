import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCmYHBdkO5iv4gRhh-BA4UPtDHlDy0H_MM',
  authDomain: 'fahad-web.firebaseapp.com',
  databaseURL: 'https://fahad-web.firebaseio.com',
  projectId: 'fahad-web',
  storageBucket: 'fahad-web.appspot.com',
  messagingSenderId: '779157276706',
  appId: '1:779157276706:web:ef20e27ff0d38b5643e27b',
  measurementId: 'G-67E540H3JX',
};
let app, analytics: any;
if (typeof window !== undefined) {
  app = initializeApp(firebaseConfig);
  analytics = isSupported().then((yes) => (yes ? getAnalytics() : null));
}

export { app, analytics };
