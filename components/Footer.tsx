import React from "react"
import beian from "@/public/beian.png";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2025 Stay. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion.
      </p>
      <p className="text-xs">
        <span className="font-semibold">Latest Update:</span> 09/13/2025
        <span className="font-semibold ml-4">Prior Update: </span> 07/15/2025
      </p>
      {/* 添加ICP和公安备案信息在同一行 */}
      <div className="mt-4 flex justify-center space-x-2 items-center text-xs text-gray-500 space-x-3">
        {/* 公安备案信息在前 */}
        
        {/* ICP备案信息 */}
        <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer" className="hover:underline">
          桂ICP备2025069595号  
        </a>
      </div>
    </footer>
  )
}
