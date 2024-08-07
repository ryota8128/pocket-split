import { atom } from 'jotai';
import { ScopeProvider } from 'jotai-scope';
import React from 'react';

export const emailAtom = atom<string>('');

export const passwordAtom = atom<string>('');


const loginFormScopeAtoms = [
  emailAtom,
  passwordAtom,
] as const;

export const LoginFormScopeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScopeProvider atoms={loginFormScopeAtoms}>
      {children}
    </ScopeProvider>
  );

};

