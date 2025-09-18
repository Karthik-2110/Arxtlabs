import { Headset } from 'lucide-react';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export default function footer() {
  return (
    <div className={`${inter.className}`}>
      {/* Footer */}
      <div className="footer px-[100px] py-[64px] bg-[#181818]">
            <div className="links-row flex flex-row item-start gap-[120px]">
                <div className="logo-container flex flex-col item-start gap-[12px]">
                <Image src="/Logo.svg" alt="hero-illustration" width={200} height={260} style={{ objectFit: "contain" }} />
                <p className='text-white text-[16px]'>Learn English online with live tutors & <br />
                flexible lessons.</p>
                <p className='text-white text-[16px]'>Social media icons will come here</p>
                </div>

                <div className="links-container flex flex-col item-start gap-[12px]">
                <p className='text-white text-[20px] font-bold'>Quick Links</p>
                <p className='text-neutral-300 text-[16px]'>Home</p>
                <p className='text-neutral-300 text-[16px]'>Services</p>
                <p className='text-neutral-300 text-[16px]'>Company</p>
                <p className='text-neutral-300 text-[16px]'>Product</p>
                </div>

                <div className="links-container flex flex-col item-start gap-[12px]">
                <p className='text-white text-[20px] font-bold'>Services</p>
                <p className='text-neutral-300 text-[16px]'>Title & Mortage</p>
                <p className='text-neutral-300 text-[16px]'>Nutrition Wellness</p>
                <p className='text-neutral-300 text-[16px]'>Enterprise Learning</p>
                <p className='text-neutral-300 text-[16px]'>Media and Digital</p>
                <p className='text-neutral-300 text-[16px]'>Commercial Constructions</p>
                <p className='text-neutral-300 text-[16px]'>Health Care</p>
                </div>
            </div>
      </div>      
    </div>
  );
}