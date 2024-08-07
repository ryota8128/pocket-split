'use client';

import { useSetAtom } from 'jotai';
import { LoginFormScopeProvider } from '@/jotai/atom/login-form.atom';
import { authUserAtom } from '@/jotai/atom/auth-user.atom';
import LoginForm from '@/components/login/LoginForm';
import { useEffect } from 'react';

export default function LoginClient() {
  const setAuthUser = useSetAtom(authUserAtom);
  useEffect(() => {
    setAuthUser(null);
  }, [setAuthUser]);

  return (
    <>
      <LoginFormScopeProvider>
        <LoginForm />
      </LoginFormScopeProvider>
    </>
  );
}
