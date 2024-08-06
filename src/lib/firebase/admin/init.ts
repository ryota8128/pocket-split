import serviceAccount from './adminServiceKey.json';
import admin from 'firebase-admin';


if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}


export const adminAuth = admin.auth();
export const adminDb = admin.firestore();
