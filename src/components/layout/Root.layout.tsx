import React from 'react';
import { IChildren } from './layout.type';

const RootLayout = ({ children }: IChildren) => {
  return <main className="h-full flex flex-col justify-center items-center gap-8 bg-gray-100">{children}</main>;
};

export default RootLayout;
