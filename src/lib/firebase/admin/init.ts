import serviceAccount from './adminServiceKey.json';
import admin from 'firebase-admin';


if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}


export const adminAuth = admin.auth();
export const adminDb = admin.firestore();
