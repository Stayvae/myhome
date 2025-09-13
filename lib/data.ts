import React from "react";
import { FaReact, FaVuejs, FaGithub, FaWeixin, FaGlobe, FaRegHandshake, FaHandshake, FaHandPointUp, FaHandPointer  } from "react-icons/fa";
import { LuGraduationCap, LuMusic, LuGlobe2, LuBaby,  } from "react-icons/lu";
import { MdOutlineComputer } from "react-icons/md";//时间线icon图标
import { IoSchoolSharp } from "react-icons/io5";//时间线icon图标
import { RiToolsFill } from "react-icons/ri";//时间线icon图标
import tank from '@/public/tank.png';
import NetEasemusic from "@/public/NetEasemusic.png";
import cupt from "@/public/cupt.jpg";
import xb2 from "@/public/xb2-node.jpg";
import airiot from "@/public/airiot.png";
import draws from "@/public/draws.jpg";
import second02 from "@/public/xm3.png";//个人网站
import tankv3 from '@/public/xm4.png';//个人主页
import Dig from '@/public/Dig.jpg';
import air2 from '@/public/air2.jpg';
import backweb from '@/public/backweb.jpg';
import xd2 from '@/public/xd2.jpg';
import pw from '@/public/xm5.png';//hexo+github pages+vercel个人网站
import coze3 from '@/public/coze3.jpg';
import moho2 from '@/public/moho2.jpg';
import music3 from '@/public/music3.jpg';
import art1 from '@/public/art1.jpg';


export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Competencies",
        hash: "#competencies",
    },
    {
        name: "Timeline",
        hash: "#timeline",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


export const headerLanguageMap = {
    Home: '首页',
    About: '关于我',
    Projects: '实践',
    Competencies: '技能',
    Timeline: '时间线',
}

//时间线数据
export const experiencesDataZn = [
    {
        "title": "新的开始，个人网站的搭建",
        "location": "echolx.com",
        "description": "有了之前搭建的经验，这次我决定重新搭建个人网站，使用Typecho框架，部署在腾讯云服务器上。经过一段时间的调试和修改，终于完成了网站的搭建。虽然过程中遇到了不少困难，但每解决一个问题都让我感到无比的成就感。",
        icon: React.createElement(MdOutlineComputer),
        "date": "2025 年 7 月"
    },

     {
        "title": "个人网站搭建",
        "location": "xxx",
        "description": "自主学习搭建起个人网站，从零开始，经历了无数次的调试和修改，终于完成了网站的初步搭建。使用 React 和 Next.js（App Router 和 Server Actions）、TypeScript、Tailwind CSS、Framer Motion 构建。",
        icon: React.createElement(FaGlobe),
        "date": "2025 年 7 月"
    },

    {
        "title": "从事工作",
        "location": "新的行业，新的挑战",
        "description": "对于全新行业的工作，既感到新鲜又有些忐忑。希望能在工作中不断学习和成长，积累经验。",
        icon: React.createElement(RiToolsFill),
        "date": "2025 年 4 月"
    },

    {
        "title": "大学毕业🎓",
        "location": "毕业",
        "description": "大学生活结束，迎来人生新阶段。",
        "icon": React.createElement(IoSchoolSharp),
        "date": "2023 年 6 月"
    },

    {
        "title": "入驻Github",
        "location": "Stay",
        "description": "加入GitHub",
        "icon": React.createElement(FaGithub),
        "date": "2023 年 4 月"
    }
    
]

//实践数据
export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        "title": "Stay日记本📖",
        "title_zh": "Stay日记本📖",
        "description":
            "Stay日记本📖",
            "desc_zh": "基于Typecho框架，使用腾讯云服务器进行搭建。<a href='https://echolx.com/' target='_blank' style='font-weight: bold; font-style: italic; text-decoration: underline;'>[ 前往 ]</a>",
        "tags": ["个人", "博客"],
        "imageUrl": second02,
        "demoUrl": "https://echolx.com/"
    },
    {
        "title": "Stay个人主页",
        "title_zh": "Stay个人主页",
        "description":
            "使用 React 和 Next.js（App Router 和 Server Actions）、TypeScript、Tailwind CSS、Framer Motion 构建。 ",
        "desc_zh": "使用 React 和 Next.js（App Router 和 Server Actions）、TypeScript、Tailwind CSS、Framer Motion 构建。",
        "tags": ["React", "Next.js", "TypeScript"],
        "imageUrl": tankv3,
        //"projectUrl": "https://b23.tv/bEJYAIN",
        "demoUrl": "#"
    },
    {
        title: "hexo+github pages+vercel个人网站",
        title_zh: 'hexo+github pages+vercel个人网站',
        description:
            "基于hexo框架，使用github pages+vercel进行搭建。",
        tags: ["hexo", "butterfly", "vercel"],
        imageUrl: pw, // 可替换为实际网站截图
        demoUrl: 'https://hexo.staylx.top', // 替换为你的网站地址
    }

]
//技能数据
export const competenciesData = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Github",
    "Bootstrap", 
    "SQLServer",
    ".NETMVC",
    "Vue.js",
    "TypeScript",
    "Mysql"
]