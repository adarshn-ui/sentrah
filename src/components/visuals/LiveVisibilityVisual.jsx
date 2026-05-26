import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Wrench, Compass, Activity } from 'lucide-react';

export default function LiveVisibilityVisual() {
  const [siteTime, setSiteTime] = useState(34);
  const [latLng, setLatLng] = useState({ lat: 29.3759, lng: 47.9774 });
  const [neighbors, setNeighbors] = useState([
    { name: "Youssef A.", status: "On Site", color: "text-indigo-600 bg-indigo-50/20 border-indigo-200" },
    { name: "Mohammed R.", status: "Available", color: "text-green-600 bg-green-50/20 border-green-200" },
    { name: "Tariq S.", status: "En Route", color: "text-yellow-600 bg-yellow-50/20 border-yellow-200" },
    { name: "Khaled M.", status: "Offline", color: "text-gray-400 bg-gray-50/20 border-gray-200" },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      // 1. Ticking time on site
      setSiteTime((prev) => prev + 1);

      // 2. Slightly adjust GPS coordinates
      setLatLng((prev) => ({
        lat: Number((prev.lat + (Math.random() - 0.5) * 0.0003).toFixed(4)),
        lng: Number((prev.lng + (Math.random() - 0.5) * 0.0003).toFixed(4)),
      }));

      // 3. Alternate neighbor status randomly to simulate actual dispatching
      if (Math.random() > 0.7) {
        setNeighbors((prev) => {
          const next = [...prev];
          const idx = Math.floor(Math.random() * next.length);
          if (idx === 2) {
            // Tariq arrives!
            next[2] = { ...next[2], status: "On Site", color: "text-indigo-600 bg-indigo-50/20 border-indigo-200" };
          } else if (idx === 1) {
            // Mohammed gets dispatched
            next[1] = { ...next[1], status: "En Route", color: "text-yellow-600 bg-yellow-50/20 border-yellow-200" };
          }
          return next;
        });
      }
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white border border-[#EAE3D5] rounded-xl overflow-hidden shadow-sm text-[#0A2540] font-mono text-xs">
      
      {/* Widget Header */}
      <div className="px-5 py-4 bg-[#FAF9F6] border-b border-[#EAE3D5] flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-[#0A2540] flex items-center gap-1">
            <Activity className="w-3.5 h-3.5 text-red-500 shrink-0" />
            LIVE OPERATIONS PREVIEW
          </span>
        </div>
        <span className="text-[11px] font-bold text-[#5A6E85] bg-[#F4EFE6] px-2 py-0.5 rounded border border-[#EAE3D5]">Updated 3s ago</span>
      </div>

      {/* Primary Technician Details */}
      <div className="p-5 md:p-6">
        
        {/* Row 1: Basic Info */}
        <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-[#F4EFE6]">
          <div>
            <span className="text-xs font-bold uppercase text-[#5A6E85] block">Active Technician</span>
            <span className="text-sm font-bold text-[#0A2540]">Ahmad Khalil</span>
          </div>
          <div>
            <span className="text-xs font-bold uppercase text-[#5A6E85] block">Current Task</span>
            <span className="text-sm font-bold text-[#0A2540] flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-[#5A6E85]" /> Asset Maintenance
            </span>
          </div>
        </div>

        {/* Row 2: Location and Site Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 pb-4 border-b border-[#F4EFE6]">
          <div>
            <span className="text-xs font-bold uppercase text-[#5A6E85] block">Location Details</span>
            <span className="text-xs font-semibold text-[#0A2540] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-500 flex-shrink-0" /> Salmiya Tower 3, Floor 1
            </span>
          </div>
          <div>
            <span className="text-xs font-bold uppercase text-[#5A6E85] block">Status Tracker</span>
            <span className="text-xs font-bold text-green-700 bg-green-50 border border-green-100 px-2 py-0.5 rounded inline-block animate-pulse">
              Arrived 9:47 AM
            </span>
          </div>
        </div>

        {/* Row 3: Live Time and SLA */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <span className="text-xs font-bold uppercase text-[#5A6E85] block">Time on Site</span>
            <span className="text-xs font-bold text-[#0A2540] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#5A6E85] shrink-0" /> 
              <span className="animate-fadeIn">{siteTime} mins</span>
            </span>
          </div>
          <div>
            <span className="text-xs font-bold uppercase text-[#5A6E85] block">SLA Metrics</span>
            <span className="text-xs font-bold text-green-700 bg-green-50 border border-green-100 px-2 py-0.5 rounded inline-block">
              On Track
            </span>
          </div>
        </div>

        {/* Map Coordinate Representation */}
        <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-lg p-3 text-center mb-6">
          <span className="text-[10px] font-bold uppercase text-[#5A6E85] block mb-1">GPS REAL-TIME COORDINATES</span>
          <span className="text-xs font-bold text-indigo-700 font-mono tracking-wide flex items-center justify-center gap-1">
            <Compass className="w-3.5 h-3.5 text-indigo-700 animate-spin shrink-0" style={{ animationDuration: '6s' }} />
            LAT: {latLng.lat}° N | LONG: {latLng.lng}° E
          </span>
        </div>

        {/* Neighboring Dispatch Status */}
        <div className="border-t border-[#F4EFE6] pt-4">
          <span className="text-xs font-bold uppercase text-[#5A6E85] block mb-3">Nearby Technicians Dispatch Status</span>
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            {neighbors.map((user) => (
              <div key={user.name} className="flex justify-between p-2 bg-[#FAF9F6] border border-[#EAE3D5] rounded">
                <span className="font-bold text-[#0A2540]">{user.name}</span>
                <span className={`px-1 rounded border text-[10px] font-bold ${user.color} animate-fadeIn`}>{user.status}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
