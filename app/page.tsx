import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar';
import Image from 'next/image';
import { Headset } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className={`${inter.className}`}>
      <Navbar />

      <div className='hero-secction-wrapper h-[90vh] bg-[url("/Container.svg")] bg-cover bg-center bg-no-repeat'>
        <div className='container flex flex-row items-center justify-center h-full w-full pl-[100px] gap-[58px] pt-[80px]'>
          <div className="content w-[50%]">
            <div className="content-wrapper">
              <h1 className='text-[#232323] text-[32px] font-bold text-center'>Transform Your Business with Industry-Leading AI Solutions</h1>
              <p className='text-[#232323] text-[18px] font-regular text-center mt-[30px]'>Welcome to AR XTLABS — where innovation meets intelligence.</p>
              <p className='text-[#232323] text-[18px] font-regular text-center mt-[10px]'>We craft cutting-edge AI solutions tailored to your unique business goals, empowering you to automate smarter, operate faster, and lead the industry.</p>
              
              <div className='flex flex-row justify-center items-center mt-[40px]'>
                <button className='bg-[#8474C7] text-white text-[18px] font-medium text-center px-[24px] py-[12px] rounded-[16px] mr-[12px]'>Our Services</button>
                <button className='bg-[#F5F5F5] text-[#181818] text-[18px] font-medium text-center px-[24px] py-[12px] rounded-[16px] border border-[#E5C7E8]'>Our Products</button>
              </div>
              
            </div>
          </div>
          <div className="illustration w-[50%] flex justify-center">
              <Image src="/hero-illustration.svg" alt="hero-illustration" width={500} height={350} />
          </div>
        </div>
        
      </div>

      {/* Marquee section */}

      <div className='marquee-wrapper bg-[#fff] py-[32px] flex flex-col justify-center items-center w-full'>
        <div className='marquee-content px-[100px] w-full'>
          <h1 className='text-[#7C76BB] text-[28px] font-medium text-center'>We working with customers brands and startups</h1>
        </div>
        <div className='relative w-full overflow-hidden mt-6'>
          <div className='marquee-track flex items-center gap-[52px] w-max animate-marquee mt-[32px]'>
            {/* group 1 */}
            <Image src="/next.svg" alt="marquee-image" width={100} height={100} />
            <Image src="/next.svg" alt="marquee-image" width={100} height={100} />
            <Image src="/next.svg" alt="marquee-image" width={100} height={100} />
            <Image src="/next.svg" alt="marquee-image" width={100} height={100} />
            <Image src="/next.svg" alt="marquee-image" width={100} height={100} />
            <Image src="/next.svg" alt="marquee-image" width={100} height={100} />
            {/* group 2 (duplicate for seamless loop) */}
            <Image src="/next.svg" alt="marquee-image" width={100} height={100} />
            <Image src="/next.svg" alt="marquee-image" width={100} height={100} />
            <Image src="/next.svg" alt="marquee-image" width={100} height={100} />
            <Image src="/next.svg" alt="marquee-image" width={100} height={100} />
            <Image src="/next.svg" alt="marquee-image" width={100} height={100} />
            <Image src="/next.svg" alt="marquee-image" width={100} height={100} />
            {/* group 3 (duplicate for seamless loop) */}
            <Image src="/next.svg" alt="marquee-image" width={100} height={100} />
            <Image src="/next.svg" alt="marquee-image" width={100} height={100} />
            <Image src="/next.svg" alt="marquee-image" width={100} height={100} />
            <Image src="/next.svg" alt="marquee-image" width={100} height={100} />
            <Image src="/next.svg" alt="marquee-image" width={100} height={100} />
            <Image src="/next.svg" alt="marquee-image" width={100} height={100} />
          </div>
        </div>
      </div>

      {/* Our Services section */}

      <div className='our-services-wrapper bg-[#fff] py-[32px] flex flex-col justify-center items-center w-full mt-[50px]'>
      <div className="bg-white border border-[#DEE0E3] outline-[#F2EEF9] outline-6 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50 flex items-center space-x-2">
                <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs text-[#6F5EA5]">
                 <Headset color="#6F5EA5" size={17} />
                </span>
                <span className='text-[#181818] text-[14px] font-medium'>About Our Company</span>
        </div>
        <div className='our-services-content mt-[38px]'>
        <h1 className='text-[#323140] text-[42px] font-regular text-center'>We Code the Future, Across Industries</h1>
        </div>
      </div>

      {/* Our Services Cards */}

      <div className="card-wrapper flex flex-row justify-center items-center gap-[48px] px-[100px] mt-[60px]">
        <div className="card h-[400px] w-[532px] bg-[#fff] outline-[#F5F5F5] outline-6 rounded-[16px] pt-[20px] pr-[20px]">
          <div className="image h-full w-full bg-red-500 rounded-tr-[8px]">

          </div>
        </div>
        <div className="content w-[520px]">
          <p className='text-[#525252] text-[24px] font-regular'>
          For over a decade, AR XTLABS has been at the forefront of AI innovation, building tailor-made solutions that drive real results.
          </p>
        </div>
      </div>

      <div className="card-wrapper flex flex-row justify-center items-center gap-[48px] px-[100px] mt-[60px]">
      <div className="content w-[520px]">
          <p className='text-[#525252] text-[24px] font-regular'>
          From Mortgage and Finance to Media, Tech, Telecom, Pharma, and even CBD, we specialize in crafting intelligent systems that solve complex business Challenges.
          </p>
        </div>
        <div className="card h-[400px] w-[532px] bg-[#fff] outline-[#F5F5F5] outline-6 rounded-[16px] pt-[20px] pl-[20px]">
          <div className="image h-full w-full bg-red-500 rounded-tl-[8px]">

          </div>
        </div>
      </div>

      {/* Path to excellence section */}

      <div className="path-to-excellence-wrapper bg-[#F7F6FA] py-[80px] flex flex-col justify-center items-center w-full mt-[60px]">
      <div className="header-wrapper">
        <p className='text-[#2E2E2E] text-[52px] font-semibold text-center'>Your Path to Excellence</p>
        <p className='text-[#000000] text-[18px] font-medium text-center'>A simple, effective approach to deliver excellence.</p>
      </div>

      <div className="cards-wrapper flex flex-row justify-center items-center gap-[48px] px-[100px] mt-[60px]">
        <div className="card p-[32px] bg-[#fff] rounded-[20px] w-[590px] text-center">
            <div style={{ position: 'relative', width: '100%', height: '280px' }}>
            <Image src="/cube.svg" alt="hero-illustration"  fill={true} style={{objectFit:"contain"}}/>
            </div>
            <p className='text-[#000000] text-[24px] mt-[24px] font-semibold'>Reimagine. Automate. Accelerate.</p>
            <p className='text-[#757575] text-[16px] font-semibold mt-[16px]'>Cut complexity and unlock speed with tech-led BPO automation. Streamline support and operations with intelligence at the core.</p>
        </div>

        <div className="card p-[32px] bg-[#fff] rounded-[20px] w-[590px] text-center flex flex-col item-center justify-item-center">
        <div style={{ position: 'relative', width: '100%', height: '280px' }}>
        <Image src="/star.svg" alt="hero-illustration"  fill={true} style={{objectFit:"contain"}}/>
        </div>
                
           
            <p className='text-[#000000] text-[24px] mt-[24px] font-semibold'>Smart Growth. Built for Your Domain.</p>
            <p className='text-[#757575] text-[16px] font-semibold mt-[16px]'>We design purpose-driven AI tools for FinTech, Media, Tech &amp; Pharma — fueling rapid innovation and portfolio expansion.</p>
        </div>

      </div>
      </div>

      {/* Our services */}
      <div className='hero-secction-wrapper py-[120px] px-[100px] bg-[url("/Container.svg")] bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center'>
        <div className="bg-gradient-to-r from-[#DCD5FA] to-transparent border-l-4 border-[#664CDD] w-[150px]">
          <h2 className="px-[10px] py-[5px] text-[14px] font-bold text-gray-800">
            Our Services
          </h2>  
        </div>

        <h1 className='text-[40px] font-bold text-[#191919] text-center mt-[20px]'>Smart solutions to elevate your <br /> operations</h1>

        <p className='text-[18px] font-medium text-[#525252] text-center mt-[20px]'>From AI-driven automation to real-time collaboration — we streamline your <br />
        workflows for impact and efficiency.</p>

        <div className="row-of-cards flex flex-row justify-items-center items-center gap-[20px] mt-[60px]">
          <div className="card bg-[#fff] pt-[30px] px-[24px] rounded-[24px] w-[400px] h-[520px] flex flex-col justify-between">
            <div>
            <h1 className='title text-[22px] font-semibold text-[#191919]'>Title & Mortgage</h1>
            <p className='text-[#191919] text-[16px] font-medium mt-[10px]'>With cutting-edge AI at the core, we turn outdated processes into intelligent,
              automated workflows that save time, reduce risk, and deliver a seamless customer
              experience.
            </p>
            </div>
            <div style={{ position: 'relative', width: '100%', height: '280px' }}>
            <Image src="/c1.svg" alt="hero-illustration"  fill={true} style={{objectFit:"contain"}}/>
            </div>
          </div>
          <div className="card bg-[#fff] pt-[30px] px-[24px] rounded-[24px] w-[400px] h-[520px] flex flex-col justify-between">
            <div>
            <h1 className='title text-[22px] font-semibold text-[#191919]'>Health Care</h1>
            <p className='text-[#191919] text-[16px] font-medium mt-[10px]'>We revolutionize senior healthcare with IoT-powered real-time monitoring for early
            issue detection and personalized, proactive care. Empower caregivers and help seniors live independently with confidence. Join us in shaping a better future for elder care.
            </p>
            </div>
            <div style={{ position: 'relative', width: '100%', height: '280px' }}>
            <Image src="/c2.svg" alt="hero-illustration"  fill={true} style={{objectFit:"contain"}}/>
            </div>
          </div>
          <div className="card bg-[#fff] pt-[30px] px-[24px] rounded-[24px] w-[400px] h-[520px] flex flex-col justify-between">
            <div>
            <h1 className='title text-[22px] font-semibold text-[#191919]'>Commercial Construction</h1>
            <p className='text-[#191919] text-[16px] font-medium mt-[10px]'>Streamline your commercial construction projects with our all-in-one Enterprise
              Solution. Manage budgeting, scheduling, and resources from a centralized platform
              with real-time updates. Improve team collaboration and eliminate delays with intuitive
              communication tools. Make smarter decisions with data-driven insights and performance reports.
            </p>
            </div>
            <div style={{ position: 'relative', width: '100%', height: '280px' }}>
            <Image src="/c3.svg" alt="hero-illustration"  fill={true} style={{objectFit:"contain"}}/>
            </div>
          </div>

        </div>

        <div className="row-of-cards flex flex-row justify-items-center items-center gap-[20px] mt-[60px]">
          <div className="card bg-[#fff] pt-[30px] px-[24px] rounded-[24px] w-[400px] h-[520px] flex flex-col justify-between">
            <div>
            <h1 className='title text-[22px] font-semibold text-[#191919]'>Nutrition & Wellness</h1>
            <p className='text-[#191919] text-[16px] font-medium mt-[10px]'>BOT offers personalized nutrition guidance, answers your wellness questions, recommends products tailored to you, and provides engaging, human-like support for a seamless health shopping experience.
            </p>
            </div>
            <div style={{ position: 'relative', width: '100%', height: '280px' }}>
            <Image src="/c4.svg" alt="hero-illustration"  fill={true} style={{objectFit:"contain"}}/>
            </div>
          </div>
          <div className="card bg-[#fff] pt-[30px] px-[24px] rounded-[24px] w-[400px] h-[520px] flex flex-col justify-between">
            <div>
            <h1 className='title text-[22px] font-semibold text-[#191919]'>Media & Digital</h1>
            <p className='text-[#191919] text-[16px] font-medium mt-[10px]'>Your one-stop digital hub for custom online ads and endless entertainment. Boost your brand, dominate social media, and stream your favorites—all in one place. Startyour digital journey with us today!
            </p>
            </div>
            <div style={{ position: 'relative', width: '100%', height: '280px' }}>
            <Image src="/c5.svg" alt="hero-illustration"  fill={true} style={{objectFit:"contain"}}/>
            </div>
          </div>
          <div className="card bg-[#fff] pt-[30px] px-[24px] rounded-[24px] w-[400px] h-[520px] flex flex-col justify-between">
            <div>
            <h1 className='title text-[22px] font-semibold text-[#191919]'>Enterprise Learning</h1>
            <p className='text-[#191919] text-[16px] font-medium mt-[10px]'>Traditional training can feel outdated and disengaging. Our AI-powered e-learning
            transforms workforce upskilling to keep pace with today’s fast-changing skills
            </p>
            </div>
            <div style={{ position: 'relative', width: '100%', height: '280px' }}>
            <Image src="/c6.svg" alt="hero-illustration"  fill={true} style={{objectFit:"contain"}}/>
            </div>
          </div>

        </div>
      </div>



    </div>
   
    
    </>
    
  );
}
