import { atom } from 'jotai';
import { User } from '@firebase/auth';

export const authAtom = atom<User | null>(null);
