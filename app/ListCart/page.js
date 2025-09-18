export default function ListCartPage() {


  const list = [
      { id: 1, name: "자연그린 김밥단무김밥단무김밥단무김aawefawefawef밥단무김밥단무김밥단무지1", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
      { id: 2, name: "자연그린 김밥단무지2", cart: false, price: 2558, image: "http://file.2ms.kr/WebLink/35546/4af934d2-5731-4c72-91d5-fc73936b6826.jpg" },
      { id: 3, name: "자연그린 김밥단무지3", cart: false, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
      { id: 4, name: "자연그린 김밥단무지4", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
      { id: 5, name: "자연그린 김밥단무지4", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
      { id: 6, name: "자연그린 김밥단무지4", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
      { id: 7, name: "자연그린 김밥단무지4", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" },
      { id: 8, name: "자연그린 김밥단무지4", cart: true, price: 2558, image: "//thumbnail8.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/b48d/07cc4310581273a3c0f58b24d6df366900b5699ab17a5e615a8065b53c17.jpg" }
  ];
  return (
    <>
      <div className="cartlist flex flex-col p-1 gap-1">
        {list.map((item, index) => (
          <div key={index} className="cartitem relative flex px-2 py-5 gap-2 rounded-lg border border-slate-300 bg-white">
            <div className="overflow-hidden flex items-center justify-center size-20 border border-slate-200 rounded bg-slate-50">
              <img src={item.image} alt={item.name} className="cartitem__img w-full h-auto"/>
            </div>
            <div className="cartitem__info flex-1 flex flex-col">
                <div className="cartitem__name line-clamp-2 leading-tight pr-9">{item.name}</div>
                <div className="cartitem__pricegroup flex items-center justify-between mt-auto">
                    <div className="cartitem__price">
                        <span className="mr-1 text-2xl font-bold text-rose-500">{item.price.toLocaleString()}</span>원
                    </div>
                    <div className="quantity flex items-center justify-center w-28 h-8 overflow-hidden border border-slate-400 rounded-full">
                        <button className="quantity__btn quantity__btn--left flex w-10 h-full items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-black"><path d="M200-440v-80h560v80H200Z" /></svg>
                        </button>
                        <span className="quantity__num flex-1 text-lg text-center">1</span>
                        <button className="quantity__btn quantity__btn--right flex w-10 h-full items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-black"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                        </button>
                    </div>
                </div>
                <button className="cartitem__removebtn absolute top-2 right-2 fill-slate-500">
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z" /></svg>
                </button>
            </div>
          </div>
        ))}
      </div>
      <div class="cartfoot flex flex-col sticky bottom-20 w-full p-3 bg-white border-t border-slate-300">
        <button class="cartfoot__btn disabled">총 0건 0원 주문하기</button>
      </div>
    </>
  );
}