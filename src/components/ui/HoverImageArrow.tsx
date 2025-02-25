import { useState } from 'react';
import Image from 'next/image';
import line from '../../../../public/images/line.svg';
import arrowRight from '../../../../public/images/right-arrow.svg';

const HoverImageSwitch = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-5 h-5 mr-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        alt="Line"
        src={line}
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
      />
      <Image
        alt="Arrow Right"
        src={arrowRight}
        className={`absolute top-0 left-2 w-full h-full transition-opacity duration-1000 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};

export default HoverImageSwitch;
