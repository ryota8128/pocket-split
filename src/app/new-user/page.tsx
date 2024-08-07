import NewUserClient from '@/components/new-user/NewUserClient';
import { headers } from 'next/headers';
import { authorizationScenario } from '@/server/senario/auth/authorization-scenario';
import { redirect } from 'next/navigation';
import { adminDb } from '@/lib/firebase/admin/init';


export default async function NewUserPage() {

  const result = await authorizationScenario(headers());
  if (!result.success) {
    console.error(result.error);
    redirect('/login');
  }
  try {
    const doc = await adminDb.collection('users').doc(result.data.uid).get();
    if (doc.exists) {
      redirect('/');
    }
  } catch (error) {
    console.error('ユーザー情報取得で不明なエラーが発生しました。');
    redirect('/login');
  }
  return (
    <div className={'mx-auto max-w-2xl'}>
      <NewUserClient />
    </div>
  );
}
