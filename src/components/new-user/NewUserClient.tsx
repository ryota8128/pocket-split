'use client';
import TextInput from '@/components/ui/TextInput';
import { Header } from '@/components/ui/Header';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import { userRegisterAction } from '@/server/actions/user-register.action';
import { useRouter } from 'next/navigation';


export default function NewUserClient() {
  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  return (

    <div className={'mx-auto max-w-2xl'}>
      <Header content={'あなたの表示名を入力してください'} type={'h1'} className={`font-bold mt-40 mb-10 `} />
      <TextInput type={'text'} value={username} onChange={(e) => setUsername(e.target.value)} />
      <Button className={'mt-12 max-w-24 mx-auto block'} text={'登録'} onClick={async () => {
        const result = await userRegisterAction(username);
        if (result.success) {
          console.log('登録成功');
          router.push('/');
        } else {
          console.log(result.error);
          router.replace('/login');
        }
      }} />
    </div>
  );
}
