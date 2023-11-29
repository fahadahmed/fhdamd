import { FirebaseApp, initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FB_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FB_AUTHDOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FB_DATABASEURL,
  projectId: process.env.NEXT_PUBLIC_FB_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FB_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FB_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FB_APPID,
  measurementId: process.env.NEXT_PUBLIC_FB_MEASUREMENTID,
};
let app: FirebaseApp | undefined, analytics: any;
if (typeof window !== undefined) {
  app = initializeApp(firebaseConfig);
  analytics = isSupported().then((yes) => (yes ? getAnalytics(app) : null));
}

export { app, analytics };
