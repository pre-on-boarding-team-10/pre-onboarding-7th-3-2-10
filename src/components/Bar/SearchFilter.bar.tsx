import { useRouter } from 'next/router';
import React, { ChangeEvent } from 'react';
import { ISearchFilterBarProps } from 'src/types/global.type';

const SearchFilterBar = (props: ISearchFilterBarProps) => {
  const { searchValue, setSearchValue, setCurrentPage } = props;
  const router = useRouter();
  const isSearchState = router.query.state === 'search' || false;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setSearchValue({ ...searchValue, [name]: value });
  };

  const enableSearchMode = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSearchValue({ ...searchValue, submitted: searchValue.changed });
    router.replace({
      pathname: router.pathname,
      query: { state: 'search', q: searchValue.changed },
    });
    setCurrentPage(1);
  };

  const disableSearchMode = () => {
    router.replace({
      pathname: router.pathname,
      query: {},
    });
    setCurrentPage(1);
    setSearchValue({ ...searchValue, submitted: '' });
  };

  return (
    <div className="pb-4">
      <label htmlFor="table-search" className="sr-only">
        Search
      </label>
      <form method="post" className="flex gap-2" onSubmit={enableSearchMode}>
        <input
          type="text"
          name="changed"
          value={searchValue.changed}
          className="block py-2 px-4 w-80 text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for items"
          onChange={onChange}
        />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={enableSearchMode}
        >
          검색
        </button>
        {isSearchState && (
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            onClick={disableSearchMode}
          >
            X
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchFilterBar;
