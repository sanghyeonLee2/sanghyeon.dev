'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Bridge from './zv.svg'; // ✅ SVGR 적용된 import
import { Cloud } from 'lucide-react';

const INTRO_TEXT_FIR = 'LEE SANG HYEON';
const INTRO_TEXT_SEC = 'PORTFOLIO';

const Intro = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-sky-100">
      <div className="flex-grow relative flex-center">
        {/* 해 */}
        <motion.div className="absolute top-[20%] right-[22%] w-28 h-28 rounded-full bg-[#FFD54F] z-10" />
        <Cloud
          color="white"
          fill="white"
          className="absolute top-[25%] left-[15%] w-30 h-30 drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)] opacity-90"
        />
        <Cloud
          color="white"
          fill="white"
          className="absolute top-[58%] right-[18%] w-30 h-30 drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)] opacity-90"
        />

        {/* 섬 */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-130 h-[260px] z-10"
        >
          <path
            d="
      M0,100 
      L0,60 
      Q5,45 15,58 
      Q25,48 35,60 
      Q45,52 55,64 
      Q65,58 75,68 
      Q85,72 92,80 
      Q97,87 100,100 
      Z
    "
            fill="#286FA0"
          />
        </svg>
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-170 h-90 z-0"
        >
          <path
            d="
      M0,100
      L0,60
      Q10,30 25,45
      Q40,60 55,50
      Q70,40 85,55
      Q95,65 100,80
      L100,100
      Z
    "
            fill="#65B2DE"
          />
        </svg>

        {/* 건물 실루엣
        <svg
          viewBox="0 0 100 100"
          className="absolute bottom-[120px] left-[80px] w-[160px] h-[180px] z-20"
          preserveAspectRatio="none"
        >
          <rect x="0" y="30" width="10" height="70" fill="#8EC3E8" rx="1" />
          <path d="M15,100 L15,25 Q25,0 35,25 L35,100 Z" fill="#73A9D1" />
          <path d="M45,100 L45,20 Q55,5 65,25 L65,100 Z" fill="#A3D0F4" />
          <path d="M75,100 L75,15 Q90,0 90,40 L90,100 Z" fill="#95B8DD" />
        </svg> */}

        {/* ✅ 광안대교 SVG */}
        <Bridge className="absolute bottom-0 right-0 w-[20rem] h-auto z-30" />

        {/* 텍스트 */}
        <div className="font-cafe relative z-[100] text-7xl text-center">
          <div className="pb-3">{INTRO_TEXT_FIR}</div>
          <div>{INTRO_TEXT_SEC}</div>
        </div>
      </div>
      {/* 파도 */}
      <div className="relative z-50 w-full h-32 bg-[#3686C2] overflow-hidden">
        {[
          { top: 'top-[4px]', left: 'left-[2%]', w: 100, x: 12 },
          { top: 'top-[20px]', left: 'left-[8%]', w: 120, x: 18 },
          { top: 'top-[38px]', left: 'left-[14%]', w: 90, x: -10 },
          { top: 'top-[56px]', left: 'left-[20%]', w: 130, x: 20 },
          { top: 'top-[72px]', left: 'left-[27%]', w: 110, x: -16 },
          { top: 'top-[90px]', left: 'left-[34%]', w: 140, x: 22 },
          { top: 'top-[16px]', left: 'left-[41%]', w: 100, x: -12 },
          { top: 'top-[32px]', left: 'left-[48%]', w: 120, x: 14 },
          { top: 'top-[64px]', left: 'left-[55%]', w: 100, x: -10 },
          { top: 'top-[80px]', left: 'left-[62%]', w: 130, x: 18 },
          { top: 'top-[8px]', left: 'left-[70%]', w: 110, x: -14 },
          { top: 'top-[44px]', left: 'left-[78%]', w: 90, x: 15 },
          { top: 'top-[100px]', left: 'left-[86%]', w: 100, x: -8 },
          { top: 'top-[28px]', left: 'left-[94%]', w: 120, x: 20 },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${item.top} ${item.left} w-[${item.w}px] z-60 h-[6px] bg-white/20 rounded-full`}
            animate={{ x: [0, item.x, 0] }}
            transition={{
              duration: 3.5 + (idx % 4),
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Intro;
