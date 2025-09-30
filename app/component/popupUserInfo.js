'use client ';

import { useState } from "react";

export default function PopupUserInfo({showPopup, setShowPopup}) {
  const [showPopup2, setShowPopup2] = useState(false);

  if(!showPopup) return null;

  return (
    <>
      <div className="layer__wrap fixed inset-0 flex flex-col items-center justify-center z-50 p-3">
        <div className="layer__bg absolute inset-0 bg-black/50" onClick={() => setShowPopup(false)}></div>
        <div className="layer__panel layer__panel--white relative flex flex-col overflow-hidden w-full p-4 rounded-2xl bg-white">
          <p className="layer__tit mb-3 text-xl text-center font-bold">고객정보</p>
          <div className="overflow-y-auto flex flex-col gap-4 min-h-60 p-4 rounded-xl bg-slate-100">
            <p className="text-lg font-bold leading-tight">온라인 주문 및 쿠폰기능을 사용하기 위해 휴대폰 번호를 입력해주세요</p>
            <div>
              <label className="text-sm text-slate-500">휴대폰번호</label>
              <div className="relative flex h-9">
                <div className="absolute left-0 flex items-center justify-center w-13 h-full font-bold text-slate-600">010</div>
                <input type="phone" className="w-full h-full pl-13 border border-slate-400 focus:border-blue-500 focus:border-2 outline-0 rounded bg-white" placeholder="숫자만 입력해 주세요" />
              </div>
            </div>
            <div className="flex items-center">
              <input id="checkbox1" type="checkbox" className="size-6 mr-2" />
              <label htmlFor="checkbox1">개인정보 수집이용 동의</label>
              <span className="ml-auto text-xs underline" onClick={() => setShowPopup2(true)}>약관보기</span>
            </div>
            <button className="layer__userbtn flex items-center justify-center w-full h-12 mx-auto rounded-lg bg-rose-500/90 text-lg text-white font-bold disabled:bg-slate-200 disabled:text-slate-400">이용동의 및 사용시작</button>
          </div>
          <button onClick={() => setShowPopup(false)} className="layer__close absolute top-3 right-3 fill-slate-500">
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
          </button>
        </div>
      </div>
      {/* 약관 내용 팝업창 */}
      {showPopup2 && (
        <div className="layer__wrap fixed inset-0 flex flex-col items-center justify-center z-50 p-3">
          <div className="layer__bg absolute inset-0 bg-black/50"></div>
          <div className="layer__panel relative flex flex-col overflow-hidden w-full p-4 rounded-2xl bg-white">
            <p className="layer__tit mb-3 text-xl text-center font-bold">개인정보 수집·이용 동의</p>
            <div className="layer__privacyinfo overflow-y-auto flex flex-col gap-4 min-h-60 p-4 rounded-xl bg-slate-100">
              ㈜투게더스는 『개인정보보호법』 제15조 개인정보의 수집·이용에 따라 귀하의 개인정보를 수집하고자 합니다. 귀하께서는 아래 개인정보의 수집 항목, 이용 목적, 이용기간을 확인하고, 이용동의서에 체크해 주시기 바랍니다.<strong>1. 개인정보 수집 및 이용목적</strong>① 회원 식별, 공동구매 상품구매 시 사용자를 확인하는 목적으로 개인정보에 해당하는 휴대폰번호를 수집합니다.② 개인정보 수집·이용에 대한 동의를 거부할 권리가 있으며, 동의를 거부할 경우 매장에서 제공하는 서비스에 제약이 있을 수 있습니다.③ 상기 이용목적 이외는 개인정보를 사용하지 않습니다.<strong>2. 개인정보 처리 및 보유기간</strong>① 수집한 개인정보의 수집목적이 모두 달성될 때까지 해당 개인정보를 보유합니다.② 수집한 개인정보는 매장에서 제공하는 공동구매 서비스 이용 시 활용되며, 공동구매 상품구매 후 00일까지 안전하게 보관 후 파기합니다.<strong>3. 개인정보 제공 및 공유</strong>① 수집된 개인정보는 법령에 의거하거나 귀하의 동의가 있는 경우를 제외하고 제3자에게 제공되지 않습니다.② 귀하의 동의가 필요한 경우, 제공받는 자, 제공 목적, 제공 항목 등을 사전에 안내하고 동의를 받습니다.<strong>4. 개인정보의 안전성 확보 조치</strong>① 수집된 개인정보는 암호화되어 안전하게 저장 및 관리됩니다.② 개인정보의 접근 권한을 최소화하고, 개인정보 유출 방지를 위한 보안 시스템을 운영합니다.5. 개인정보 처리에 대한 권리① 귀하는 언제든지 개인정보 열람, 정정, 삭제를 요청할 수 있습니다.② 개인정보 처리에 대한 문의는 고객센터를 통해 가능합니다.
              
              <button onClick={() => setShowPopup2(false)} className="layer__close absolute top-3 right-3 fill-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  )
}