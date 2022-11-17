import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction } from 'react';

interface IPaginationBarProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  isPreviousData: boolean;
}

const PaginationBar = (props: IPaginationBarProps) => {
  const { currentPage, setCurrentPage, isPreviousData } = props;
  const router = useRouter();
  const query = router.query;

  return (
    <div className="flex justify-center">
      <Link
        href={{
          pathname: router.pathname,
          query: {
            ...query,
            page: Math.max(currentPage - 1, 0),
          },
        }}
        className={`prev_pagination_btn ${currentPage === 1 && 'opacity-60 pointer-events-none'}`}
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
        passHref
        shallow
        replace
      >
        Prev
      </Link>
      <span className="num_pagination_btn">{currentPage}</span>
      <Link
        href={{
          pathname: router.pathname,
          query: {
            ...query,
            page: currentPage + 1,
          },
        }}
        className={`next_pagination_btn ${isPreviousData && 'opacity-60 pointer-events-none'}`}
        onClick={() => setCurrentPage((prev) => prev + 1)}
        passHref
        shallow
        replace
      >
        Next
      </Link>
    </div>
  );
};

export default PaginationBar;
