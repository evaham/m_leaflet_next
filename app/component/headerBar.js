"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import PopupMartInfo from "./popupMartInfo";

export default function HeaderBar() {

  const router = useRouter();
  const pathname = usePathname();

  // 버튼을 경로 목록
  const BackButtonPaths = ["/"];
  const PhoneButtonPaths = ["/"];
  const [showPopup, setShowPopup] = useState(false);

  // 경로별 타이틀 매핑
  const titleMap = {
    "/": "투게더마트 모바일전단",
    "/ListCart": "장바구니",
    "/ListCoupon": "쿠폰함",
    "/ListOrder": "주문내역"
    ,"/DetailOrder": "주문내역 상세보기"
    ,"/WriteOrder": "주문서 작성"
  };
  const title = titleMap[pathname] || "오류";

  return (
    <div className="sticky top-0 z-50 ">
      <div className="flex items-center justify-center w-full h-16 py-2 bg-[#21409a] text-white">
        <div className="flex flex-col items-center justify-center w-12 h-full">
          {!BackButtonPaths.includes(pathname) && (
            <button className="" onClick={() => router.back()} aria-label="뒤로가기">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"></path>
              </svg>
            </button>
          )}
        </div>
        <h1 className="flex-1 text-center font-bold cursor-pointer leading-tight">
          {pathname === "/" ? (
            <span className={`flex items-center justify-center gap-0.5 fill-white ${title.length > 12 ? "text-base" :title.length > 11 ? "text-lg" : title.length > 8 ? "text-xl" : "text-2xl"}`} onClick={() => setShowPopup(true)}>
              {title}
              <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="M460-300h40v-220h-40v220Zm20-276.92q10.46 0 17.54-7.08 7.08-7.08 7.08-17.54 0-10.46-7.08-17.54-7.08-7.07-17.54-7.07-10.46 0-17.54 7.07-7.08 7.08-7.08 17.54 0 10.46 7.08 17.54 7.08 7.08 17.54 7.08Zm.13 456.92q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120Zm-.13-40q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>
            </span>
          ) : (
            <span className="flex items-center justify-center text-2xl">
              {title}
            </span>
          )}
        </h1>

        <div className="flex flex-col items-center justify-center w-12 h-full">
          {PhoneButtonPaths.includes(pathname) && (
            <button className="flex items-center justify-center w-7.5 h-7.5 p-1 border rounded-full bg-white hover:bg-slate-100" aria-label="전화">
              <svg xmlns="http://www.w3.org/2000/svg" className="fill-slate-900" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z"/></svg>
            </button>
          )}
        </div>
      </div>
      <PopupMartInfo showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
}