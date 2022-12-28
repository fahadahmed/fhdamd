import admin, { ServiceAccount } from 'firebase-admin';
import serviceAccountKey from '../serviceAccountKey.json';

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey as ServiceAccount),
  });
  console.log('Firebase initialised');
} catch (error: any) {
  console.log('Firebase admin initialization error', error.stack);
}

export default admin;
