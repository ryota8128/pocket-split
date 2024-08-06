import { atom, useAtomValue, useStore } from 'jotai';
import { atomWithMutation } from 'jotai-tanstack-query';
import Cookies from 'js-cookie';
import { auth } from '@/lib/firebase/init';
import { createUserWithEmailAndPassword } from '@firebase/auth';

export const newUserEmailAtom = atom<string>('');
export const newUserPasswordAtom = atom<string>('');
export const newUserPasswordConfirmAtom = atom<string>('');


export const passwordErrorMessageAtom = atom((get) => {
  const password = get(newUserPasswordAtom);
  if (password === '') return undefined;
  return password.length >= 6 ? undefined : 'パスワードは6文字以上で入力してください';
});
export const passwordConfirmErrorMessageAtom = atom((get) => {
  const password = get(newUserPasswordAtom);
  const passwordConfirm = get(newUserPasswordConfirmAtom);
  return password === passwordConfirm ? undefined : 'パスワードが一致しません';
});

export const emailErrorMessageAtom = atom((get) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = get(newUserEmailAtom);
  if (email === '') return undefined;
  return emailPattern.test(email) ? undefined : 'メールアドレスのフォーマットが正しくありません';
});

export const disableRegisterButtonAtom = atom((get) => {
  return !!get(passwordConfirmErrorMessageAtom) || !!get(emailErrorMessageAtom) || !!get(passwordErrorMessageAtom) || get(newUserEmailAtom) === '' || get(newUserPasswordAtom) === '';
});


interface RegisterUserProps {
  email: string;
  password: string;
}

export const registerUserAtom = atomWithMutation(() => ({
    mutationKey: ['registerUser'],
    mutationFn: async ({ email, password }: RegisterUserProps) => {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const idToken = await userCredential.user.getIdToken();
      Cookies.set('idToken', idToken, { secure: true, sameSite: 'strict', expires: 1 });
      console.log('ユーザ登録完了');
      return userCredential.user.uid;
    },
  }))
;

export const useRegisterUserMutation = () => {
  const store = useStore();
  const { mutate } = useAtomValue(registerUserAtom);

  return async () => {
    const email = store.get(newUserEmailAtom);
    const password = store.get(newUserPasswordAtom);
    return mutate({ email, password });
  };
};
