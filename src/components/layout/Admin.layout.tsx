import React from 'react';
import { IChildren } from './layout.type';

const AdminRootLayout = ({ children }: IChildren) => {
  return <section className="flex h-full">{children}</section>;
};

const AdminMainLayout = ({ children }: IChildren) => {
  return <main className="w-full bg-gray-100 ml-[168.52px] overflow-y-auto">{children}</main>;
};

const AdminContentLayout = ({ children }: IChildren) => {
  return <section className="px-4 py-10 flex flex-col gap-10">{children}</section>;
};

export { AdminRootLayout, AdminMainLayout, AdminContentLayout };
