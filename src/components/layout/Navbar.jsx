import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    { id: 'platform', label: 'Platform' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'customers', label: 'Customers' },
    { id: 'company', label: 'Company' },
  ];

  const handleLinkClick = (id) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#EAE3D5] px-6 py-4">
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        
        {/* Brand Logo with Corporate Deep Blue Square matching Sentrah branding */}
        <button 
          onClick={() => handleLinkClick('home')} 
          className="flex items-center gap-2 text-[#0A2540] hover:opacity-90 transition-opacity cursor-pointer border-none bg-transparent p-0 outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0"
        >
          <img src="https://res.cloudinary.com/dzbudvaef/image/upload/v1779793203/Group_52_qjffst.svg" alt="Sentrah Logo" className="w-36 h-9 object-contain" />
        </button>
 
        {/* Desktop Links centered and minimal */}
        <div className="hidden lg:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer border-none bg-transparent p-0 ${
                currentPage === link.id ? 'text-[#0A2540] underline decoration-2 underline-offset-4' : 'text-[#5A6E85] hover:text-[#0A2540]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
 
        {/* Action Button & Hamburger Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleLinkClick('company')}
            className="hidden sm:block px-4.5 py-2.5 bg-[#0A2540] text-white text-[10px] font-extrabold uppercase tracking-widest rounded-none hover:bg-[#06182c] transition-colors cursor-pointer border-none"
          >
            Talk to Our Team
          </button>

          {/* Mobile Hamburger toggle button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#0A2540] hover:opacity-80 transition-opacity cursor-pointer border-none bg-transparent p-1 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Navigation Panel with premium reveal transition */}
      <div 
        className={`lg:hidden fixed top-[73px] left-0 right-0 bg-[#FAF9F6] border-b border-[#EAE3D5] shadow-lg transition-all duration-300 ease-in-out origin-top overflow-hidden ${
          isOpen ? 'opacity-100 scale-y-100 max-h-[400px] py-6 px-6' : 'opacity-0 scale-y-95 max-h-0 py-0 px-6'
        }`}
      >
        <div className="flex flex-col gap-5">
          {navigationLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-left text-xs font-bold uppercase tracking-widest py-2 transition-colors border-none bg-transparent w-full ${
                currentPage === link.id ? 'text-[#0A2540] border-l-2 border-[#0A2540] pl-3' : 'text-[#5A6E85] hover:text-[#0A2540]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleLinkClick('company')}
            className="mt-2 w-full py-3 bg-[#0A2540] text-white text-[10px] font-extrabold uppercase tracking-widest rounded-none hover:bg-[#06182c] transition-colors cursor-pointer border-none"
          >
            Talk to Our Team
          </button>
        </div>
      </div>
    </nav>
  );
};
