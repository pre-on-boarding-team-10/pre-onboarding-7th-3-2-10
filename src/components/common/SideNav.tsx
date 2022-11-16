import Link from 'next/link';
import React from 'react';
import { SessionStorageService } from 'src/service/SessionStorageService';

const SideNav = () => {
  const sessionStorageService = new SessionStorageService();
  return (
    <aside className="bg-slate-900 fixed">
      <header className="text-white font-bold text-2xl px-8 py-4">PREFACE</header>
      <nav className="flex flex-col text-slate-400 gap-4 mt-6">
        <Link className="px-4 py-2 hover:text-white hover:bg-sky-500" href="/users">
          사용자
        </Link>
        <Link className="px-4 py-2 hover:text-white hover:bg-sky-500" href="/" onClick={() => sessionStorageService.remove('accessToken')}>
          로그아웃
        </Link>
      </nav>
    </aside>
  );
};

export default SideNav;
