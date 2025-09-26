'use client';

import Link from "next/link";

export default function PopupOrdersInfo({showPopup, setShowPopup}) {
  if(!showPopup) return null;

  return (
    <>
      <div className="layer__wrap fixed inset-0 flex flex-col items-center justify-center z-50 p-3">
        <div className="layer__bg absolute inset-0 bg-black/50" onClick={() => setShowPopup(false)}></div>
        <div className="layer__panel layer__panel--white relative flex flex-col overflow-hidden w-full p-4 rounded-2xl bg-white">
          <p className="layer__tit mb-3 text-xl text-center font-bold">주문이 완료 되었습니다.</p>

          <div className="overflow-y-auto flex flex-col h-96 p-4 border border-slate-100 rounded-xl bg-slate-100">
            <div class="detail__tbl flex">
              <div className="bg-white/85">
                <dl className='flex border border-b-0 border-slate-300 *:px-2.5 *:py-1.5 *:items-center'>
                  <dt className='flex w-24 bg-slate-50 text-sm'>주문번호</dt>
                  <dd className="flex-1 p-1">250419-22</dd>
                </dl>
                <dl className='flex border border-b-0 border-slate-300 *:px-2.5 *:py-1.5 *:items-center'>
                  <dt className='flex w-24 bg-slate-50 text-sm'>주문자명</dt>
                  <dd className="flex-1 p-1">고길동</dd>
                </dl>
                <dl className='flex border border-b-0 border-slate-300 *:px-2.5 *:py-1.5 *:items-center'>
                  <dt className='flex w-24 bg-slate-50 text-sm'>배송지</dt>
                  <dd className="flex-1 p-1">인천시 부평구 부평대로 301 901호 투게더스</dd>
                </dl>
                <dl className='flex border border-b-0 border-slate-300 *:px-2.5 *:py-1.5 *:items-center'>
                  <dt className='flex w-24 bg-slate-50 text-sm'>요청사항</dt>
                  <dd>벨을눌러주세요요</dd>
                </dl>
                <dl className='flex border border-b-0 border-slate-300 *:px-2.5 *:py-1.5 *:items-center'>
                  <dt className='flex w-24 bg-slate-50 text-sm'>총 주문금액</dt>
                  <dd className="flex-1 p-1">43,000 원</dd>
                </dl>
                <dl className='flex border border-b-0 border-slate-300 *:px-2.5 *:py-1.5 *:items-center'>
                  <dt className='flex w-24 bg-slate-50 text-sm'>결제방식</dt>
                  <dd className="flex-1 p-1">계좌이체<br />기업은행 123-12345-67890<br />(예금주 : 투게더마트)</dd>
                </dl>
                <dl className='flex border border-slate-300 *:px-2.5 *:py-1.5 *:items-center'>
                  <dt className='flex w-24 bg-slate-50 text-sm'>요청사항</dt>
                  <dd className="flex-1 p-1">텍스트가 길어집니다길어집니다길어집니다길어집니다길어집니다길어집니다길어집니다길어집니다길어집니다</dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="flex gap-2 items-center justify-center mt-4">
            <Link href={"/ListOrder"} class="flex-1 flex items-center justify-center w-35 h-10 border border-slate-300 rounded font-bold" >주문내역</Link>
            <Link href={"/"} class="flex-1 flex items-center justify-center w-35 h-10 border border-slate-300 rounded font-bold">전단으로 이동</Link>
          </div>

          <button onClick={() => setShowPopup(false)} className="layer__close absolute top-3 right-3 fill-slate-500">
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
          </button>
        </div>
      </div>
    </>
  )
}