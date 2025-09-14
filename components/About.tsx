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
      className="max-w-[45rem] text-start leading-8 scroll-mt-28 mb-28 sm:mb-40"
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
        


          

          
        </>
      )}
    </motion.section>
  )
}
