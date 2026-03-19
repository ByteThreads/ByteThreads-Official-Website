'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const dashboardViews = [
  { label: 'Projects', color: '#C8956C' },
  { label: 'Selections', color: '#7A9E8E' },
  { label: 'Messages', color: '#8FB5A3' },
];

export default function AnimatedDashboard() {
  const [activeView, setActiveView] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveView((prev) => (prev + 1) % 3);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

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
                openstudioflow.com
              </div>
            </div>
          </div>

          {/* App content */}
          <div className="flex h-[280px]">
            {/* Sidebar */}
            <div className="w-[120px] bg-navy/50 border-r border-foreground/5 p-3 space-y-1.5 shrink-0">
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-4 h-4 rounded bg-gradient-to-br from-copper to-copper-dark" />
                <span className="text-[8px] text-foreground/50 font-semibold">Studio Flow</span>
              </div>
              {['Dashboard', 'Projects', 'Messages', 'Selections', 'Budget', 'Files'].map((item) => (
                <motion.div
                  key={item}
                  animate={{
                    backgroundColor:
                      (activeView === 0 && item === 'Projects') ||
                      (activeView === 1 && item === 'Selections') ||
                      (activeView === 2 && item === 'Messages')
                        ? 'rgba(200,149,108,0.15)'
                        : 'transparent',
                  }}
                  className="rounded px-2 py-1"
                >
                  <span
                    className={`text-[8px] ${
                      (activeView === 0 && item === 'Projects') ||
                      (activeView === 1 && item === 'Selections') ||
                      (activeView === 2 && item === 'Messages')
                        ? 'text-copper'
                        : 'text-foreground/20'
                    }`}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Main content */}
            <div className="flex-1 p-4 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {activeView === 0 && (
                  <motion.div
                    key="projects"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-foreground/70 font-semibold">Active Projects</span>
                      <div className="text-[8px] text-copper bg-copper/10 px-2 py-0.5 rounded-full">3 active</div>
                    </div>
                    {[
                      { name: 'Modern Loft Redesign', client: 'Sarah M.', progress: 75, phase: 'Design Development' },
                      { name: 'Lakeside Villa', client: 'James & Co.', progress: 40, phase: 'Concept' },
                      { name: 'Downtown Office', client: 'Tech Corp', progress: 90, phase: 'Installation' },
                    ].map((project, i) => (
                      <motion.div
                        key={project.name}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.12 }}
                        className="rounded-lg border border-foreground/5 bg-foreground/[0.02] p-2.5 space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] text-foreground/60 font-medium">{project.name}</span>
                          <span className="text-[7px] text-foreground/25">{project.client}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1 bg-foreground/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${project.progress}%` }}
                              transition={{ duration: 0.8, delay: i * 0.15 }}
                              className="h-full rounded-full bg-gradient-to-r from-copper to-copper-dark"
                            />
                          </div>
                          <span className="text-[7px] text-foreground/30">{project.progress}%</span>
                        </div>
                        <span className="text-[7px] text-copper/50">{project.phase}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {activeView === 1 && (
                  <motion.div
                    key="selections"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-foreground/70 font-semibold">Selection Tracker</span>
                      <div className="text-[8px] text-sage bg-sage/10 px-2 py-0.5 rounded-full">Kanban</div>
                    </div>
                    <div className="flex gap-2">
                      {[
                        { title: 'Pending', items: ['Sofa Fabric', 'Light Fixtures'], color: '#C8956C' },
                        { title: 'Approved', items: ['Floor Tile', 'Paint Color'], color: '#7A9E8E' },
                        { title: 'Ordered', items: ['Countertop'], color: '#8FB5A3' },
                      ].map((col, ci) => (
                        <div key={col.title} className="flex-1 space-y-1.5">
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: col.color }} />
                            <span className="text-[7px] text-foreground/40 font-medium">{col.title}</span>
                          </div>
                          {col.items.map((item, ii) => (
                            <motion.div
                              key={item}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: ci * 0.1 + ii * 0.08 }}
                              className="rounded border border-foreground/5 bg-foreground/[0.03] p-1.5"
                            >
                              <span className="text-[7px] text-foreground/50">{item}</span>
                            </motion.div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeView === 2 && (
                  <motion.div
                    key="messages"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-foreground/70 font-semibold">Client Messages</span>
                      <div className="text-[8px] text-sage bg-sage/10 px-2 py-0.5 rounded-full">2 new</div>
                    </div>
                    {[
                      { from: 'Sarah M.', msg: 'Love the fabric samples! Can we see the sage option?', time: '2m ago', unread: true },
                      { from: 'James & Co.', msg: 'Approved the floor plan layout.', time: '1h ago', unread: true },
                      { from: 'Tech Corp', msg: 'Installation scheduled for next week.', time: '3h ago', unread: false },
                    ].map((message, i) => (
                      <motion.div
                        key={message.from}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.12 }}
                        className={`rounded-lg border p-2.5 space-y-1 ${
                          message.unread
                            ? 'border-sage/20 bg-sage/[0.03]'
                            : 'border-foreground/5 bg-foreground/[0.02]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            {message.unread && <div className="w-1 h-1 rounded-full bg-sage" />}
                            <span className="text-[8px] text-foreground/60 font-medium">{message.from}</span>
                          </div>
                          <span className="text-[7px] text-foreground/15">{message.time}</span>
                        </div>
                        <p className="text-[7px] text-foreground/35 leading-relaxed">{message.msg}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="px-4 py-2.5 border-t border-foreground/5 bg-navy/50">
            <div className="flex items-center justify-center gap-4">
              {dashboardViews.map((view, i) => (
                <button
                  key={view.label}
                  onClick={() => setActiveView(i)}
                  className="flex items-center gap-1.5"
                >
                  <motion.div
                    animate={{
                      backgroundColor: activeView === i ? view.color : 'rgba(240,237,232,0.1)',
                      scale: activeView === i ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-1.5 h-1.5 rounded-full"
                  />
                  <motion.span
                    animate={{ color: activeView === i ? view.color : 'rgba(240,237,232,0.25)' }}
                    className="text-[8px] font-medium"
                  >
                    {view.label}
                  </motion.span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Glow */}
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -inset-8 -z-10 blur-3xl rounded-full"
          style={{ background: `radial-gradient(circle, ${dashboardViews[activeView].color}20 0%, transparent 70%)` }}
        />
      </div>
    </div>
  );
}
