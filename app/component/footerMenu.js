'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// 페이지 주소



export default function FooterMenu() {
  const pathname = usePathname();

  const menuItems = [
    {
      name: '전단',
      path: '/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 fill-slate-400' height="24px" viewBox="0 -960 960 960" width="24px"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" /></svg>
      ),
      activeicon: (
        <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 fill-blue-700' height="24px" viewBox="0 -960 960 960" width="24px"><path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z" /></svg>
      ),
      alert: false,
      alertCount: 0,
    },
    {
      name: '쿠폰',
      path: '/ListCoupon',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 fill-slate-400' height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm0-160q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm0-160q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm320 440H160q-33 0-56.5-23.5T80-240v-160q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-160q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v160q-33 0-56.5 23.5T800-480q0 33 23.5 56.5T880-400v160q0 33-23.5 56.5T800-160Zm0-80v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102h640ZM480-480Z"/></svg>
      ),
      activeicon:(
        <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 fill-blue-700' height="24px" viewBox="0 -960 960 960" width="24px"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm0-160q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm0-160q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm320 440H160q-33 0-56.5-23.5T80-240v-160q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-160q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v160q-33 0-56.5 23.5T800-480q0 33 23.5 56.5T880-400v160q0 33-23.5 56.5T800-160Z" /></svg>
      ),
      alert: false,
      alertCount: 0,
    },
    {
      name: '장바구니',
      path: '/ListCart',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 fill-slate-400' height="24px" viewBox="0 -960 960 960" width="24px"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
      ),
      activeicon: (
        <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 fill-blue-700' height="24px" viewBox="0 -960 960 960" width="24px"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" /></svg>
      ),
      alert: true,
      alertCount: 2,
    },
    {
      name: '주문내역',
      path: '/ListOrder',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 fill-slate-400' height="24px" viewBox="0 -960 960 960" width="24px"><path d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
      ),
      activeicon: (
        <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7 fill-blue-700' height="24px" viewBox="0 -960 960 960" width="24px"><path d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" /></svg>
      ),
      alert: false,
      alertCount: 0,
    },
  ];

  return (
    <nav className='fixed right-0 bottom-0 left-0 h-20 flex gap-auto bg-white border-t border-gray-200'>
      {menuItems.map((item) => (
        <Link href={item.path} key={item.name} className='relative flex-1 flex flex-col items-center justify-center text-center'>
          {item.alert && item.alertCount > 0 && (
            <span className="absolute left-1/2 top-1/2 -mt-8 ml-2 flex items-center justify-center min-w-4.5 h-4.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {item.alertCount}
            </span>
          )}
          {pathname === item.path ? item.activeicon : item.icon}
          <div className="text-sm text-slate-700">{item.name}</div>
        </Link>
      ))}
    </nav>
  );
}
