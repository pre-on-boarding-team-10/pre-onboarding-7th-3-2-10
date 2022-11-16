import { atom } from 'recoil';

const accessTokenAtom = atom<string>({
  key: 'accessTokenAtom',
  default: '',
});

export { accessTokenAtom };
