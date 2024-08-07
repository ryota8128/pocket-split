import { headers } from 'next/headers';
import { authorizationScenario } from '@/server/senario/auth/authorization-scenario';
import { redirect } from 'next/navigation';
import React from 'react';
import LoginClient from '@/components/login/LoginClient';

export default async function LoginPage() {
  const authResult = await authorizationScenario(headers());
  if (authResult.success) {
    redirect('/');
  }
  return (
    <>
      <LoginClient />
    </>);
}
