'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'];

const feedbackItems = [
  { name: 'Client A', rating: 5, interested: true, price: 'Fair price' },
  { name: 'Client B', rating: 4, interested: true, price: 'Great value' },
  { name: 'Client C', rating: 3, interested: false, price: 'Too high' },
];

export default function AnimatedShowly() {
  const [activeView, setActiveView] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveView((prev) => (prev + 1) % 3);
      setSelectedSlot(-1);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Animate slot selection in booking view
  useEffect(() => {
    if (activeView === 0) {
      const timeout = setTimeout(() => setSelectedSlot(3), 1200);
      return () => clearTimeout(timeout);
    }
  }, [activeView]);

  return (
    <div className="w-full select-none">
      <div className="relative mx-auto w-full max-w-[480px]">
        {/* Browser frame */}
        <div className="relative rounded-xl border border-foreground/10 bg-gradient-to-b from-navy-light to-navy shadow-2xl shadow-black/50 overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-navy-light/80 border-b border-foreground/5">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
            </div>
            <div className="flex-1 mx-8">
              <div className="bg-navy-lighter/50 rounded-md px-3 py-1 text-[9px] text-foreground/30 text-center font-mono">
                showly.io
              </div>
            </div>
          </div>

          {/* View tabs */}
          <div className="flex border-b border-foreground/5 bg-navy/30">
            {['Booking', 'Feedback', 'Report'].map((tab, i) => (
              <button
                key={tab}
                onClick={() => { setActiveView(i); setSelectedSlot(-1); }}
                className="flex-1 relative"
              >
                <span className={`block text-[9px] font-medium py-2 transition-colors ${
                  activeView === i ? 'text-copper' : 'text-foreground/30'
                }`}>
                  {tab}
                </span>
                {activeView === i && (
                  <motion.div
                    layoutId="showly-tab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-copper"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="h-[260px] p-4 overflow-hidden">
            <AnimatePresence mode="wait">
              {/* Booking View */}
              {activeView === 0 && (
                <motion.div
                  key="booking"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded bg-gradient-to-br from-copper/30 to-copper/10" />
                    <div>
                      <div className="text-[9px] font-semibold text-foreground/70">123 Main Street</div>
                      <div className="text-[7px] text-foreground/30">Select a time</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    {timeSlots.map((slot, i) => (
                      <motion.div
                        key={slot}
                        animate={{
                          backgroundColor: selectedSlot === i ? 'rgba(200,149,108,0.3)' : 'rgba(200,149,108,0.05)',
                          borderColor: selectedSlot === i ? 'rgba(200,149,108,0.5)' : 'rgba(200,149,108,0.1)',
                        }}
                        className="rounded-md border py-2 text-center"
                      >
                        <span className={`text-[9px] font-medium ${selectedSlot === i ? 'text-copper' : 'text-foreground/40'}`}>
                          {slot}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    animate={{ opacity: selectedSlot >= 0 ? 1 : 0.3 }}
                    className="rounded-lg bg-gradient-to-r from-copper/20 to-copper/10 py-2.5 text-center"
                  >
                    <span className="text-[9px] font-semibold text-copper">Continue to Book</span>
                  </motion.div>
                </motion.div>
              )}

              {/* Feedback View */}
              {activeView === 1 && (
                <motion.div
                  key="feedback"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2"
                >
                  <div className="text-[9px] font-semibold text-foreground/50 mb-2">Recent Feedback</div>
                  {feedbackItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15 }}
                      className="flex items-center gap-2 p-2 rounded-lg border border-foreground/5 bg-navy-light/30"
                    >
                      <div className="w-5 h-5 rounded-full bg-copper/20 flex items-center justify-center">
                        <span className="text-[7px] text-copper font-bold">{item.name.slice(-1)}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          {[1,2,3,4,5].map(s => (
                            <div key={s} className={`w-1.5 h-1.5 rounded-full ${s <= item.rating ? 'bg-amber-400' : 'bg-foreground/10'}`} />
                          ))}
                          <span className={`text-[7px] ml-1 ${item.interested ? 'text-green-400' : 'text-foreground/30'}`}>
                            {item.interested ? 'Interested' : 'Not interested'}
                          </span>
                        </div>
                        <div className="text-[7px] text-foreground/25 mt-0.5">{item.price}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Report View */}
              {activeView === 2 && (
                <motion.div
                  key="report"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <div className="text-[9px] font-semibold text-foreground/50">Showing Report</div>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: 'Showings', value: '15' },
                      { label: 'Interested', value: '73%' },
                      { label: 'Avg Rating', value: '4.2' },
                    ].map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="rounded-lg border border-foreground/5 bg-navy-light/30 p-2 text-center"
                      >
                        <div className="text-sm font-bold text-copper">{stat.value}</div>
                        <div className="text-[7px] text-foreground/30">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                  {/* Price perception bars */}
                  <div className="space-y-1.5">
                    <div className="text-[7px] text-foreground/40">Price Perception</div>
                    {[
                      { label: 'Great value', pct: 30, color: 'bg-green-400/60' },
                      { label: 'Fair price', pct: 55, color: 'bg-copper/50' },
                      { label: 'Too high', pct: 15, color: 'bg-red-400/40' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2">
                        <span className="text-[7px] text-foreground/30 w-14">{item.label}</span>
                        <div className="flex-1 h-1.5 rounded-full bg-foreground/5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.pct}%` }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className={`h-full rounded-full ${item.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
