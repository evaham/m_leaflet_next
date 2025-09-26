'use client';
import Link from 'next/link';

export default function ListOrderPage() {
    const list = [
        { id: 1, name: "자연그린 김밥단무김밥", orders: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 2, name: "자연그린 김밥단무지2", orders: false, price: 2551238, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 3, name: "자연그린 김밥단무지3", orders: false, price: 2512358, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 4, name: "자연그린 김밥단무지..외4", orders: true, price: 252258, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 5, name: "자연그린 김밥단무지4", orders: true, price: 253358, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 6, name: "자연그린 김밥단무지4", orders: true, price: 244558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 7, name: "자연그린 김밥단무지4", orders: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
        { id: 8, name: "자연그린 김밥단무지4", orders: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" }
    ];

  return (
    <>
      <div className="orderslist__info flex items-center justify-center h-7 text-sm text-rose-600 bg-rose-100">※주문내역은 6개월 간 보관합니다.</div>
      <ul className="orderslist flex flex-col p-1 gap-0.5">
        {list.map((item, index) => (
          <li key={index}>
            <Link href={"/DetailOrder"} className="ordersitem relative flex items-center gap-2 h-20 px-4 rounded-lg border border-slate-200 bg-white">
              <div className='ordersitem__group flex-1 flex flex-col justify-center gap-0.5'>
                <div className="ordersitem__time text-sm text-slate-400">25.4.19 11:30 주문</div>
                <div className="ordersitem__name">{item.name}</div>
              </div>
              <div className="ordersitem__price flex items-center ml-auto pr-4"><span className='mr-1 text-lg font-bold'>{item.price.toLocaleString()}</span>원</div>
              <div className='ordersitem__icon absolute right-2'><svg xmlns="http://www.w3.org/2000/svg" className='fill-slate-300' height="16px" viewBox="0 -960 960 960" width="16px" fill="#6f6f6f"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg></div>
            </Link>
          </li>
        ))}
        <div className="text__nodata flex flex-col items-center my-20 text-xl text-slate-400 font-bold">주문내역이 없습니다.</div>
      </ul>
    
    </>
  );
}