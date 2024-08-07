import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { authorizationScenario } from '@/server/senario/auth/authorization-scenario';
import { getUserScenario } from '@/server/senario/user/getUserScenario';
import HomeClient from '@/components/home/HomeClient';


export default async function Home() {
  const authResult = await authorizationScenario(headers());
  if (!authResult.success) {
    console.error(authResult.error);
    redirect('/login');
  }
  const getUserResult = await getUserScenario(authResult.data.uid);
  if (!getUserResult.success) {
    if (getUserResult.errorCode === 'USER_NOT_FOUND') {
      redirect('/new-user');
    }
    console.error(getUserResult.error);
    redirect('/login');
  }
  const user = getUserResult.data.user;
  return (
    <HomeClient user={user.toDto()} />
  );
}
