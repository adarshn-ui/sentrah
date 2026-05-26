import React, { useState, useEffect } from 'react';
import { Activity, Bell, Compass, FileText, CheckCircle2 } from 'lucide-react';
import CountUp from '../common/CountUp';

export default function HeroDashboardVisual() {
  const [completeCount, setCompleteCount] = useState(12);
  const [inProgressCount, setInProgressCount] = useState(5);
  const [gpsCoords, setGpsCoords] = useState({ lat: 29.3759, lng: 47.9774 });
  const [tableLogs, setTableLogs] = useState([
    { id: "A84", date: "11/01/2026", time: "09:30", status: "Complete", photo: "Verified" },
    { id: "C23", date: "11/01/2026", time: "11:15", status: "Complete", photo: "Verified" },
    { id: "B91", date: "10/01/2026", time: "14:45", status: "Complete", photo: "Verified" },
    { id: "D54", date: "10/01/2026", time: "16:20", status: "Complete", photo: "Verified" },
    { id: "E62", date: "09/01/2026", time: "08:45", status: "Complete", photo: "Verified" },
  ]);

  // Simulate real-time dashboard operations updates
  useEffect(() => {
    const timer = setInterval(() => {
      // 1. Slightly shift technician GPS coordinates to simulate movement
      setGpsCoords((prev) => ({
        lat: Number((prev.lat + (Math.random() - 0.5) * 0.0004).toFixed(4)),
        lng: Number((prev.lng + (Math.random() - 0.5) * 0.0004).toFixed(4)),
      }));

      // 2. Occasionally simulate a completed task
      if (Math.random() > 0.6) {
        setCompleteCount((prev) => prev + 1);
        setInProgressCount((prev) => Math.max(2, prev - 1 + (Math.random() > 0.5 ? 1 : 0)));

        const newId = `X${Math.floor(Math.random() * 90) + 10}`;
        const newTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
        
        setTableLogs((prev) => [
          { id: newId, date: "11/01/2026", time: newTime, status: "Complete", photo: "Verified" },
          ...prev.slice(0, 4)
        ]);
      }
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-xl border border-[#EAE3D5] p-5 md:p-6 w-full text-[#0A2540] shadow-sm font-mono text-xs">
      
      {/* Dashboard Header */}
      <div className="flex justify-between items-center border-b border-[#F4EFE6] pb-4 mb-4">
        <div>
          <span className="text-[11px] uppercase tracking-wider font-bold text-[#5A6E85] flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-indigo-700 animate-pulse" />
            SENTRAH OPERATIONAL DASHBOARD
          </span>
          <h3 className="text-sm font-bold text-[#0A2540]">Command Center Live View</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></span>
          <span className="text-xs font-semibold text-[#5A6E85]">System Active</span>
        </div>
      </div>

      {/* Dashboard Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        
        {/* Widget 1: Live Task & Visit Status */}
        <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-lg p-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#5A6E85] block mb-3">Live Task & Visit Status</span>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-green-600 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span> Complete
              </span>
              <span className="font-bold text-green-600 transition-all duration-300 animate-fadeIn">{completeCount}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-blue-600 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span> In Progress
              </span>
              <span className="font-bold text-blue-600">{inProgressCount}</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-yellow-600 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full animate-pulse"></span> Pending
              </span>
              <span className="font-bold">4</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-gray-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span> Unsuccessful
              </span>
              <span className="font-bold">1</span>
            </div>
            <div className="flex justify-between items-center text-xs pt-1 border-t border-[#EAE3D5] mt-1">
              <span className="font-bold text-red-600 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce"></span> Overdue
              </span>
              <span className="font-bold text-red-600">1</span>
            </div>
          </div>
        </div>

        {/* Widget 2: SLA & Response Time Control */}
        <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-lg p-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#5A6E85] block mb-3">SLA & Response Control</span>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-[#0A2540]">On Track</span>
              <span className="font-bold text-green-600">18</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-[#0A2540]">Due This Week</span>
              <span className="font-bold">5</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-[#0A2540]">Due Today</span>
              <span className="font-bold">2</span>
            </div>
            <div className="flex justify-between items-center text-xs pt-1 border-t border-[#EAE3D5] mt-1">
              <span className="font-bold text-red-600">SLA Overdue</span>
              <span className="font-bold text-red-600 flex items-center gap-1"><Bell className="w-3.5 h-3.5 text-red-600 animate-bounce" /> 1</span>
            </div>
          </div>
        </div>

        {/* Widget 3: KPI & Fieldstaff Performance */}
        <div className="bg-[#FAF9F6] border border-[#EAE3D5] rounded-lg p-4 md:col-span-2">
          <div className="flex justify-between items-center border-b border-[#EAE3D5] pb-2 mb-2.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#5A6E85]">Technician Performance & GPS</span>
            <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 px-1.5 py-0.5 rounded flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-indigo-700 rounded-full animate-ping shrink-0"></span>
              Active Map Trace
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
            <div className="bg-white p-2 border border-[#EAE3D5] rounded-none">
              <span className="text-[10px] font-bold uppercase text-[#5A6E85] block">Avg Time</span>
              <span className="text-xs font-bold"><CountUp to={2.3} suffix=" hrs" /></span>
            </div>
            <div className="bg-white p-2 border border-[#EAE3D5] rounded-none">
              <span className="text-[10px] font-bold uppercase text-[#5A6E85] block">Fix Rate</span>
              <span className="text-xs font-bold text-green-700"><CountUp to={89} suffix="%" /></span>
            </div>
            <div className="bg-white p-2 border border-[#EAE3D5] rounded-none">
              <span className="text-[10px] font-bold uppercase text-[#5A6E85] block">Response</span>
              <span className="text-xs font-bold">
                <CountUp to={18} suffix=" min" /> <span className="text-[10px] text-green-700 font-semibold"><CountUp to={5} prefix="-" suffix="m" /></span>
              </span>
            </div>
            <div className="bg-white p-2 border border-[#EAE3D5] rounded-none flex flex-col justify-center items-center">
              <span className="text-[10px] font-bold uppercase text-[#5A6E85] block mb-0.5">GPS Lat/Long</span>
              <span className="text-[10px] font-bold text-indigo-700 font-mono tracking-tighter flex items-center gap-0.5">
                <Compass className="w-2.5 h-2.5 text-indigo-700 animate-spin shrink-0" style={{ animationDuration: '6s' }} />
                {gpsCoords.lat}°, {gpsCoords.lng}°
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Widget 4: Instant Completion & Service Report (Table Preview) */}
      <div className="border border-[#EAE3D5] rounded-lg overflow-hidden bg-[#FAF9F6]">
        <div className="px-3 py-2 bg-[#F4EFE6] border-b border-[#EAE3D5] flex justify-between items-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#5A6E85] flex items-center gap-1">
            <FileText className="w-3.5 h-3.5 text-[#5A6E85]" />
            Instant Completion & Service Reports
          </span>
          <span className="text-[11px] font-semibold text-green-700 bg-white px-1.5 py-0.5 rounded border border-[#EAE3D5]">Verified GPS Proof</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-[#EAE3D5] bg-[#FAF8F3]">
                <th className="p-2 font-bold text-[#5A6E85]">Asset ID</th>
                <th className="p-2 font-bold text-[#5A6E85]">Visit Date</th>
                <th className="p-2 font-bold text-[#5A6E85]">Visit Time</th>
                <th className="p-2 font-bold text-[#5A6E85]">Status</th>
                <th className="p-2 font-bold text-[#5A6E85]">Photo Proof</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE3D5] bg-white">
              {tableLogs.map((row, idx) => (
                <tr key={row.id} className="hover:bg-[#FAF9F6] transition-colors animate-fadeIn">
                  <td className="p-2 font-bold text-[#0A2540]">{row.id}</td>
                  <td className="p-2 text-[#5A6E85]">{row.date}</td>
                  <td className="p-2 text-[#5A6E85]">{row.time}</td>
                  <td className="p-2">
                    <span className="text-green-700 bg-green-50 border border-green-200 px-1 py-0.5 rounded font-semibold text-[10px] flex items-center gap-0.5 max-w-max">
                      <CheckCircle2 className="w-2.5 h-2.5 text-green-600 shrink-0" /> {row.status}
                    </span>
                  </td>
                  <td className="p-2 text-green-600 font-semibold">{row.photo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
