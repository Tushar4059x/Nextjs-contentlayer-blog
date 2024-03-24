import Link from 'next/link';
import Image from 'next/image'; // Import next/image
import profImage from '@/public/IMG_9192.png';

const Logo = () => {
  return (
    <Link href="/" className='flex items-center text-dark'>
        <div className='w-160 rounded-full overflow hidden border border-solid border-black'>
          <Image src={profImage} alt="tushar's notes" className='w-full h-auto rounded-full'/>
        </div>
        <span className='font-bold text-xl'>Tushar notes</span>
    </Link>
  );
};

export default Logo;
