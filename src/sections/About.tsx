"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import BookImage from "@/assets/images/book-cover.png"
import Image from "next/image";
import ExpressJsIcon from "@/assets/icons/expressjsIcon.svg";
import FlaskIcon from "@/assets/icons/flaskIcon.svg";
import GithubIcon from "@/assets/icons/github.svg";
import MongodbIcon from "@/assets/icons/mongodbIcon.svg";
import NodeIcon from "@/assets/icons/nodeIcon.svg";
// import PostgresqlIcon from "@/assets/icons/postgresqlIcon.svg";
import ReactIcon from "@/assets/icons/react.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import TypescriptIcon from "@/assets/icons/typescriptIcon.svg";
import { TechIcon } from "@/components/TechIcon";
import junagadhmap from "@/assets/images/junagadhmap.png";
import newjuna from "@/assets/images/newjuna.png"
import map from "@/assets/images/map.png";
import newyork from "@/assets/images/newyork.jpg";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolBoxItems";
import { motion } from "framer-motion";
import { useRef } from "react";


// import Html5Icon from "@/assets/icons/html5.svg";
// import Css3Icon from "@/assets/icons/css3.svg";
// import SquareJsIcon from "@/assets/icons/square-js.svg";
// import ReactIcon from "@/assets/icons/react.svg";
// import GithubIcon from "@/assets/icons/github.svg";
// import ChromeIcon from "@/assets/icons/chrome.svg";
// import { CardHeader } from "@/components/CardHeader";
// import { ToolboxItems } from "@/components/ToolBoxItems";

// const toolboxItems = [
//   { title: "html5", iconType: Html5Icon },
//   { title: "css3", iconType: Css3Icon },
//   { title: "javascript", iconType: SquareJsIcon },
//   { title: "react", iconType: ReactIcon },
//   { title: "github", iconType: GithubIcon },
//   { title: "chrome", iconType: ChromeIcon },
// ];



// const hobbies = [
//   {
//     title: "Music",
//     emoji: "🎶",
//     left: '',
//     top: '',
//   },
//   {
//     title: "Travel",
//     emoji: "🌍",
//   },
//   {
//     title: "Photography",
//     emoji: "📸",
//   },
//   {
//     title: "Gaming",
//     emoji: "🎮",
//   },
//   {
//     title: "Fitness",
//     emoji: "🏋️‍♂️",
//   },
//   {
//     title: "Movies",
//     emoji: "🎬",
//   },
//   {
//     title: "Friends",
//     emoji: "🍻",
//   }
// ];



const hobbies = [
  {
    title: "Music",
    emoji: "🎶",
    left: '5%',
    top: '5%',
  },
  {
    title: "Travel",
    emoji: "🌍",
    left: '50%',
    top: '5%',
  },
  {
    title: "Photography",
    emoji: "📸",
    left: '35%',
    top: '40%',
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: '10%',
    top: '35%',
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: '70%',
    top: '45%',
  },
  {
    title: "Movies",
    emoji: "🎬",
    left: '5%',
    top: '65%',
  },
  {
    title: "Friends",
    emoji: "🍻",
    left: '45%',
    top: '70%',
  }
];




const toolboxItems = [
  {
    title: "javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "typescript",
    iconType: TypescriptIcon,
  },
  {
    title: "react",
    iconType: ReactIcon,
  },
  {
    title: "express js",
    iconType: ExpressJsIcon,
  },
  {
    title: "node js",
    iconType: NodeIcon,
  },
  {
    title: "flask",
    iconType: FlaskIcon,
  },
  {
    title: "mongodb",
    iconType: MongodbIcon,
  },
  {
    title: "git & github",
    iconType: GithubIcon,
  }
];





export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Doing my best to look like I know what I’m doing"
          description="Half the time I’m building cool stuff, the other half I’m just Googling errors."

        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My reads" description="What I read when I’m not debugging 🐛" />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={BookImage} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader title="My Toolbox" description="Tools that make me look smarter than I am 😅"
                className=""

              />
              {/* <div>
              {toolboxItems.map(item => (
                <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
                  <TechIcon component={item.iconType} />
                  <span className="font-semibold">{item.title}</span>
                </div>
              ))}
            </div> */}
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:30s]" />

            </Card>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-5 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title="Beyond the code" description="Trust me, I’m in dark mode 🌙" className="px-6 py-6" />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map(hobby => (
                  <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                    drag
                    dragConstraints={constraintRef}

                  >
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>

                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <a 
                href="https://maps.apple.com/place?auid=278608828980142166&address=Junagadh%2C+Gujarat%2C+India&coordinate=21.522781%2C70.458687&name=Junagadh&lsp=6489"
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full w-full"
              >
                <Image 
                  src={junagadhmap} 
                  alt="Click to view Junagadh on Apple Maps" 
                  className="h-full w-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                />
              </a>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 ">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]">
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10">
                </div>
                <Image src={smileMemoji} alt="emoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
