'use server';

import { headers } from 'next/headers';
import { authorizationScenario } from '@/server/senario/auth/authorization-scenario';
import { adminDb } from '@/lib/firebase/admin/init';
import { COLLECTIONS } from '@/constants/firestore/firestore-keys';


interface UserRegisterResult {
  success: boolean;
  error?: string;
}

export async function userRegisterAction(username: string): Promise<UserRegisterResult> {
  try {
    const authResult = await authorizationScenario(headers());
    if (!authResult.success) {
      return { success: false, error: '認証に失敗しました。ログインし直してください。' };
    }
    const { uid } = authResult.data;
    await adminDb.collection(COLLECTIONS.USERS).doc(uid).set({ username });
    return { success: true };
  } catch (error) {
    return { success: false, error: 'ユーザー登録に失敗しました。' };
  }
}


