import { atom, useAtomValue, useStore } from 'jotai';
import { atomWithMutation } from 'jotai-tanstack-query';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from '@/lib/firebase/init';

export const newUserEmailAtom = atom<string>('');
export const newUserPasswordAtom = atom<string>('');
export const newUserPasswordConfirmAtom = atom<string>('');

export const passwordErrorMessageAtom = atom((get) => {
  const password = get(newUserPasswordAtom);
  return password.length >= 6 ? undefined : 'パスワードは6文字以上で入力してください';
});
export const passwordConfirmErrorMessageAtom = atom((get) => {
  const password = get(newUserPasswordAtom);
  const passwordConfirm = get(newUserPasswordConfirmAtom);
  return password === passwordConfirm ? undefined : 'パスワードが一致しません';
});

export const emailErrorMessageAtom = atom((get) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (get(newUserEmailAtom) === '') return undefined;
  return emailPattern.test(get(newUserEmailAtom)) ? undefined : 'メールアドレスが正しくありません';
});

export const disableRegisterButtonAtom = atom((get) => {
  return !!get(passwordConfirmErrorMessageAtom) || !!get(emailErrorMessageAtom) || !!get(passwordErrorMessageAtom) || get(newUserEmailAtom) === '';
});


interface RegisterUserProps {
  email: string;
  password: string;

}

export const registerUserAtom = atomWithMutation(() => ({
  mutationKey: ['registerUser'],
  mutationFn: async ({ email, password }: RegisterUserProps) => {
    return await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('ユーザ登録完了', user.email);
        return user.email;
      })
      .catch((error) => {
        const errorMessage = error.message;
        throw new Error(errorMessage);
      });
  },
}));

export const useRegisterUserMutation = () => {
  const store = useStore();
  const { mutate } = useAtomValue(registerUserAtom);

  return () => {
    const email = store.get(newUserEmailAtom);
    const password = store.get(newUserPasswordAtom);
    mutate({ email, password });
  };
};
