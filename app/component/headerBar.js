"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

export default function HeaderBar() {

  const router = useRouter();
  const pathname = usePathname();

  // 뒤로가기 버튼을 숨길 경로 목록
  const hideBackButtonPaths = ["/", "/ListCart", "/ListCoupon", "/ListOrder"];
  const phoneButtonPaths = ["/"];
  const [showPopup, setShowPopup] = useState(false);

  // 경로별 타이틀 매핑
  const titleMap = {
    "/": "투게더 마트",
    "/ListCart": "장바구니",
    "/ListCoupon": "쿠폰",
    "/ListOrder": "주문내역"
    ,"/DetailOrder": "주문내역 상세보기"
  };
  const title = titleMap[pathname] || "오류";

  return (
    <div className="sticky top-0 z-50 flex items-center justify-center w-full h-16 p-2 bg-blue-900 text-white">
      <div className="flex flex-col items-center justify-center w-12 h-full">
        {!hideBackButtonPaths.includes(pathname) && (
          <button className="" onClick={() => router.back()} aria-label="뒤로가기">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"></path>
            </svg>
          </button>
        )}
      </div>
      <h1 className="flex-1 text-center text-2xl cursor-pointer" onClick={() => setShowPopup(true)}>
        {title}
      </h1>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50" onClick={() => setShowPopup(false)}>
          <div className="bg-white rounded-lg shadow-lg p-6 min-w-[240px] text-center relative" onClick={e => e.stopPropagation()}>
            <div className="mb-4 text-lg font-bold">레이어 팝업</div>
            <div className="mb-4">여기에 원하는 내용을 넣으세요.</div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => setShowPopup(false)}>닫기</button>
          </div>
        </div>
      )}
      <div className="flex flex-col items-center justify-center w-12 h-full">
        {phoneButtonPaths.includes(pathname) && (
          <button className="flex items-center justify-center w-10 h-10 p-2 border rounded-full bg-white hover:bg-slate-100" aria-label="전화">
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-slate-900" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z"/></svg>
          </button>
        )}
      </div>
    </div>
  );
}