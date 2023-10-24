import { amazonImg, cyberImg } from "@/public/assets";
import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";
import Link from "next/link";
import softyPy from '../public/assets/images/SoftyPy.png'
const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title=" Showcasing My Top 3 Projects" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://www.ghuronti.com/hotel"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={amazonImg}
                alt="amazonImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">ghrunti.com</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Ghuronti is a Travel Agency website. Where a user travel journey
              is more easyway .Through this website a user can book Flight,
              Hotel, Bus Ticket, Train Ticket and Hajj & Umrah package.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>Redux</li>
              <li>Tailwind css </li>
              <li>Node js</li>
              <li>Express js</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <Link
                className="hover:text-textGreen duration-300"
                href="https://github.com/Ibrahim-Sikder/ghurunti"
                target="_blank"
              >
                <TbBrandGithub />
              </Link>
              <Link
                className="hover:text-textGreen duration-300"
                href="https://www.ghuronti.com/hotel"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </Link>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://havenly-de0a6.web.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={cyberImg}
                alt="cyberImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Havenly </h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              Elevate your housing search experience with our house rental
              website. Explore, sort, and manage your choices in style with
              features like a customizable dashboard, convenient dark mode, and
              secure JWT authentication. Discover the future of seamless renting
              at your fingertips.
              <span className="text-textGreen">User </span> can book house and
              give review.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React js</li>
              <li>Tailwind css</li>
              <li>Strip</li>
              <li>Redux</li>
              <li>Strip & JWT </li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/devmonika/Havenly-client"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://havenly-de0a6.web.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://softy-py.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={softyPy}
                alt="ibrahim"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">SoftyPy</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              This is a It services company website.Through this website that
              company handle there business. By this website user find their
              best It partner. Making this website I use React Js, Tailwind css,
              Node js, Express js and MongoDB.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React Js </li>
              <li>Tailwind Css </li>
              <li>Css custom animation</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Ibrahim-Sikder/SoftyPy"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://softy-py.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
