import React from 'react';
import { Zap } from 'lucide-react';

export const Navbar = ({ currentPage, onNavigate }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#EAE3D5] px-6 py-4">
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        
        {/* Brand Logo with Corporate Deep Blue Square matching Sentrah branding */}
        <button 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-2 text-[#0A2540] hover:opacity-90 transition-opacity cursor-pointer border-none bg-transparent p-0 outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0"
        >
          <img src="https://res.cloudinary.com/dzbudvaef/image/upload/v1779793203/Group_52_qjffst.svg" alt="Sentrah Logo" className="w-36 h-9 object-contain" />
        </button>
 
        {/* Desktop Links centered and minimal */}
        <div className="hidden lg:flex items-center gap-8">
          {[
            { id: 'platform', label: 'Platform' },
            { id: 'solutions', label: 'Solutions' },
            { id: 'customers', label: 'Customers' },
            { id: 'company', label: 'Company' },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer border-none bg-transparent p-0 ${
                currentPage === link.id ? 'text-[#0A2540] underline decoration-2 underline-offset-4' : 'text-[#5A6E85] hover:text-[#0A2540]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
 
        {/* Action Button: Square Outlined matching sharp layout */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate('company')}
            className="px-4.5 py-2.5 bg-[#0A2540] text-white text-[10px] font-extrabold uppercase tracking-widest rounded-none hover:bg-[#06182c] transition-colors cursor-pointer border-none"
          >
            Talk to Our Team
          </button>
        </div>
      </div>
    </nav>
  );
};
