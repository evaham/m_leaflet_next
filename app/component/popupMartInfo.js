export default function PopupMartInfo({showPopup, setShowPopup}) {
  if(!showPopup) return null;
  return(
    <>
      <div className="layer__wrap fixed inset-0 flex flex-col items-center justify-center z-50 p-3">
        <div className="layer__bg absolute inset-0 bg-black/50" onClick={() => setShowPopup(false)}></div>
        <div className="layer__panel layer__panel--white relative flex flex-col overflow-hidden w-full p-4 rounded-2xl bg-white">
          <p className="layer__tit mb-3 text-xl text-center font-bold">공지사항</p>

          <div className="overflow-y-auto flex flex-col h-60 p-4 rounded-xl bg-slate-100">
            오후 2시까지 배달 주문을 완료하시면, 당일 저녁에 신선한 상품을 안전하게 배송해드립니다. 저희 마트는 고객님의 편의를 위해 빠르고 정확한 배송 서비스를 제공하고 있습니다. 주문하신 상품은 꼼꼼하게 포장되어 배송되며, 만약 배송 관련 문의나 요청 사항이 있으시면 언제든 고객센터로 연락해주시기 바랍니다. 앞으로도 더 나은 서비스와 다양한 혜택으로 보답하는 마트가 되겠습니다. 많은 이용 부탁드립니다. 감사합니다.
          </div>
          <button onClick={() => setShowPopup(false)} className="layer__close absolute top-3 right-3 fill-slate-500">
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"></path></svg>
          </button>
        </div>
      </div>
    </>
  )
}