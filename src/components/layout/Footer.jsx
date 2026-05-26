import React from 'react';
import { Zap } from 'lucide-react';

export const Footer = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-[#EAE3D5] py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Logo and brief positioning */}
          <div className="md:col-span-4">
            <button 
              onClick={() => onNavigate('home')} 
              className="flex items-center gap-2 text-[#0A2540] hover:opacity-90 transition-opacity cursor-pointer border-none bg-transparent p-0 mb-4 outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0"
            >
              <img src="https://res.cloudinary.com/dzbudvaef/image/upload/v1779793203/Group_52_qjffst.svg" alt="Sentrah Logo" className="w-28 h-7 object-contain" />
            </button>
            <p className="text-[11px] text-[#5A6E85] max-w-xs leading-relaxed font-normal">
              Enterprise field operations platform coordinate validator and metric timing compliance engine.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-2">
            <span className="block text-[11px] font-mono font-bold text-[#5A6E85] uppercase mb-4 tracking-wider">Navigation</span>
            <div className="flex flex-col gap-2.5 text-[11px] font-mono font-bold text-[#0A2540]">
              <button onClick={() => onNavigate('platform')} className="text-left hover:underline bg-transparent border-none p-0 cursor-pointer">Platform</button>
              <button onClick={() => onNavigate('solutions')} className="text-left hover:underline bg-transparent border-none p-0 cursor-pointer">Solutions</button>
              <button onClick={() => onNavigate('customers')} className="text-left hover:underline bg-transparent border-none p-0 cursor-pointer">Customers</button>
              <button onClick={() => onNavigate('company')} className="text-left hover:underline bg-transparent border-none p-0 cursor-pointer">Company</button>
            </div>
          </div>

          {/* Contact & Regions Columns */}
          <div className="md:col-span-3">
            <span className="block text-[11px] font-mono font-bold text-[#5A6E85] uppercase mb-4 tracking-wider">Regions & Support</span>
            <div className="space-y-2 text-[11px] font-mono text-[#5A6E85]">
              <div><strong className="text-[#0A2540]">Middle East Hub:</strong> Kuwait • Oman</div>
              <div><strong className="text-[#0A2540]">South Asia Hub:</strong> India</div>
              <div><strong className="text-[#0A2540]">Deployment Centers:</strong> Kuwait City • Muscat • Mumbai</div>
            </div>
          </div>

          {/* Email, Phone, Socials Column */}
          <div className="md:col-span-3">
            <span className="block text-[11px] font-mono font-bold text-[#5A6E85] uppercase mb-4 tracking-wider">Contact details</span>
            <div className="space-y-2 text-[11px] font-mono text-[#5A6E85]">
              <div>
                <span className="block text-[10px] text-[#5A6E85] uppercase">Inquiries:</span>
                <a href="mailto:connect@sentrah.com" className="text-[#0A2540] font-bold underline">connect@sentrah.com</a>
              </div>
              <div>
                <span className="block text-[10px] text-[#5A6E85] uppercase">Phone:</span>
                <span className="text-[#0A2540] font-bold">+965 2200 4800</span>
              </div>
              <div className="pt-2 flex gap-4 text-[11px] font-mono font-bold text-[#0A2540] uppercase">
                <a href="#linkedin" className="hover:underline">LinkedIn</a>
                <a href="#twitter" className="hover:underline">Twitter</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom corporate bar */}
        <div className="pt-8 border-t border-[#EAE3D5] flex flex-wrap justify-between items-center text-[11px] font-mono text-[#5A6E85] gap-4">
          <span>© {new Date().getFullYear()} Sentrah Platform • LUCID TECH SOLUTIONS LLC. All rights reserved.</span>
          <span>Unalterable Operations Verification Engine.</span>
        </div>

      </div>
    </footer>
  );
};
