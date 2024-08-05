'use client';
import Button from '@/components/ui/Button';
import { deleteUser, getAuth, onAuthStateChanged, sendEmailVerification, signOut, User } from '@firebase/auth';
import { auth } from '@/lib/firebase/init';

import { useRouter } from 'next/navigation';

import { useAtom } from 'jotai';
import { userAtom } from '@/jotai/atom/user.atom';


export default function Home() {
  const router = useRouter();
  const [user, setUser] = useAtom(userAtom);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('user logged in');
      setUser(user);
    } else {
      setUser(null);
      router.push('/login');
    }
  });


  if (!auth.currentUser) {
    return <></>;
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      HOME
      <p> user: {user?.email}</p>
      <p>メール認証：{user?.emailVerified.toString()}</p>
      {}

      <Button text={'email確認'} onClick={() => {
        sendEmailVerification(auth.currentUser!).then(() => {
          console.log('email sent');
        });
      }}></Button>

      <Button text={'ログアウト'} onClick={() => {
        signOut(auth).then(() => {
          console.log('signed out');
          // router.push('/login');
        }).catch((error) => {
          console.error(error);
        });
      }}></Button>

      <button onClick={() => {
        console.log(auth.currentUser?.email);
      }}>aaa
      </button>


    </main>
  )
    ;
}
