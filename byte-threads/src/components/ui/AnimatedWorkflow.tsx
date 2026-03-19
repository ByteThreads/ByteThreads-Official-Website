'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  { label: 'Record Video', sublabel: 'Walk through the property', color: '#C8956C' },
  { label: 'AI Analyzes', sublabel: 'Issues detected automatically', color: '#7A9E8E' },
  { label: 'Report Ready', sublabel: 'Professional PDF in 30 seconds', color: '#8FB5A3' },
];

const AIIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

export default function AnimatedWorkflow() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full select-none">
      <div className="relative mx-auto w-full max-w-[280px]">
        <div className="relative rounded-[2rem] border-2 border-foreground/10 bg-gradient-to-b from-navy-light to-navy p-3 shadow-2xl shadow-black/50">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-navy rounded-b-2xl border-x border-b border-foreground/10 z-20" />

          {/* Screen */}
          <div className="relative rounded-[1.4rem] bg-navy overflow-hidden aspect-[9/16]">
            {/* Status bar */}
            <div className="flex items-center justify-between px-5 pt-6 pb-2 text-[10px] text-foreground/40">
              <span className="font-mono">9:41</span>
              <div className="flex gap-1 items-center">
                <div className="w-3.5 h-2 border border-foreground/40 rounded-sm relative">
                  <div className="absolute inset-[1px] right-[2px] bg-foreground/40 rounded-[1px]" />
                </div>
              </div>
            </div>

            {/* App header */}
            <div className="px-4 pb-3 pt-1">
              <div className="text-[11px] text-copper font-semibold tracking-wider uppercase font-mono">Smart Property Check</div>
            </div>

            {/* Step content */}
            <div className="relative px-4 flex-1 min-h-[180px]">
              <AnimatePresence mode="wait">
                {activeStep === 0 && (
                  <motion.div
                    key="record"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-3"
                  >
                    <div className="rounded-xl border border-foreground/10 bg-foreground/5 aspect-video flex items-center justify-center relative overflow-hidden">
                      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-copper/60 rounded-tl" />
                      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-copper/60 rounded-tr" />
                      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-copper/60 rounded-bl" />
                      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-copper/60 rounded-br" />
                      <motion.div
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                        className="flex items-center gap-1.5"
                      >
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                        <span className="text-red-400 text-[10px] font-medium font-mono">REC</span>
                      </motion.div>
                    </div>
                    <div className="flex items-center gap-1 justify-center h-6">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ height: [4, Math.random() * 16 + 4, 4] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.05 }}
                          className="w-[3px] rounded-full bg-copper/60"
                        />
                      ))}
                    </div>
                    <p className="text-[10px] text-foreground/30 text-center">Recording walkthrough with narration...</p>
                  </motion.div>
                )}

                {activeStep === 1 && (
                  <motion.div
                    key="analyze"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-3"
                  >
                    <div className="rounded-xl border border-foreground/10 bg-foreground/5 aspect-video flex items-center justify-center relative overflow-hidden">
                      <motion.div
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sage to-transparent"
                        style={{ boxShadow: '0 0 12px 2px rgba(122,158,142,0.5)' }}
                      />
                      <motion.div
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 2.8, repeat: Infinity, times: [0, 0.2, 0.8, 1] }}
                        className="absolute top-3 right-3 w-10 h-8 border border-yellow-400/70 rounded"
                      >
                        <span className="absolute -top-2 right-0 text-[7px] text-yellow-400 bg-yellow-400/20 px-1 rounded font-mono">crack</span>
                      </motion.div>
                      <motion.div
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 2.8, repeat: Infinity, times: [0, 0.3, 0.7, 1], delay: 0.5 }}
                        className="absolute bottom-4 left-4 w-12 h-6 border border-orange-400/70 rounded"
                      >
                        <span className="absolute -top-2 left-0 text-[7px] text-orange-400 bg-orange-400/20 px-1 rounded font-mono">stain</span>
                      </motion.div>
                      <div className="w-6 h-6 text-sage">
                        <AIIcon />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      {['Wall crack detected', 'Water stain identified', 'Transcribing audio...'].map((item, i) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.3 }}
                          className="flex items-center gap-2 text-[10px]"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 0.5, delay: i * 0.3 }}
                            className={`w-1.5 h-1.5 rounded-full ${i < 2 ? 'bg-sage' : 'bg-foreground/20'}`}
                          />
                          <span className={i < 2 ? 'text-foreground/60' : 'text-foreground/25'}>{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeStep === 2 && (
                  <motion.div
                    key="report"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-3"
                  >
                    <div className="rounded-xl border border-foreground/10 bg-foreground/[0.03] p-3 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-semibold text-foreground/70">Inspection Report</span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="text-[8px] text-sage bg-sage/10 px-1.5 py-0.5 rounded-full font-mono"
                        >
                          Complete
                        </motion.span>
                      </div>
                      <div className="h-px bg-foreground/10" />
                      <div className="space-y-1.5">
                        {[
                          { label: 'Living Room', issues: '2 issues' },
                          { label: 'Kitchen', issues: '1 issue' },
                          { label: 'Bathroom', issues: 'No issues' },
                        ].map((room, i) => (
                          <motion.div
                            key={room.label}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 + i * 0.15 }}
                            className="flex items-center justify-between"
                          >
                            <span className="text-[9px] text-foreground/50">{room.label}</span>
                            <span className={`text-[8px] font-mono ${room.issues === 'No issues' ? 'text-sage' : 'text-yellow-400'}`}>
                              {room.issues}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex-1 rounded-lg bg-sage/20 border border-sage/30 py-2 text-center"
                      >
                        <span className="text-[9px] text-sage font-medium">Export PDF</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex-1 rounded-lg bg-foreground/5 border border-foreground/10 py-2 text-center"
                      >
                        <span className="text-[9px] text-foreground/50 font-medium">Sign</span>
                      </motion.div>
                    </div>
                    <p className="text-[10px] text-foreground/30 text-center font-mono">Report generated in 30 seconds</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Step indicators */}
            <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-8 bg-gradient-to-t from-navy via-navy/80 to-transparent">
              <div className="flex items-center justify-between gap-2">
                {steps.map((step, i) => (
                  <div key={step.label} className="flex-1 text-center">
                    <div className="flex items-center justify-center mb-1.5">
                      <motion.div
                        animate={{
                          backgroundColor: activeStep === i ? step.color : 'rgba(240,237,232,0.1)',
                          scale: activeStep === i ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-navy font-mono"
                      >
                        {i + 1}
                      </motion.div>
                    </div>
                    <motion.p
                      animate={{ color: activeStep === i ? '#F0EDE8' : 'rgba(240,237,232,0.25)' }}
                      className="text-[8px] font-medium leading-tight"
                    >
                      {step.label}
                    </motion.p>
                  </div>
                ))}
              </div>
              <div className="mt-2 h-[2px] bg-foreground/10 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: `${((activeStep + 1) / 3) * 100}%` }}
                  transition={{ duration: 0.4 }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(to right, #C8956C, ${steps[activeStep].color})` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Glow */}
        <motion.div
          animate={{ opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -inset-8 -z-10 blur-2xl rounded-full"
          style={{ background: `radial-gradient(circle, ${steps[activeStep].color}25 0%, transparent 70%)` }}
        />
      </div>
    </div>
  );
}
