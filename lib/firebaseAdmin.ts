import admin, { ServiceAccount } from 'firebase-admin';
import serviceAccountKey from '../serviceAccountKey.json';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccountKey as ServiceAccount),
    });
    console.log('Firebase initialised');
  } catch (error: any) {
    console.log('Firebase admin initialization error', error.stack);
  }
}

//const adminAuth = admin.auth();

async function getSessionToken(idToken: any) {
  const token = await idToken;
  console.log('authToken', token);
  // try {
  //   const decodedToken = await adminAuth.verifyIdToken(token);
  //   console.log(decodedToken);
  //   // if (new Date().getTime() / 1000 - decodedToken.auth_time > 5 * 60) {
  //   //   throw new Error('Recent sign in required');
  //   // }
  //   // const twoWeeks = 60 * 60 * 24 * 14 * 1000;
  //   // return adminAuth.createSessionCookie(idToken, { expiresIn: twoWeeks });
  // } catch (error: any) {
  //   throw new Error(error);
  // }
}
export default admin;
export { getSessionToken };
