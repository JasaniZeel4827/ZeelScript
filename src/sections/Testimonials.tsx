// import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
// import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
// import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
// import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
// import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
// import { SectionHeader } from "@/components/SectionHeader";
// import Image from "next/image";
// import grainImage from "@/assets/images/grain.jpg";
// import { Card } from "@/components/Card";

// const testimonials = [
//   {
//     name: "Rutvik",
//     position: "Marketing Manager @ TechStartups",
//     text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
//     avatar: memojiAvatar1,
//   },
//   {
//     name: "Pujan",
//     position: "Head of Design @ GreenLeaf",
//     text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
//     avatar: memojiAvatar2,
//   },
//   {
//     name: "Kunj",
//     position: "CEO @ InnovateCo",
//     text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
//     avatar: memojiAvatar3,
//   },
//   {
//     name: "steve",
//     position: "Product Manager @ GlobalTech",
//     text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
//     avatar: memojiAvatar4,
//   },
//   {
//     name: "Dustin",
//     position: "Director of IT @ MegaCorp",
//     text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
//     avatar: memojiAvatar5,
//   },
// ];




// export const TestimonialsSection = () => {
//   return (
//     <div className="py-16 flex">
//       <div className="container">
//         <SectionHeader
//           eyebrow="Happy Clients"
//           title="What Clients Say about me"
//           description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus animi aliquam eius" />
//         <div className="mt-16 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
//           <div className="flex gap-8 flex-none">
//             {testimonials.map(testimonial => (
//               // <div key={testimonial.name} className="bg-gray-800 rounded-3xl p-6 relative overflow-hidden z-0">
//               <Card key={testimonial.name} className="max-w-xs">
//                 <div className="flex gap-4 items-center">
//                   <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
//                     <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full" />
//                   </div>
//                   <div className="">
//                     <div className="font-semibold">{testimonial.name}</div>
//                     <div className="text-sm text-white/40">{testimonial.position}</div>
//                   </div>
//                 </div>
//                 <p className="mt-4 text-sm">{testimonial.text}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

































import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import myAvatar from "@/assets/images/my-avatar.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import avatar1 from "@/assets/images/avatar-1.png";
import avatar2 from "@/assets/images/avatar-2.png";
import avatar3 from "@/assets/images/avatar-3.png";
import avatar4 from "@/assets/images/avatar-4.png";

import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

// const testimonials = [
//   {
//     name: "Rutvik",
//     position: "Marketing Manager @ TechStartups",
//     text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
//     avatar: memojiAvatar1,
//   },
//   {
//     name: "Pujan",
//     position: "Head of Design @ GreenLeaf",
//     text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
//     avatar: memojiAvatar2,
//   },
//   {
//     name: "Kunj",
//     position: "CEO @ InnovateCo",
//     text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
//     avatar: memojiAvatar3,
//   },
//   {
//     name: "Steve",
//     position: "Product Manager @ GlobalTech",
//     text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
//     avatar: memojiAvatar4,
//   },
//   {
//     name: "Dustin",
//     position: "Director of IT @ MegaCorp",
//     text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
//     avatar: memojiAvatar5,
//   },
// ];






const testimonials = [
  // {
  //   name: "Rutvik",
  //   text: "Working with Zeel felt effortless. He understood what we needed and turned it into something better than we imagined.",
  //   avatar: memojiAvatar3,
  // },
  // {
  //   name: "Pujan",
  //   text: "Zeel has that rare mix of creativity and technical skills. He took our ideas and made them work beautifully in reality.",
  //   avatar: myAvatar,
  // },
  // {
  //   name: "Kunj",
  //   text: "Whenever Zeel works on a project, you know it’s going to be reliable and well thought out. The results always speak for themselves.",
  //   avatar: memojiAvatar1,
  // },
  // {
  //   name: "Sakshi",
  //   text: "Zeel turned our complex requirements into something simple and user-friendly. Everyone on our team loved the outcome.",
  //   avatar: avatar3,
  // },
  // {
  //   name: "nitiksha",
  //   text: "What stands out about Zeel is not just his skills, but also the way he communicates. It made the whole process smooth and enjoyable.",
  //   avatar: memojiAvatar4,
  // },



  {
    name: "Rutvik",
    text: "Working with Zeel is always chilled out. He’ll crack a joke in between debugging but still deliver a backend that never fails. Our system runs smoother because of his balance of humor and solid skills.",
    avatar: memojiAvatar3,
  },
  {
    name: "Pujan",
    text: "Zeel has this cool mix of creativity and logic. We gave him half-baked ideas and he turned them into something real, scalable, and actually fun to use. He makes tech feel less stressful.",
    avatar: myAvatar,
  },
  {
    name: "Kunj",
    text: "One thing about Zeel—you know the project is safe in his hands. He thinks through everything from database design to deployment. Plus, he keeps the vibe light even when things get intense.",
    avatar: memojiAvatar1,
  },
  {
    name: "Sakshi",
    text: "Zeel took our complex requirements and broke them down like it was nothing. The final result was so simple to use that even the non-techies on our team loved it.",
    avatar: avatar3,
  },
  {
    name: "Nitiksha",
    text: "What stands out about Zeel is how he communicates. Even when he’s explaining AI or ML stuff, he’ll make it sound simple and add a little humor so you don’t feel lost.",
    avatar: memojiAvatar4,
  },
  {
    name: "Rohan",
    text: "I honestly thought setting up CI/CD would be a headache, but Zeel had it running in no time. The best part? He explained the process with memes, so we actually remembered it.",
    avatar: avatar2,
  },
  {
    name: "Mansi",
    text: "Zeel doesn’t just code—he adds personality to his work. The small touches he brings, whether in backend logic or an AI feature, make the project feel alive and user-friendly.",
    avatar: memojiAvatar2,
  },
  {
    name: "Dev",
    text: "What I liked most was how Zeel thinks beyond the code. He made sure the backend was secure, scalable, and future-proof. At the same time, he kept things fun and easy for the team.",
    avatar: avatar4,
  },
  {
    name: "Priya",
    text: "Zeel handled our DevOps setup so smoothly that we didn’t even realize when half the manual work disappeared. He makes collaboration stress-free and honestly fun.",
    avatar: memojiAvatar5,
  },
  {
    name: "Ankit",
    text: "Working with Zeel feels less like ‘just business’ and more like teaming up with a friend who actually knows his stuff. His combo of backend, DevOps, and AI skills is rare—and he makes the journey enjoyable.",
    avatar: memojiAvatar4,
  }
];


export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="FROM FRIENDS & PEERS"
          title="What People Say About Me"
          description="A collection of feedback that shows how people see my work, my mindset, and the experiences they’ve had working with me"

        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move [animation-duration:60s] group-hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="relative p-[2px] rounded-3xl bg-gradient-to-r from-emerald-300/20 to-sky-400/20 max-w-xs lg:max-w-md xl:max-w-lg 2xl:max-w-xl hover:-rotate-3 transition duration-300"
                  >
                    <Card className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-6 h-full md:p-8 lg:p-10">
                      <div className="flex gap-4 items-center">
                        <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="max-h-full"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          {/* <div className="text-sm text-white/40">
                            {testimonial.position}
                          </div> */}
                        </div>
                      </div>
                      <p className="mt-4 md:mt-6 lg:mt-8 text-sm md:text-base lg:text-lg">{testimonial.text}</p>
                    </Card>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
