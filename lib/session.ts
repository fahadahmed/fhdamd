import admin from './firebaseAdmin';

// const adminAuth = admin.auth();

async function getSessionToken(idToken: any) {
  const token = await idToken;
  console.log('authToken', token);
  console.log(window);
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    console.log(decodedToken);
    if (new Date().getTime() / 1000 - decodedToken.auth_time > 5 * 60) {
      throw new Error('Recent sign in required');
    }
    const twoWeeks = 60 * 60 * 24 * 14 * 1000;
    return admin.auth().createSessionCookie(idToken, { expiresIn: twoWeeks });
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function createUserSession(idToken: string, redirectTo: string) {
  const token = await getSessionToken(idToken);
  console.log('token in createUserSession', idToken);
}
