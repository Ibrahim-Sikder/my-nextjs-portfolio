import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect} from "react";
import { useTypewriter } from "react-simple-typewriter";
import style from './Style.module.css'
import Image from "next/image";
import dynamic from "next/dynamic";
const Banner = () => {
  const [text] = useTypewriter({
    words: ['MERN Stack Developer', 'Full Stack Developer', 'React js Developer', 'JavaScript Developer!'],
    loop: 0
  })

  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });


  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
     <div className={style.bannerWrap}>
      <div className={style.leftSide}>
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Ibrahim Sikder.
        <span className="text-textDark text-3xl mt-2 lgl:mt-4">
        I am a <span className="text-textGreen">{text}</span>
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
      <p className="mt-2 mb-5"> I am a passionate MERN stack developer with a strong foundation in building robust web applications. My goal is to leverage my expertise in MongoDB, Express.js, React, and Node.js to contribute to innovative and dynamic projects within a forward-thinking organization. I am dedicated to delivering high-quality software solutions that not only meet but exceed user expectations, combining my technical skills with a keen eye for user experience.</p>
      </motion.p>
      <Link href="https://github.com/Ibrahim-Sikder" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-44 h-10 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my project!
        </motion.button>
      </Link>
      </div>
      <div className={style.rightSide}>
      <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src="/ibrahim.json"
          className={style.programmerAnimation}
        ></lottie-player>
        
      </div>
     </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Banner), { ssr: false });