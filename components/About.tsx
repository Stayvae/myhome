"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
  const { ref } = useSectionInView("About")
  const t = useTranslations("AboutSection")
  const sectionLan = useTranslations("SectionName")
  const activeLocale = useLocale()

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale == "zh" ? (
        // <p>{t("desc")}</p> //这样一段话没法分段
        <div className="flex flex-col gap-2">
          <div>
            <span className="text-xl md:text-2xl font-bold italic">大家好!</span> <span className="text-xl md:text-2xl font-bold">😘</span>我是一个乐观，积极向上的人。</div>
          <div>
          我的专业是计算机应用技术😳，但编码技术还是一般般📟，还在不断的学习中。
          </div>
          <div> 
          目前我从事于非本专业工作💼，算是一个“巨大”的跨行了，但还是会用空闲时间学习计算机的😎。
          </div>
    

          {/* <div>
            目前，我在准备开发一款AI设备。同时在自己的 微信公众号 、
            <a
              className="text-xl md:text-2xl font-bold italic underline"
              href="https://music.163.com/#/user/home?id=7816209974"
              target="_blank"
            >
              网易云
            </a>
            和 <a
              className="text-xl md:text-2xl font-bold italic underline"
              href="https://space.bilibili.com/1994639130?spm_id_from=333.1007.0.0"
              target="_blank"
            >
              b站
            </a> 记录技术和生活。
          </div> */}
        </div>
      ) : (
        <>
          <p className="mb-3">
          <span className="text-xl md:text-2xl font-bold italic underline">Hello everyone!</span> <span className="text-xl md:text-2xl font-bold">😘</span>I am an optimistic and positive person.
           <span className="text-xl md:text-2xl font-bold"></span>.
           My major is Computer Application Technology 😳, but my coding skills are still average 📟, and I’m continuously learning.
           Currently, I’m working in a field unrelated to my major 💼, which is a pretty "huge" career shift, but I still use my free time to study computer science 😎.
           
           
          </p>
{/* 
          <p className="mb-3">
           To document my growth journey and find like-minded peers, I share my thoughts on multiple platforms😂: WeChat public account 
           <span className="font-medium italic"> &quot;JieNitang&quot; </span> 
           and Bilibili 
           <span className="font-medium italic"> &quot;Hanburg&quot; </span>  
           have recorded technical notes and life snippets (currently paused for graduation preparations). My personal moments serve as a &quot;growth diary&quot;😌, frequently sharing learning challenges, pitfalls, and occasional emotional fragments - both to avoid forgetting and to spark ideas with friends.
          </p>

          <p className="mb-3">
          As a NetEase Cloud Music partner (<span className="font-medium italic"> &quot;JieNitang&quot; </span>: enjoying permanent VIP benefits😎), &quot;listening to music&quot; is my preferred way to recharge. Beyond technical learning, it preserves my emotional connection to life. Numerous experiences have taught me resilience in adversity, conflict, failure and even success. I firmly believe perseverance, focus and confidence are among my most valuable qualities.
          </p>

          <p className="mb-3">
          I recognize I&apos;m still in early growth stages, needing to refine both technical skills and professional awareness✍. But diverse experiences have cultivated my ability to &quot;quickly adapt and reflect&quot;🧘‍♂. Moving forward, I hope to join a team combining technical atmosphere with growth space🤝, translating potential into value through diligent work while learning systematic approaches from colleagues.   
          </p>  

          <p className="mb-3">
          I sincerely hope that every friend can be full of expectations for the future. May our courage always be burning hot!
          <span className="text-xl md:text-2xl font-bold italic underline">Go forward!🚀🚀🚀</span>
          </p> */}

          

          
        </>
      )}
    </motion.section>
  )
}
