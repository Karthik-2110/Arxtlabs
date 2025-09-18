import { Headset } from 'lucide-react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function navbar() {
  return (
    <div className={`${inter.className}`}>
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
        <div className="mx-[32px]">
          <div className="flex justify-between items-center py-[20px]">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-blue-500 text-xl font-bold pr-[60px]">
                <span className="text-blue-500">▲</span> AR XTLABS
              </div>

              {/* Navigation */}
            <nav className="flex items-center">
              <a href="#" className="text-[#696C73] hover:text-[#2F80ED] text-md font-medium mr-[32px]">
                Home
              </a>
              <a href="#" className="text-[#696C73] hover:text-[#2F80ED] text-md font-medium mr-[32px]">
                Our Services
              </a>
              <a href="#" className="text-[#696C73] hover:text-[#2F80ED] text-md font-medium mr-[32px]">
                About Company
              </a>
              <a href="#" className="text-[#696C73] hover:text-[#2F80ED] text-md font-medium mr-[32px]">
                Our Products
              </a>
              <a href="#" className="text-[#696C73] hover:text-[#2F80ED] text-md font-medium mr-[32px]">
                Blogs
              </a>
            </nav>
            </div>
            
            {/* Contact Button */}
            <div className="flex items-center">
              <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50 flex items-center space-x-2">
                <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs text-white border border-[#6F5EA5]">
                 <Headset color="#6F5EA5" size={17} />
                </span>
                <span>Contact us</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      
    </div>
  );
}