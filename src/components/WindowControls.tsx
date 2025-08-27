import { ComponentProps } from 'react';

type WindowControlsProps = ComponentProps<'div'> & {
  className?: string;
};

export const WindowControls = () => {
  return (
    <div className="flex gap-2 absolute left-4 top-4">
      <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] shadow-sm hover:brightness-90 transition-all cursor-default cursor-default"></div>
      <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#D8A022] shadow-sm hover:brightness-90 transition-all cursor-default cursor-default"></div>
      <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] shadow-sm hover:brightness-90 transition-all cursor-default cursor-default"></div>
    </div>
  );
};
