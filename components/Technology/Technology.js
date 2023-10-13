import React from "react";
import style from "./Technology.module.css";
import Marquee from "react-fast-marquee";
import html from "../../public/assets/html.jpg.svg";
import css from "../../public/assets/css.svg";
import javascript from "../../public/assets/javascript.svg";
import react from "../../public/assets/react.svg";
import node from "../../public/assets/node.svg";
import mongodb from "../../public/assets/mongodb.svg";
import firebase from "../../public/assets/firebase.svg";
import line from "../../public/assets/line.svg";
import Image from "next/image";
const Technology = () => {
  return (
    <div className="">
        <div className="text-center w-7/12 mx-auto ">
            <h3 className="text-4xl font-bold text-textGreen">Front-End & Back-End Abilities</h3>
            <p className="mt-3 mb-8 text-white">I plan to further deepen my knowledge of the MERN stack and enhance my proficiency in both front-end and back-end development. My goal is to be a versatile full-stack developer capable of architecting entire applications from start to finish.</p>
        </div>
     <div className="flex items-center">
     <Marquee pauseOnHover={true}>
        <div className={`${style.skill} ${style.skills}`}>
          <Image src={html} alt="html" width={170} />
        </div>
        <div className={`${style.skill2} ${style.skills}`}>
          <Image src={css} alt="html" width={170} />
        </div>
        <div className={`${style.skill} ${style.skills}`}>
          <Image src={javascript} alt="html" width={170} />
        </div>
        <div className={`${style.skill2} ${style.skills}`}>
          <Image src={react} alt="html" width={170} />
        </div>
        <div className={`${style.skill} ${style.skills}`}>
          <Image src={node} alt="html" width={170} />
        </div>
        <div className={`${style.skill2} ${style.skills}`}>
          <Image src={mongodb} alt="html" width={170} />
        </div>
        <div className={`${style.skill} ${style.skills}`}>
          <Image src={firebase} alt="html" width={170} />
        </div>
        <div className={`${style.skill} ${style.hidSkill}`}>
          <Image src={html} alt="html" width={170} />
        </div>
      </Marquee>
     </div>
      <div className={style.lineWrap}>
        <Marquee pauseOnHover={true}>
          <div className={style.line}>
            <Image src={line} alt="html" width={5000} />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Technology;
