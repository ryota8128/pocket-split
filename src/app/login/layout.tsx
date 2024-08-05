import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'ログイン',
  description: 'ログインページ',
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: Readonly<LayoutProps>) {
  return (
    <>
      {children}
    </>
  );
}
