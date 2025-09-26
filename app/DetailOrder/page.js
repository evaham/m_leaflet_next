'use client';
import Link from 'next/link';

export default function DetailOrder() {
  return (
    <>
      <div className="ordersdetail flex flex-col p-1 gap-0.5">
        <div className="detail flex flex-col rounded border border-slate-200 bg-white">
          <div className="detail__header flex items-center h-10 px-2 border-b border-slate-200">
            <div className="detail__tit flex items-center text-lg font-bold">주문정보</div>
          </div>
          <div className="detail__body flex flex-col p-2">
            <dl className='flex border border-b-0 border-slate-200 *:px-2.5 *:py-1.5 *:items-center'>
              <dt className='flex w-24 bg-slate-100 text-sm'>주문번호</dt>
              <dd className='flex-1'>230419-22</dd>
            </dl>
            <dl className='flex border border-b-0 border-slate-200 *:px-2.5 *:py-1.5 *:items-center'>
              <dt className='flex w-24 bg-slate-100 text-sm'>주문일</dt>
              <dd className='flex-1'>2025.4.19 11:30</dd>
            </dl>
            <dl className='flex border border-b-0 border-slate-200 *:px-2.5 *:py-1.5 *:items-center'>
              <dt className='flex w-24 bg-slate-100 text-sm'>주문상태</dt>
              <dd className='flex-1'>주문접수(2025.4.19 11:30)</dd>
            </dl>
            <dl className='flex border border-b-0 border-slate-200 *:px-2.5 *:py-1.5 *:items-center'>
              <dt className='flex w-24 bg-slate-100 text-sm'>주문자명</dt>
              <dd className='flex-1'>고길동</dd>
            </dl>
            <dl className='flex border border-b-0 border-slate-200 *:px-2.5 *:py-1.5 *:items-center'>
              <dt className='flex w-24 bg-slate-100 text-sm'>배송지</dt>
              <dd className='flex-1'>인천시 부평구 부평대로 301 901호 투게더스</dd>
            </dl>
            <dl className='flex border border-slate-200 *:px-2.5 *:py-1.5 *:items-center'>
              <dt className='flex w-24 bg-slate-100 text-sm'>요청사항</dt>
              <dd className='flex-1'>벨을눌러주세요요</dd>
            </dl>
          </div>
        </div>
        <div className="detail flex flex-col rounded border border-slate-200 bg-white">
          <div className="detail__header flex items-center h-10 px-2 border-b border-slate-200">
            <div className="detail__tit flex items-center text-lg font-bold">주문상품</div>
          </div>
          <div className="detail__body flex flex-col p-2">
            <ul className="detail__list flex flex-col *:border-b *:border-slate-200 *:last:border-0">
              <li className='flex flex-col py-2'>
                <div className="detail__listinfo grid grid-cols-[3.75rem_1fr_3.75rem] grid-rows-2 items-top gap-1">
                  <div className='overflow-hidden flex items-center justify-center size-15 border border-slate-200 rounded-sm row-span-2'>
                    <img className="detail__img w-full h-auto" src="http://file.2ms.kr/WebLink/35546/thumb_2ea6e138-f331-4496-a8d6-de9f95edc783.png" width={80} height={80} alt="주문상품" />
                  </div>
                  <div className="detail__name">샤인머스캣 18브릭스 이상 2입</div>
                  <div className="detail__amount text-right">999 개</div>
                  <div className="detail__price col-span-2 text-right font-bold">900,000 원</div>
                </div>
                <div className="detail__coupon relative flex items-center ml-15 my-2 px-1 py-1 rounded bg-slate-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 33 32" fill="none" className='absolute -left-6'>
                    <path xmlns="http://www.w3.org/2000/svg" d="M16.75 0V16H32.75" stroke="#666" strokeWidth="1" />
                  </svg>
                  <span className="detail__cname">[쿠폰] 1000할인</span>
                  <span className="detail__cprice ml-auto text-rose-600 font-bold">-1,000 원</span>
                </div>
              </li>
              <li className='flex flex-col py-2'>
                <div className="detail__listinfo grid grid-cols-[3.75rem_1fr_3.75rem] grid-rows-2 items-top gap-1">
                  <div className='overflow-hidden flex items-center justify-center size-15 border border-slate-200 rounded-sm row-span-2'>
                    <img className="detail__img w-full h-auto" src="//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" width={80} height={80} alt="주문상품" />
                  </div>
                  <div className="detail__name">샤인머스캣 18브릭스 이상 2입</div>
                  <div className="detail__amount text-right">999 개</div>
                  <div className="detail__price col-span-2 text-right font-bold">900,000 원</div>
                </div>
                <div className="detail__coupon relative flex items-center ml-15 my-2 px-1 py-1 rounded bg-slate-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 33 32" fill="none" className='absolute -left-6'>
                    <path xmlns="http://www.w3.org/2000/svg" d="M16.75 0V16H32.75" stroke="#666" strokeWidth="1" />
                  </svg>
                  <span className="detail__cname">[쿠폰] 1000할인</span>
                  <span className="detail__cprice ml-auto text-rose-600 font-bold">-1,000 원</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="detail flex flex-col rounded border border-slate-200 bg-white">
          <div className="detail__header flex items-center h-10 px-2 border-b border-slate-200">
            <div className="detail__tit flex items-center text-lg font-bold">결제정보</div>
          </div>
          <div className="detail__body flex flex-col p-2">
            <div className="detail__moneylist flex flex-col p-2 gap-2">
              <dl className='flex items-center'>
                <dt className="detail__moneyitem mr-auto text-slate-500">상품합계</dt>
                <dd className="detail__moneyvalue font-bold">32,000 원</dd>
              </dl>
              <dl className='flex items-center'>
                <dt className="detail__moneyitem mr-auto text-slate-500">쿠폰할인</dt>
                <dd className="detail__moneyvalue font-bold">-2,000 원</dd>
              </dl>
              <dl className='flex items-center'>
                <dt className="detail__moneyitem mr-auto text-slate-500">배달비</dt>
                <dd className="detail__moneyvalue font-bold">3,000 원</dd>
              </dl>
              <dl className="detail__moneytotal flex items-center -mx-2 px-2 py-1.5 rounded bg-slate-100">
                <dt className="detail__moneyitem mr-auto font-bold text-slate-500">총 주문금액</dt>
                <dd className="detail__moneyvalue font-bold">
                  <span className='text-2xl'>35,000</span> 원
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className='detail flex flex-col rounded border border-slate-200 bg-white'>
          <div className="detail__header flex items-center h-10 px-2 border-b border-slate-200">
            <div className='detail__tit flex items-center text-lg font-bold'>결제방식</div>
          </div>
          <div className="detail__body flex flex-col p-2">
            <div className="detail__payinfo flex flex-col items-center py-3 border rounded-lg border-slate-200">
              <div className='detail__paytit text-lg my-2'>계좌이체</div>
              <div className="detail__paytxt text-lg font-bold">
                기업은행 1234-05-67890 투게더스
              </div>
            </div>
            <div className="detail__info mt-4 p-2 rounded-lg bg-slate-50">
              ※ 평일 오후 2시전에 주문시, 오후5시 부터 배송기사가 출발합니다.<br />
              ※ 주문관련 문의는 032-123-4567로 문의주세요.
            </div>
          </div>
        </div>
        <div className='flex mt-8 mb-24'>
          <Link href={"/ListOrder"} className="detail__btn flex mx-auto px-6 py-2 border rounded border-slate-200 bg-white font-bold">목록으로 이동</Link>
        </div>
      </div>
    </>
  );
}