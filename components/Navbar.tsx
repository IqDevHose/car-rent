// import Link from "next/link";
// import Image from "next/image";

// import CustomButton from "./CustomButton";


// const NavBar = () => (
//   <header className="w-full bg-white fixed z-10">
//     <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
//       <Link href="/" className="flex justify-center items-center">
//         <Image
//           src="/logo.svg"
//           alt="logo"
//           width={118}
//           height={18}
//           className="object-contain"
//         />
//       </Link>

      // <ul className="flex items-center gap-x-2">
      //   {links.map((link) => (
      //     <li className="py-1 px-2" key={link.link + link.label}>
      //       <Link href={link.link}>{link.label}</Link>
      //     </li>
      //   ))}
      // </ul>

//       {/* <CustomButton
//         title="Sign in"
//         btnType="button"
//         containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
//       /> */}
//     </nav>
//   </header>
// );

// export default NavBar;

import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const links = [
  {
    label: "Home",
    link: "#",
  },
  {
    label: "Gallery",
    link: "#",
  },
  {
    label: "Contact",
    link: "/contact",
  },
  {
    label: "About",
    link: "/about",
  },
];

const NavBar = () => (
  <header className='w-full bg-black fixed z-10'>
    <nav className=' max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
         <Image
           src="/logo.png"
            alt="logo"
           width={100}
           height={18}
           className="object-contain"
         />
      </Link>

       <ul className="flex items-center gap-x-2">
         {links.map((link) => (
           <li className="py-1 px-2 text-white" key={link.link + link.label}>
             <Link href={link.link}>{link.label}</Link>
           </li>
         ))}
       </ul>
    </nav>
  </header>
);

export default NavBar;
