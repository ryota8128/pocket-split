import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { adminAuth, adminDb } from '@/lib/firebase/admin/init';
import { COLLECTIONS } from '@/constants/firestore/firestore-keys';


export default async function Home() {
  const header = headers().get('authorization') as string | null;
  if (header === null) {
    console.log('ログインし直してください');
    redirect('/login');
  }
  // Bearerを削除
  const idToken = header.split(' ')[1];
  let authUser;
  try {
    authUser = await adminAuth.verifyIdToken(idToken);
    console.log('認証成功', authUser);
  } catch (error) {
    console.error('認証失敗', error);
    redirect('/login');
  }
  let redirectFlag = false;
  try {
    const doc = await adminDb.collection(COLLECTIONS.USERS).doc(authUser.uid).get();
    if (!doc.exists) {
      console.log('新規ユーザー登録へ遷移');
      redirectFlag = true;
    }
  } catch (error) {
    console.error('ユーザー情報取得失敗');
    throw error;
  }
  if (redirectFlag) {
    redirect('/new-user');
  }
  return (
    <main className='flex min-h-screen flex-col items-center  p-24'>
      HOME
      <p> user: {authUser?.email}</p>
      <p> email認証：{authUser.email_verified?.toString()}</p>
      {/*<p>メール認証：{authUser ?}</p>*/}
      {}

      {/*<Button text={'email確認'} onClick={() => {*/}
      {/*  sendEmailVerification(auth.currentUser!).then(() => {*/}
      {/*    console.log('email sent');*/}
      {/*  });*/}
      {/*}}></Button>*/}

      {/*<Button text={'ログアウト'} onClick={() => {*/}
      {/*  signOut(auth).then(() => {*/}
      {/*    console.log('signed out');*/}
      {/*    // router.push('/login');*/}
      {/*  }).catch((error) => {*/}
      {/*    console.error(error);*/}
      {/*  });*/}
      {/*}}></Button>*/}

      {/*<button onClick={() => {*/}
      {/*  console.log(auth.currentUser?.email);*/}
      {/*}}>aaa*/}
      {/*</button>*/}


    </main>
  )
    ;
}
