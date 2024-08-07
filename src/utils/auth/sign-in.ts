import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { Auth, signInWithEmailAndPassword } from '@firebase/auth';
import Cookies from 'js-cookie';

export async function signIn(auth: Auth, email: string, password: string, router: AppRouterInstance) {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('login success');
      router.push('/');
      return userCredential.user.getIdToken();
    })
    .then((idToken) => {
      const secure = process.env.NODE_ENV === 'production';
      Cookies.set('idToken', idToken, { secure, sameSite: 'strict', expires: 1 });
      console.log('idToken set');
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}
