'use client';
import Image from "next/image";

import React, { useState } from "react";
export default function Home() {

  const list = [
    { id: 1, name: "텍스트의 길이가 엄청 길어질 경우 어떻게 보여지는지 확인 해 보자 2줄을 넘어갈 경우 보여지는 화면.", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
    { id: 2, name: "자연그린 김밥단무지2", cart: false, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
    { id: 3, name: "자연그린 김밥단무지3", cart: false, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
    { id: 4, name: "자연그린 김밥단무지4", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
    { id: 5, name: "자연그린 김밥단무지5", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
  ];

  const [listType, setListType] = useState(1); // 'grid' 또는 'list'

  return (
    <div>
      <div className="sticky top-16 z-40 border-b border-slate-200">
        <div className="p-2.5 text-center bg-slate-100">
          <span className="block text-xl">11</span>
          <span className="sample__date popStartDate"></span>
          <span className="popExDate"></span>
        </div>
        <div className="swiper mySwiper swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden p-1 bg-white overflow-x-auto">
          <div className="scroll_btn swiper-wrapper flex flex-wrap gap-2 min-w-72 h-auto *:w-7 *:px-4 *:py-1.5 *:border *:border-slate-600 *:rounded-full *:text-sm *:font-bold *:text-slate-600 ">
            <div className="btn_comm btn_0 swiper-slide swiper-slide-active" onClick={()=>setListType(1)}>행사코123너1</div>
            <div className="btn_comm btn_0 swiper-slide swiper-slide-active" onClick={()=>setListType(2)}>행사코너1</div>
            <div className="btn_comm btn_0 swiper-slide swiper-slide-active" onClick={()=>setListType(3)}>행사코너1</div>
            <div className="btn_comm btn_0 swiper-slide swiper-slide-active" onClick={()=>setListType(4)}>행사코너1</div>
            <div className="btn_comm btn_1 swiper-slide swiper-slide-next">행사코너2</div>
            <div className="btn_comm btn_1 swiper-slide swiper-slide-next">행사코너2</div>
            <div className="btn_comm btn_1 swiper-slide swiper-slide-next">행사코너2</div>
            <div className="btn_comm btn_1 swiper-slide swiper-slide-next">행사코너2</div>
            <div className="btn_comm btn_1 swiper-slide swiper-slide-next">행사코너2</div>
          </div>
          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
      </div>
      <div className="">
        <ul id="js_changeList" className={`group grid grid-cols-1 px-1 py-2.5 gap-0.5 ${listType === 2 ? 'grid-cols-2' : listType === 3 ? 'grid-cols-3' : listType === 4 ? 'grid-cols-4' : 'grid-cols-1' }`}>
          {list.map((item, index) => (
            <li key={index} onClick={() => setShowPopup2(true)}>
              <div className="goods__card overflow-hidden p-0.5 rounded-xl border border-slate-300 bg-white">
                <div className="relative flex items-center justify-center rounded-xl bg-slate-400">
                  <img className="opacity-95" src={item.image} />
                  <div className="absolute bottom-1/12 right-1/12 flex items-center justify-center size-11 border border-blue-700 rounded-full bg-white *:fill-blue-500 group-[.grid-cols-3,.grid-cols-4]:size-7" aria-label="장바구니">
                    <svg xmlns="http://www.w3.org/2000/svg" height="60%" viewBox="0 -960 960 960" width="60%" fill="#666">
                      <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-2 *:font-bold *leading-tight *:text-center group-[.grid-cols-3,.grid-cols-4]:p-0">
                  <div className="previewEtc1 text-sm text-blue-500 group-[.grid-cols-4]:text-xs">공a유이미지이미지</div>
                  <div className="text-4xl font-[tahoma] text-red-500 group-[.grid-cols-2]:text-3xl group-[.grid-cols-3]:text-lg group-[.grid-cols-4]:text-sm">{item.price.toLocaleString()}</div>
                  <div className="mt-2 text-center text-lg leading-tight line-clamp-2 group-[.grid-cols-2]:text-base  group-[.grid-cols-2]:h-10 group-[.grid-cols-3,.grid-cols-4]:text-sm">{item.name}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}