'use client';
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";
import PopupOrdersInfo from '../component/popupOrdersInfo';

export default function WriteOrderPage() {
  const [activeTab, setActiveTab] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="orderswrite flex flex-col p-1 gap-0.5">
        <div className="write flex flex-col rounded border border-slate-300 bg-white">
          <div className="write__header flex items-center h-10 px-2 border-b border-slate-300">
            <div className="write__tit flex items-center text-lg font-bold">주문정보</div>
          </div>
          <div className="write__body flex flex-col p-2">
            <dl className='flex border border-b-0 border-slate-200'>
              <dt className='flex w-22 p-1 bg-slate-100 text-sm leading-tight'>주문자명<br/>(6/20)</dt>
              <dd className='flex-1 p-1'>
                <input type='text' className='w-full h-9 px-1.5 py-1 border border-slate-300 bg-slate-50 focus:border-blue-500 focus:border-2 outline-0 rounded' placeholder='주문자명을 입력하세요' />
              </dd>
            </dl>
            <dl className='flex border border-b-0 border-slate-200'>
              <dt className='flex w-22 p-1 bg-slate-100 text-sm leading-tight'>휴대폰<br />(변경불가)</dt>
              <dd className='flex-1 p-1'>
                <input type="text" className="write__input w-full h-9 px-1.5 py-1 border border-slate-300 bg-slate-50 focus:border-blue-500 focus:border-2 outline-0 rounded" placeholder="000-0000-0000" />
              </dd>
            </dl>
            <dl className='flex border border-b-0 border-slate-200'>
              <dt className='flex w-22 p-1 bg-slate-100 text-sm'>주소*</dt>
              <dd className='flex-1 p-1'>
                <div className='flex'>
                  <input type="text" className="write__input w-26 h-9 px-1.5 py-1 border border-slate-200 bg-slate-50 rounded" disabled />
                  <button className="write__btn flex items-center justify-center w-full h-9 ml-2 px-2 border rounded text-sm font-bold">우편번호검색</button>
                </div>
                <input type="text" disabled className="write__input w-full h-9 mt-1 px-1.5 py-1 border border-slate-200 bg-slate-50 focus:border-blue-500 focus:border-2 outline-0 rounded" placeholder="" />
                <input type="text" className="write__input w-full h-9 mt-1 px-1.5 py-1 border border-slate-300 bg-slate-50 focus:border-blue-500 focus:border-2 outline-0 rounded" placeholder="상세주소를 입력하세요" />
              </dd>
            </dl>
            <dl className='flex border border-slate-200'>
              <dt className='flex w-22 p-1 bg-slate-100 text-sm'>요청사항</dt>
              <dd className='flex-1 p-1'>
                <textarea id="11" className="write__textarea w-full h-full px-1.5 py-1 border border-slate-300 bg-slate-50 focus:border-blue-500 focus:border-2 outline-0  rounded"></textarea>
              </dd>
            </dl>
          </div>
        </div>
        <div className="write flex flex-col rounded border border-slate-300 bg-white">
          <div className="write__header flex items-center h-10 px-2 border-b border-slate-300">
            <div className="write__tit flex items-center text-lg font-bold">주문상품</div>
          </div>
          <div className="write__body flex flex-col p-2">
            <ul className="write__list flex flex-col *:border-b *:border-slate-200 *:last:border-0">
              <li className='flex flex-col py-2'>
                <div className="write__listinfo grid grid-cols-[3.75rem_1fr_3.75rem] grid-rows-2 items-top gap-1">
                  <div className='overflow-hidden flex items-center justify-center size-15 border border-slate-200 rounded-sm row-span-2'>
                    <img className="write__img w-full h-auto" src="//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" alt="주문상품" />
                  </div>
                  <div className="write__name">샤인머스캣 18브릭스 이상 2입</div>
                  <div className="write__amount text-right">999 개</div>
                  <div className="write__price col-span-2 text-right font-bold">900,000 원</div>
                </div>
                <label className="write__coupon relative flex items-center ml-15 my-2 px-1 py-1 rounded bg-slate-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 33 32" fill="none" className='absolute -left-6'>
                    <path xmlns="http://www.w3.org/2000/svg" d="M16.75 0V16H32.75" stroke="#666" strokeWidth="1" />
                  </svg>
                  <input type="checkbox" className='size-4' />
                  <span className="write__cname ml-1">[쿠폰] 1000할인</span>
                  <span className="write__cprice ml-auto text-rose-600 font-bold">-1,000 원</span>
                </label>
              </li>
              <li className='flex flex-col py-2'>
                <div className="write__listinfo grid grid-cols-[3.75rem_1fr_3.75rem] grid-rows-2 items-top gap-1">
                  <div className='overflow-hidden flex items-center justify-center size-15 border border-slate-200 rounded-sm row-span-2'>
                    <img className="write__img w-full h-auto" src="//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" alt="주문상품" />
                  </div>
                  <div className="write__name">샤인머스캣 18브릭스 이상 2입</div>
                  <div className="write__amount text-right">999 개</div>
                  <div className="write__price col-span-2 text-right font-bold">900,000 원</div>
                </div>
                <label className="write__coupon relative flex items-center ml-15 my-2 px-1 py-1 rounded bg-slate-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 33 32" fill="none" className='absolute -left-6'>
                    <path xmlns="http://www.w3.org/2000/svg" d="M16.75 0V16H32.75" stroke="#666" strokeWidth="1" />
                  </svg>
                  <input type="checkbox" className='size-4' />
                  <span className="write__cname ml-1">[쿠폰] 1000할인</span>
                  <span className="write__cprice ml-auto text-rose-600 font-bold">-1,000 원</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="write flex flex-col rounded border border-slate-300 bg-white">
          <div className="write__header flex items-center h-10 px-2 border-b border-slate-300">
            <div className="write__tit flex items-center text-lg font-bold">결제정보</div>
          </div>
          <div className="write__body flex flex-col p-2">
            <div className="write__moneylist flex flex-col p-2 gap-2">
              <dl className='flex items-center'>
                <dt className="write__moneyitem mr-auto">상품합계</dt>
                <dd className="write__moneyvalue font-bold">32,000 원</dd>
              </dl>
              <dl className='flex items-center'>
                <dt className="write__moneyitem mr-auto">쿠폰할인</dt>
                <dd className="write__moneyvalue font-bold">-1,000 원</dd>
              </dl>
              <dl className='flex items-center'>
                <dt className="write__moneyitem mr-auto">배달비</dt>
                <dd className="write__moneyvalue font-bold">3,000 원</dd>
              </dl>
              <dl className="write__moneytotal flex items-center -mx-2 px-2 py-1.5 rounded bg-slate-100">
                <dt className="write__moneyitem mr-auto font-bold">총 주문금액</dt>
                <dd className="write__moneyvalue font-bold">
                  <span className='text-2xl'>35,000</span> 원
                </dd>
              </dl>
            </div>

          </div>
        </div>
        <div className="write flex flex-col rounded border border-slate-300 bg-white">
          <div className="write__header flex items-center h-10 px-2 border-b border-slate-300">
            <div className="write__tit flex items-center text-lg font-bold">결제수단</div>
          </div>
          <div className="write__body flex flex-col p-2">
            <div className="write__paygroup flex gap-2 mb-2">
              <button
                type="button"
                className={`write__paybtn ${activeTab === 1 ? 'active border-rose-600/80 text-white bg-rose-600/80' : 'border-slate-300'} flex-1 flex items-center justify-center h-20 border rounded text-sm font-bold leading-tight`}
                onClick={() => setActiveTab(1)}
                aria-pressed={activeTab === 1}
              >
                만나서<br />현금 결제
              </button>
              <button
                type="button"
                className={`write__paybtn ${activeTab === 2 ? 'active border-rose-600/80 text-white bg-rose-600/80' : 'border-slate-300'} flex-1 flex items-center justify-center h-20 border rounded text-sm font-bold leading-tight`}
                onClick={() => setActiveTab(2)}
                aria-pressed={activeTab === 2}
              >
                만나서<br />카드 결제
              </button>
              <button
                type="button"
                className={`write__paybtn ${activeTab === 3 ? 'active border-rose-600/80 text-white bg-rose-600/80' : 'border-slate-300'} flex-1 flex items-center justify-center h-20 border rounded text-sm font-bold leading-tight`}
                onClick={() => setActiveTab(3)}
                aria-pressed={activeTab === 3}
              >
                계좌이체
              </button>
            </div>
            <div className="write__payinfo px-1.5 py-2 border border-slate-200 rounded">
              {activeTab === 1 && (
                <div className="write__paytxt text-lg font-bold text-center">배송기사에게 현금으로 결제합니다.</div>
              )}
              {activeTab === 2 && (
                <div className="write__paytxt text-lg font-bold text-center">배송기사에게 카드로 결제합니다.</div>
              )}
              {activeTab === 3 && (
                <div className="write__paytxt text-lg font-bold text-center">기업은행 1234-05-67890 투게더스</div>
              )}
            </div>
            <div className="write__info mt-4 p-3 rounded bg-slate-100">
              ※ 평일 오후 2시전에 주문시, 오후5시 부터 배송기사가 출발합니다.<br />
              ※ 주문관련 문의는 032-123-4567로 문의주세요.
            </div>
          </div>
        </div>
        <div className="writefoot flex flex-col gap-1.5 w-full mb-9 p-2 backdrop-blur-lg">
          <div className='flex my-4'>
            <input id='checkbox' type="checkbox" className='size-6 mr-1' />
            <label htmlFor='checkbox' className='leading-tight'>필수 주문정보를 확인했으며, 주문 진행에 동의합니다.</label>
          </div>
          <button onClick={() => setShowPopup(true)} className="writefoot__btn flex items-center justify-center w-full h-12 mx-auto my-1 rounded-lg bg-rose-500/90 text-lg text-white font-bold disabled:bg-slate-200 disabled:text-slate-400">
            주문완료
          </button>
        </div>
      </div>
      {/* 주문완료 팝업 */}
      <PopupOrdersInfo showPopup={showPopup} setShowPopup={setShowPopup} />

    </>
  )
}