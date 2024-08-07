'use client';
import React from 'react';
import Link from 'next/link';
import { useAtomValue } from 'jotai';
import { authUserAtom } from '@/jotai/atom/auth-user.atom';


export default function NavBar({}: {}) {
  const authUser = useAtomValue(authUserAtom);
  const isLoggedIn = authUser !== null;

  return (
    <div className='flex justify-between items-center p-4 bg-blue-400 text-white'>
      <div className='text-2xl font-bold'>
        Pocket Split
      </div>
      <div className='flex space-x-4'>
        {isLoggedIn &&
          <>
            <Link href='/' className='hover:text-blue-300'>Home</Link>
            <Link href='/' className='hover:text-blue-300'>Account</Link>
            <Link href='/' className='hover:text-blue-300'>{authUser.username}</Link>
          </>
        }
      </div>
    </div>
  );
}
