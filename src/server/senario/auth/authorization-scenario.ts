import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';
import { ScenarioResultType } from '@/server/senario/type/ScenarioResultType';
import { adminAuth } from '@/lib/firebase/admin/init';


export async function authorizationScenario(header: ReadonlyHeaders): Promise<ScenarioResultType<{ uid: string }>> {
  try {
    const authorization = header.get('authorization');
    if (authorization === null) {
      return {
        success: false,
        error: 'ログインし直してください',
      };
    }
    const idToken = authorization.split(' ')[1];
    const user = await adminAuth.verifyIdToken(idToken);
    return {
      success: true,
      data: {
        uid: user.uid,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: '認証に失敗しました',
    };
  }

}
