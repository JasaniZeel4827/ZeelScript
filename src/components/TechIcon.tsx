// export const TechIcon = ({ component }: { component: React.ElementType }) => {
//     const Component = component;
//     return <>
//         <Component className="size-10 />
//         <svg>
//             <linearGradient id="tech-icon-gradient">
//                 <stop offset="0%" stopColor="rgb(110 231 183)" />
//                 <stop offset="100%" stopColor="rgb(56 189 248)" />
//             </linearGradient>
//         </svg>
//     </>
    
// }




// export const TechIcon = ({ component }: { component: React.ElementType }) => {
//   const Component = component;
//   return (
//     <Component className="size-10 fill-[url(#tech-icon-gradient)]">
//       <svg className="size-0 absolute">
//         <linearGradient id="tech-icon-gradient">
//           <stop offset="0%" stopColor="rgb(110 231 183)" />
//           <stop offset="100%" stopColor="rgb(56 189 248)" />
//         </linearGradient>
//       </svg>
//     </Component>
//   );
// };




export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;

  return (
    <>
      {/* Gradient definition hidden SVG */}
      <svg className="absolute w-0 h-0">
        <defs>
          <linearGradient id="tech-icon-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgb(110 231 183)" />
            <stop offset="100%" stopColor="rgb(56 189 248)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Icon using gradient */}
      <Component className="size-10" style={{ fill: "url(#tech-icon-gradient)" }} />
    </>
  );
};
