import { Auth, signOut } from '@firebase/auth';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import Cookies from 'js-cookie';


export async function customSignOut(auth: Auth, router: AppRouterInstance) {
  await signOut(auth)
    .then(() => {
      console.log('logout success');
      router.push('/login');
      Cookies.remove('idToken');
      console.log('cookie remove', Cookies.get('idToken'));
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}
