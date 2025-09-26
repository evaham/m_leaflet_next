'use client';
import Image from "next/image";

import React, { useState } from "react";
import PopupGoodsInfo from "./component/popupGoodsInfo";
export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const list = [
    { id: 1, name: "텍스트의 길이가 엄청 길어질 경우 어떻게 보여지는지 확인 해 보자 2줄을 넘어갈 경우 보여지는 화면.", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
    { id: 2, name: "자연그린 김밥단무지2", cart: false, price: 2558, image: "http://file.2ms.kr/WebLink/35546/74473849-b2a5-47f8-a780-14269353c9ce.jpg" },
    { id: 3, name: "자연그린 김밥단무지3", cart: false, price: 2558, image: "http://file.2ms.kr/WebLink/35546/4af934d2-5731-4c72-91d5-fc73936b6826.jpg" },
    { id: 4, name: "자연그린 김밥단무지4", cart: true, price: 2558, image: "http://file.2ms.kr/WebLink/35546/aba872fd-992d-475f-8df1-7ebd9fc871b4.jpg" },
    { id: 5, name: "자연그린 김밥단무지5", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
  ];
  const [activeTab, setActiveTab] = useState(1);

  const [listType, setListType] = useState(); 
  // 'type2' - 'grid grid-cols-2' 2단
  // 'type3' - 'grid grid-cols-3' 3단
  // 'type4' - 'grid grid-cols-4' 4단
  // 'style2' - 'flex flex-col' 세로형
  // 'style3' - 'flex flex-col' 텍스트형

  const swiperData = [
    { id: 1, name: "기본" },
    { id: 2, name: "type2" },
    { id: 3, name: "type3" },
    { id: 4, name: "type4" },
    { id: 5, name: "style2" },
    { id: 6, name: "style3" },
  ];


  return (
    <>
      <div className="sticky top-16 z-40 border-b border-slate-200">
        <div className="flex items-center justify-center h-12 px-2 text-center bg-slate-100">
          <span className="flex items-center justify-center h-12 text-xl">11</span>
          <span className="sample__date popStartDate"></span>
          <span className="popExDate"></span>
        </div>
      </div>
      <div className="sample__banner">
        <img src="http://file.2ms.kr/WebLink/35546/thumb_e8cfe58e-20e4-45c2-aeda-2608098c93dc.png" alt="Sample Banner" className="w-full h-auto" />
      </div>

      <div className="swiper mySwiper swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden sticky top-28 z-10 flex h-11 border-b border-slate-300 bg-white">
        <div className="scroll_btn swiper-wrapper flex h-full p-1 gap-1 overflow-x-auto scroll-hidden">
          { swiperData.map((item) => (
            <div key={item.id} className={`
              btn_comm btn_0 swiper-slide swiper-slide-active flex items-center justify-center shrink-0 px-4 py-1 border border-slate-500 rounded-full flex-nowrap text-sm font-bold
              ${ activeTab === item.id ? 'border-[#21409a] bg-[#21409a] text-white' : 'bg-white' }
            `} onClick={()=>{setListType(item.name === '기본' ? '' : item.name); setActiveTab(item.id)}}>{item.name}</div>
            ))
          }

        </div>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>

      <div className="bg-yellow-100">
        <div className="sample__banner sample__banner--type2 flex items-center justify-center min-h-20 bg-slate-300">
          <img className="w-full h-auto" src="http://file.2ms.kr/WebLink/35546/thumb_2ea6e138-f331-4496-a8d6-de9f95edc783.png" />
        </div>

        <ul id="js_changeList" 
          className={`
            group px-1 py-2.5 gap-0.5
            ${ listType === 'type2' ? 'type2' : listType === 'type3' ? 'type3' : listType === 'type4' ? 'type4' : listType === 'style2' ? 'style2' : listType === 'style3' ? 'style3' : 'type1' }
          `}>
          {list.map((item, index) => (
            <li key={index} onClick={() => setShowPopup(true)}>
              <div className="goods__card overflow-hidden group-[.type1,.type2,.type3,.type4]:grid group-[.style2,.style3]:flex gap-1 p-1 rounded-xl border border-slate-300 bg-white">
                <div className="relative overflow-hidden flex items-center justify-center w-full rounded-lg group-[.type2]:h-36 group-[.type3]:h-24 group-[.type4]:h-20 group-[.style2]:size-33 group-[.style3]:hidden">
                  <img className="max-w-full max-h-full w-auto h-auto" src={item.image} />
                  <div className="absolute top-0 left-0 size-12 group-[.type3,.type4]:hidden">
                    <img src="http://file.2ms.kr/WebLink/35546/20250619_141849_1120.png" />
                  </div>
                  <div className="absolute bottom-1/24 right-1/24 flex items-center justify-center size-11 border border-blue-700 *:fill-blue-500 rounded-full bg-white  group-[.type3,.type4]:size-7 group-[.style2]:size-9" aria-label="장바구니">
                    <svg xmlns="http://www.w3.org/2000/svg" height="60%" viewBox="0 -960 960 960" width="60%" fill="#666">
                      <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" />
                    </svg>
                  </div>
                </div>
                {listType === 'style3' ? (
                  <div className="relative flex flex-wrap *:font-bold *:leading-tight text-right">
                    <div className="w-full mt-2 text-base leading-tight line-clamp-2 text-left">{item.name}</div>
                    <div className="flex items-end previewEtc1 text-sm text-blue-500 leading-none mr-3 ml-auto text-right">공a유이미지이미지</div>
                    <div className="mt-1 text-3xl font-[tahoma] text-red-500 inline-block text-right">{item.price.toLocaleString()}</div>
                    <div className="absolute bottom-1 left-1 flex items-center justify-center size-8 border border-blue-700 *:fill-blue-500 rounded-full bg-white" aria-label="장바구니">
                      <svg xmlns="http://www.w3.org/2000/svg" height="60%" viewBox="0 -960 960 960" width="60%" fill="#666">
                        <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM208-800h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Z" />
                      </svg>
                    </div>
                  </div>
                ) : ( 
                  <div className="flex flex-col justify-center *:font-bold *:leading-tight group-[.type1,.type2,.type3,.type4]:*:text-center group-[.style2]:flex-1">
                    <div className="previewEtc1 text-sm text-blue-500 leading-none group-[.type4]:text-xs group-[.style]:span">공a유이미지이미지</div>
                    <div className="text-4xl font-[tahoma] text-red-500 group-[.type2]:text-3xl group-[.type3]:text-lg group-[.type4]:text-sm">{item.price.toLocaleString()}</div>
                    <div className="mt-2 text-lg leading-tight line-clamp-2 group-[.type2]:h-10 group-[.type3]:h-9 group-[type4]:h-8 group-[.type2]:text-base group-[.type3,.type4]:text-sm">{item.name}</div>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
        <ul className="group px-1 py-2.5 gap-0.5">
          <li>
            <div className="goods__card overflow-hidden gap-1 p-1 rounded-xl border border-slate-300 bg-white ">
              <pre className="goods__pre m-2.5 text-left whitespace-pre-wrap break-words overflow-auto [&_h2]:text-xl [&_h5]:text-lg [&_h6]:text-base [&_h2]:font-bold [&_h5]:font-bold [&_h6]:font-normal [&_h2]:mb-1.5 [&_h5]:mb-1 [&_h6]:mb-0.5 [&_p]:mb-1.5">
                <div className="font-sans" dangerouslySetInnerHTML={{ __html: `
                  <h2><span style="color: #01a707">✨</span><span style="color: #4f46c7">금주 행사 안내</span>✨</h2><h5><span style="color: #096fff">★★제과 초특가★★</span></h5><h6>동서코코볼 570g 3580</h6><h6>프링글스 110g 1.980</h6><h6>미룡쌀과자 275g 1980</h6><h6>커널스팝콘 350g 4980</h6><p><br /></p><h5><span style="color: #096fff">★★유제품 초특가★★</span></h5><h6>서울365우유기획 900ml*2 3980</h6><h6>매일우유기획 900ml*2 3980</h6><h6>밀크플러스 900ml 990</h6><h6>바나나우유혼합 5입 3.980</h6><h6>빙그레요플레 8입 2.980</h6><h6>엔요 9입 1.980</h6><p><br /></p><h5><span style="color: #096fff">★★음료★★</span></h5><h6>베지밀검은콩두유 190ml*15 9900</h6><h6>삼육고소한참깨두유 190ml*24 14900</h6><h6>동아컨피더스 12입 6980</h6><h6>동아화이브미 20입 7980</h6><h6>남양검은콩깨두유 24입 8500</h6><h6>남양천연수 2리터*6 1980</h6><p><br /></p><h5><span style="color: #096fff">★★비식품★★</span></h5><h6>애경2080칫솔기획 10입 4980</h6><h6>애경2080치약기획 3입 3480</h6><h6>쌍용후레쉬아물티슈 100매 780</h6><h6>모나리자각티슈 3입 2980</h6><h6>프렌코키친타올 6롤 2980</h6><h6>다우니 1리터 4980</h6><p><br /></p><h5><span style="color: #096fff">★★양곡 초특가★★</span></h5><h6>맑은쌀 20 kg 49800</h6><h6>경기미 20kg 59500</h6><h6>가을아침 10kg 29800</h6><h6>찹쌀 10kg 35000</h6><p><br /></p><h5><span style="color: #096fff">★★식자재★★</span></h5><h6>오양부산어묵 2kg 5980</h6><h6>오양실속맛살 1kg 4980</h6><h6>오양반찬소세지 1kg 3280</h6><h6>삼호불고기햄 1kg 3480</h6><h6>오양하이비엔나 1kg 5580</h6><h6>오양빅켄터키후랑크 1kg 4980</h6><h6>송학쌀떡/떡볶이떡 3kg 6480</h6><p><br /></p>
                `}}
                ></div>
              </pre>
            </div>
          </li>
        </ul>
      </div>
      <PopupGoodsInfo showPopup={showPopup} setShowPopup={setShowPopup} />
    </>
  );
}