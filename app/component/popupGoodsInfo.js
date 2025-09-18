'use client';


export default function PopupGoodsInfo({showPopup, setShowPopup}) {
  if(!showPopup) return null;

  return (
    <> 
      <div className="layer__wrap fixed inset-0 flex flex-col items-center justify-center z-50 p-3">
        <div className="layer__bg absolute inset-0 bg-black/50"></div>
        <div className="layer__panel layer__panel--white relative flex flex-col overflow-hidden w-full p-4 rounded-2xl bg-white">
          <p className="layer__tit mb-3 text-xl text-center font-bold">상품정보</p>
          <div className="layer__goodsimgbox overflow-hidden flex items-center justify-center h-56 -mx-3 bg-slate-50">
            <img className="w-auto h-[120%]" />
          </div>
          <div className="layer__goodsinfo flex flex-col">
            <p className="layer__goodstxt mx-auto my-2 text-sm">※수량을 선택해서 장바구니에 담아주세요</p>
            <div className="layer__quantity flex items-center justify-center w-36 h-10 mx-auto overflow-hidden border border-slate-400 rounded-full">
              <button className="layer__quantitybtn layer__quantitybtn--left flex w-10 h-full items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-black"><path d="M200-440v-80h560v80H200Z"></path></svg>
              </button>
              <span className="layer__quantitynum flex-1 text-lg text-center">1</span>
              <button className="layer__quantitybtn quantity__btn--right flex w-10 h-full items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-black"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>
              </button>
            </div>
            <div className="layer__goodsdelprice previewEtc1 mt-5 mx-auto text-lg text-blue-500 font-bold">센터이미지</div>
            <div className="layer__goodsprice mx-auto my-1 text-4xl text-red-500 font-bold">999,999,999,999</div>
            <div className="layer__goodsname mx-auto my-1 text-lg font-bold">크라운 쿠크다스 144g 1입</div>
            <button className="layer__goodsbtn flex items-center justify-center w-52 h-12 mx-auto my-4 rounded-lg bg-rose-500/90 text-lg text-white font-bold disabled:bg-slate-200 disabled:text-slate-400" disabled onClick={() => setShowPopup(false)}>장바구니 담기</button>
          </div>
          <button onClick={() => setShowPopup(false)} className="layer__close absolute top-3 right-3 fill-slate-500">
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
          </button>
        </div>
      </div>
    </>
  );
}