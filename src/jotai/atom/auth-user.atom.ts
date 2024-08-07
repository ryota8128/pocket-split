import { atom } from 'jotai';
import { UserDto } from '@/server/presentation/dto/user.dto';
import { useHydrateAtoms } from 'jotai/utils';
import React from 'react';

export const authUserAtom = atom<UserDto | null>(null);


interface AuthUserAtomHydratorProps {
  readonly user: UserDto;
  readonly children: React.ReactNode;
}
