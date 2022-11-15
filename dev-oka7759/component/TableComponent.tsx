import { Table, Tag } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import React from 'react';

interface DataType {
  key: number;
  user_fullname: string;
  user_name: string;
  broker_name: string;
  number: string;
  status: string;
  name: string;
  assets: string;
  payments: string;
  is_active: boolean;
  created_at: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: '고객명',
    dataIndex: 'user_fullname',
    key: 'user_fullname',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '브로커명',
    dataIndex: 'broker_id',
    key: 'broker_id',
    render: (text) => `${BROKERSDATA[Number(text)]}`,
  },
  {
    title: '계좌번호',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: '계좌상태',
    key: 'status',
    dataIndex: 'status',
    render: (text) => {
      if (STATUSDATA.관리자확인필요 === text) {
        return '관리자확인필요';
      } else if (STATUSDATA.운용중 === text) {
        return '운용중';
      } else if (STATUSDATA.입금대기 === text) {
        return '입금대기';
      } else if (STATUSDATA.투자중지 === text) {
        return '투자중지';
      } else if (STATUSDATA.해지 === text) {
        return '해지';
      }
    },
  },
  {
    title: '계좌명',
    key: 'name',
    dataIndex: 'name',
  },
  {
    title: '평가금액',
    key: 'assets',
    dataIndex: 'assets',
  },
  {
    title: '입금금액',
    key: 'payments',
    dataIndex: 'payments',
  },
  {
    title: '계좌활성화여부',
    key: 'is_active',
    dataIndex: 'is_active',
    render: (text) => (text === true ? <Tag color="green">O</Tag> : <Tag color="red">X</Tag>),
  },
  {
    title: '계좌계설일',
    key: 'created_at',
    dataIndex: 'created_at',
  },
];

interface ListProps {
  buckets: [];
  userInfo: [];
}

const TableComponent = (props: ListProps): React.ReactElement => {
  const { buckets, userInfo } = props;

  const data: DataType[] = [];
  buckets.forEach((item: {}, idxs: number) => {
    userInfo.forEach((items: {}) => {
      if (item.user_id === items.id) {
        data.push({ key: idxs, user_fullname: items.name, ...item });
      }
    });
  });

  console.log(data);
  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return <Table columns={columns} dataSource={data} onChange={onChange} />;
};

export default TableComponent;

const STATUSDATA = { 관리자확인필요: 9999, 입금대기: 1, 운용중: 2, 투자중지: 3, 해지: 4 };
const BROKERSDATA = {
  '209': '유안타증권',
  '218': '현대증권',
  '230': '미래에셋증권',
  '238': '대우증권',
  '240': '삼성증권',
  '243': '한국투자증권',
  '247': '우리투자증권',
  '261': '교보증권',
  '262': '하이투자증권',
  '263': 'HMC투자증권',
  '264': '키움증권',
  '265': '이베스트투자증권',
  '266': 'SK증권',
  '267': '대신증권',
  '268': '아이엠투자증권',
  '269': '한화투자증권',
  '270': '하나대투자증권',
  '279': '동부증권',
  '280': '유진투자증권',
  '288': '카카오페이증권',
  '287': '메리츠종합금융증권',
  '290': '부국증권',
  '291': '신영증권',
  '292': 'LIG투자증권',
  '271': '토스증권',
};
