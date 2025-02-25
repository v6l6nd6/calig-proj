import Image from 'next/image';
import logo from "./logo.png"

export const Logo=()=>{


    return (
       
        
            <Image src={logo}  className='w-full h-full mt-10'  alt='Logo'/>
        
       
    )
}