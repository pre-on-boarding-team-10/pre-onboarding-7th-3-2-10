import TableComponent from 'component/TableComponent';
import type { NextPage } from 'next';
import { useEffect, useCallback, useState } from 'react';
import { getList, getUserInfo } from './api/api';
const accountlist: NextPage = () => {
  const [buckets, setBuckets] = useState<object>([]);
  const [userInfo, setUserInfo] = useState<object>([]);

  const fetchData = useCallback(async () => {
    await getUserInfo()
      .then(({ data }) => {
        setUserInfo(data);
      })
      .catch((e) => {
        console.log(e);
      });

    await getList()
      .then(({ data }) => {
        setBuckets(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, []);
  console.log('userInfo', userInfo);

  return <TableComponent buckets={buckets} userInfo={userInfo} />;
};

export default accountlist;
