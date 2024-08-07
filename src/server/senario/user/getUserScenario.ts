import { adminDb } from '@/lib/firebase/admin/init';
import { COLLECTIONS } from '@/constants/firestore/firestore-keys';
import { UserModel } from '@/server/applicaiton/model/user.model';
import { ScenarioResultWithCodeType } from '@/server/senario/type/ScenarioResultType';

import { UserDto } from '@/server/presentation/dto/user.dto';

type Code = 'USER_NOT_FOUND' | 'FAILED_TO_GET_USER';

export async function getUserScenario(uid: string): Promise<ScenarioResultWithCodeType<{ user: UserModel }, Code>> {
  try {
    const doc = await adminDb.collection(COLLECTIONS.USERS).doc(uid).get();
    if (!doc.exists) {
      return {
        success: false,
        error: 'ユーザー情報が存在しません',
        errorCode: 'USER_NOT_FOUND',
      };
    }
    const user = UserModel.from(doc.data() as UserDto);
    return {
      success: true,
      data: { user },
    };
  } catch (error) {
    return {
      success: false,
      error: 'ユーザー情報取得に失敗しました。',
      errorCode: 'FAILED_TO_GET_USER',
    };
  }
}
