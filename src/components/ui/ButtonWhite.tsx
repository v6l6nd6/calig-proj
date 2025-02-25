// components/Button.tsx
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import buttonCircle from "../../../public/images/button-circle-white.png";

interface ButtonProps {
    text: string;
    href: string;
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
    return (
        <Link href={href}>
    <div className="relative w-[140px] mx-auto h-12 flex items-center justify-center group transition-all duration-300 text-center">
        
            <Image
                alt=""
                src={buttonCircle}
                className="absolute top-0 left-0 inset-0 flex items-center justify-center w-[1100%] h-[100%] transition-transform duration-300 group-hover:scale-110 group-active:scale-95" // Установка изображения, охватывающего весь контейнер
            />
        
        <div className={classNames("font-thin font-fontDancing text-[12px] uppercase leading-[22px] relative z-10 pt-1 text-[rgba(248,247,245,1)] transition-colors duration-300 group-hover:text-[#ffffffd6] group-active:text-[#ffcc00]")}>
            {text}
        </div>
    </div>
</Link>

    
    );
}

export default Button;
