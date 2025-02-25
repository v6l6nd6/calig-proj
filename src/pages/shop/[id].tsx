import { NextRouter, useRouter } from "next/router";
import shopImage1 from "../../../public/images/shopImage1.jpg"
import Image from "next/image";


const ShopPage = ()=>{

const router: NextRouter = useRouter();
  const { id } = router.query

    return (
        <div className="relative w-[90%] h-full mx-auto">
      <div className="w-[70%] h-full ml-auto">
       
          <div className="flex flex-col items-start justify-between py-[2vw]">

            <div className="text-[2vw] font-extrabold leading-none font-fontMarcellus">
              Cheonggea Ilsu Cha: Grasp the essence, and the form fades away
            </div>
          </div>
          <div className="w-full h-full">
            <div className="text-[3vw] font-mono">Shop Item:{id}</div>
            <div className="text-[3vw] font-fontMarcellus">
              Cheonggea Ilsu Cha: Grasp the Essence
            </div>
            <div className="text-[1vw] font-fontTerminaMedium w-3/4 text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              soluta adipisci et minus, quae ex quaerat nostrum officiis earum
              illum voluptas quasi? In, laboriosam quos a at libero neque soluta
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              soluta adipisci et minus, quae ex quaerat nostrum officiis earum
              illum voluptas quasi? In, laboriosam quos a at libero neque soluta
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              soluta adipisci et minus, quae ex quaerat nostrum officiis earum
              illum voluptas quasi? In, laboriosam quos a at libero neque soluta
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              soluta adipisci et minus, quae ex quaerat nostrum officiis earum
              illum voluptas quasi? In, laboriosam quos a at libero neque
              soluta.
            </div>
          </div>
        
        
      </div>
      <div className="absolute top-[-2vw] left-[3vw] w-[23vw] h-[130%] flex flex-col bg-[#fff3e298] gap-y-[5vw] rounded-md">
        <Image alt="" src={shopImage1} className="w-full h-full opacity-70 rounded-md"/>
      </div>
    </div>
    )
}

export default ShopPage