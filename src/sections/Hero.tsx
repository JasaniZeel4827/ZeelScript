/* eslint-disable react/no-unescaped-entities */
import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SprakleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from '@/components/HeroOrbit';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 relative overflow-x-clip">
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent, black_10%,black_70%,transparent)] pointer-events-none'>
        <div className='absolute inset-0 opacity-5' style={{ backgroundImage: `url(${grainImage.src})` }}></div>
        <div className='size-[620px] hero-ring'></div>
        <div className='size-[820px] hero-ring'></div>
        <div className='size-[1020px] hero-ring'></div>
        <div className='size-[1220px] hero-ring'></div>
        <HeroOrbit size={800} rotation={-72} shouldOrbit 
        orbitDuration="25s" shouldSpin={true} spinDuration="8s">
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={0} shouldOrbit 
        orbitDuration="35s" shouldSpin={true} spinDuration="13.5s">
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit 
        orbitDuration="20s" shouldSpin={true} spinDuration="6s">
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14} 
        shouldOrbit 
        orbitDuration="40s" shouldSpin={true} spinDuration="17.2s">
          <SprakleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit 
        orbitDuration="30s" shouldSpin={true} spinDuration="11.8s">
          <SprakleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit 
        orbitDuration="45s" shouldSpin={true} spinDuration="19.3s">
          <SprakleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit 
        orbitDuration="22s" shouldSpin={true} spinDuration="7.4s">
          <SprakleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit 
        orbitDuration="38s" shouldSpin={true} spinDuration="14.7s">
          <div className='size-3 rounded-full bg-emerald-300/20'></div>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit 
        orbitDuration="28s" shouldSpin={true} spinDuration="9.1s">
          <div className='size-2 rounded-full bg-emerald-300/20'></div>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit 
        orbitDuration="42s" shouldSpin={true} spinDuration="16.5s">
          <div className='size-2 rounded-full bg-emerald-300/20'></div>
        </HeroOrbit>
      </div>

      <div className="container relative z-10">
        <div className='flex flex-col items-center'>
          <Image src={memojiImage} className="size-[100px]" alt="person behind the laptop" />
          <div className="bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className='bg-green-500 absolute inset-0 animate-ping rounded-full'></div>
            </div>
            <div className="text-sm font-medium">🛠 Currently developing — reach out to connect</div>
          </div>
        </div>
        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>Innovating for People, Not Just Machines</h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>Building scalable and secure systems that truly serve people.
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4 relative z-20'>
          <Link 
            href="projects" 
            className='inline-flex items-center justify-center gap-4 border border-white/15 px-6 h-12 rounded-xl hover:bg-white/5 transition-colors relative z-10'
          >
            <span className='font-semibold'>See What I Build</span>
            <ArrowDown className="size-4" />
          </Link>
          <Link 
            href="/contact" 
            className='inline-flex items-center justify-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-white/90 transition-colors relative z-10'
          >
            <span>👋</span>
            <span className='font-semibold'>Let’s Collaborate</span>
          </Link>
        </div>
      </div>
    </div>
  );
};