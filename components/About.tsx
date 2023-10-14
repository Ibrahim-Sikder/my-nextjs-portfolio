import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import profile from '../public/assets/images/profile.jpg'
const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          
          <p>
          Hi there! I am Ibrahim Sikder, a MERN stack developer with a passion for creating awesome websites and web applications. I may not have a computer science degree, but I have learned the ropes through hands-on experience and a strong desire to build cool stuff on the internet.
          </p>
          <p>I specialize in using MongoDB, Express.js, React, and Node.js to bring web ideas to life. I love making websites that are not only visually appealing but also work smoothly. Whether it is crafting user interfaces with React or building robust server-side APIs with Node.js and Express, I am up for the challenge.</p>
          <p> I am passionate about using my skills to create intuitive, scalable, and reliable applications that can help businesses and organizations reach their objectives. As an associate software engineer, I work closely with cross-functional teams to design and develop high-quality software solutions that meet the needs of our users.
          </p>
         
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profile}
                alt="profile"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
