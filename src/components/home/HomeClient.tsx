'use client';
import { UserDto } from '@/server/presentation/dto/user.dto';
import { authUserAtom } from '@/jotai/atom/auth-user.atom';
import { useSetAtom } from 'jotai';
import React, { useEffect } from 'react';
import Button from '@/components/ui/Button';
import { auth } from '@/lib/firebase/init';
import { useRouter } from 'next/navigation';
import { customSignOut } from '@/utils/auth/sign-out';


interface HomeClientProps {
  readonly user: UserDto;
}

export default function HomeClient({ user }: HomeClientProps) {
  const router = useRouter();

  const setAuthUser = useSetAtom(authUserAtom);
  useEffect(() => {
    setAuthUser(user);
  }, [setAuthUser, user]);

  return (
    <>
      <main className='flex min-h-screen flex-col items-center  p-24'>
        HOME
        <p> user: {user.username}</p>
        <Button text={'ログアウト'} onClick={async () => {
          await customSignOut(auth, router);
        }} />

      </main>
    </>
  )
    ;
}
