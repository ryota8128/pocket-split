import TextInput from '@/components/ui/TextInput';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useAtom, useSetAtom } from 'jotai/index';
import { emailAtom, passwordAtom } from '@/jotai/atom/login-form.atom';
import { useRouter } from 'next/navigation';
import { signIn } from '@/utils/auth/sign-in';
import { auth } from '@/lib/firebase/init';

export default function LoginForm() {
  const [email, setUsername] = useAtom(emailAtom);
  const [password, setPassword] = useAtom(passwordAtom);
  const router = useRouter();
  const login = async () => {
    await signIn(auth, email, password, router);
  };


  return (
    <div className='max-w-2xl mx-auto mt-32'>
      <div className={`flex-col justify-center items-center`}>
        <h1 className='text-3xl font-bold'>ログイン</h1>
        <TextInput
          name='email'
          type='email'
          placeholder='Email'
          className='mt-10'
          value={email}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <TextInput
          name='password'
          type='password'
          placeholder='Password'
          className='mt-8'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button text='Login' onClick={login} className='my-8' />

        <div className='flex justify-center'>
          <Link href='/new-user'
                className='text-blue-400 underline hover:text-blue-600 align-text-top '>新規会員登録はこちら</Link>
        </div>

      </div>
    </div>
  );
}
