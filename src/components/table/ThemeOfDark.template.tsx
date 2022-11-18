import React from 'react';

interface IThemeOfDarkTableProps {
  renderTableBody: JSX.Element[] | JSX.Element;
  renderTableHeader?: JSX.Element[] | JSX.Element;
}

const ThemeOfDarkTableTemplate = (props: IThemeOfDarkTableProps) => {
  const { renderTableHeader, renderTableBody } = props;

  return (
    <table className="w-full text-xs text-left text-gray-500 dark:text-gray-400">
      {renderTableHeader && <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">{renderTableHeader}</thead>}
      <tbody>{renderTableBody}</tbody>
    </table>
  );
};

export default ThemeOfDarkTableTemplate;
