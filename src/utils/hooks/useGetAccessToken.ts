import { useRecoilValue } from 'recoil';
import { accessTokenAtom } from 'src/utils/atom/auth';

const useGetAccessToken = () => {
  return useRecoilValue(accessTokenAtom);
};

export default useGetAccessToken;
