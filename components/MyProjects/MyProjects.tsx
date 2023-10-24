import icon from "../../public/assets/icon6.png";
import icon2 from "../../public/assets/quizzing.png";
import icon3 from "../../public/assets/car.png";
import icon4 from "../../public/assets/restaurant.png";
import icon5 from "../../public/assets/landing.png";
import mobile from "../../public/assets/mobile.png";
import style from "./Project.module.css";
import Image from "next/image";
import Link from "next/link";
const MyProjects = () => {
  const cardData = [
    {
      id: 1,
      img: icon,
      name: "SoftyPy",
      desc: "SoftyPy is a It Services Website.Making this website I use React js, Tailwind Css, Matarial UI, Node Js, Express Js, MongoDB technologies.",
    },
    {
      id: 2,
      img: icon2,
      name: "Happy Quizzing",
      desc: "It is Quizzing Website. Where you give quize based on JavaScript, React js, Html5, Css3.React Js , Bootstrap using tecnologies in this website.",
    },

    {
      id: 3,
      img: icon4,
      name: "Bistro Boss ​",
      desc: "It is Restaurant Website. Where user can order different food.In this website make I use React js, Tailwind Css, Node Js, Express js and MongoDB.",
    },
    {
      id: 4,
      img: icon3,
      name: "Car Services",
      desc: "It is Car services website.There are Search and mongodb sort functionality added. Making this website I use React js, Tailwind Css, Node js, Express js and MongoDB",
    },
    {
      id: 5,
      img: icon5,
      name: "Landing Page Design ",
      desc: "It is full responsive landing page design. It is just awesome user friendly landing page design.",
    },
  ];
  return (
    <div className={style.servicesWraps}>
      <div className={style.ourServicesWrap}>
        <div className={style.ourServiceLeftSide}>
          <h3 className="text-3xl mb-3 text-[#64FFDA] font-bold ">
          Other portfolio Showcase: My Creative Journey
          </h3>
          <p>
            Explore my diverse portfolio showcasing a range of projects, each a
            testament to my passion for innovation and creativity. From web
            development to design, these works demonstrate my dedication to
            delivering excellence in every endeavor.
          </p>
        </div>
        <div className={style.ourServicesRightSide}>
          <div>
            <div className={style.cardsWrap}>
            <div className={style.cards}>
                  <div className={style.innerBox}>
                    <div className={style.cardsFront}>
                      <div className={style.iconWrap}>
                        <Image src={mobile} alt="Icon" />
                      </div>
                      <p className="mt-2 font-bold"> Used Reselled Products </p>
                    </div>
                    <div className={style.cardsBack}>
                      <div className={style.cardsBackContent}>
                        <b className="block">Used Reselled Products </b>
                        <small className="my-1 md:my-3">It is a Used Reselled Products Website . Where user reseled this used products. </small>
                        <div className="flex items-center justify-between w-[150px] mx-auto">
                          <Link href='https://bliss-car-world.web.app/'><small>Preiveiw </small></Link>
                          <Link href='https://github.com/Ibrahim-Sikder/bliss-car-world-client'> <small>Client </small> </Link>
                          <Link href='https://github.com/Ibrahim-Sikder/bliss-car-server'> <small>Client </small> </Link>
                       
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.cards}>
                  <div className={style.innerBox}>
                    <div className={style.cardsFront}>
                      <div className={style.iconWrap}>
                        <Image src={icon} alt="Icon" />
                      </div>
                      <p className="mt-2 font-bold"> GPT3 </p>
                    </div>
                    <div className={style.cardsBack}>
                      <div className={style.cardsBackContent}>
                        <b className="block">GPT3 </b>
                        <small className="my-1 md:my-3"> This is a full responsive user friendly website. Making this website I use Next js. </small>
                        <div className="flex items-center justify-between w-[150px] mx-auto text-black">
                          <Link href='https://6455bd7567048843913f9d26--dreamy-conkies-33d504.netlify.app/'><small>Preiveiw </small></Link>
                          <Link href='https://github.com/Ibrahim-Sikder/GPT3'><small>Client </small></Link>
                          <small>Server </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.cards}>
                  <div className={style.innerBox}>
                    <div className={style.cardsFront}>
                      <div className={style.iconWrap}>
                        <Image src={icon5} alt="Icon" />
                      </div>
                      <p className="mt-2 font-bold"> Landing Page Design </p>
                    </div>
                    <div className={style.cardsBack}>
                      <div className={style.cardsBackContent}>
                        <b className="block">Landing Page Design </b>
                        <small className="my-1 md:my-3"> It is full responsive landing page design using only html, css, javascript. </small>
                        <div className="flex items-center justify-between w-[150px] mx-auto">
                          <Link href='https://subtle-selkie-38000f.netlify.app/'><small>Preiveiw </small></Link>
                          <Link href='https://github.com/Ibrahim-Sikder/LandingpageWebsite'> <small>Client </small> </Link>
                          <small>Server </small>
                       
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.cards}>
                  <div className={style.innerBox}>
                    <div className={style.cardsFront}>
                      <div className={style.iconWrap}>
                        <Image src={icon2} alt="Icon" />
                      </div>
                      <p className="mt-2 font-bold"> Happy Quizzing </p>
                    </div>
                    <div className={style.cardsBack}>
                      <div className={style.cardsBackContent}>
                        <b className="block">Happy Quizzing </b>
                        <small className="my-1 md:my-3"> It is Quizzing website.Where user test him giving quize. </small>
                        <div className="flex items-center justify-between w-[150px] mx-auto">
                          <Link href='https://sweet-crumble-8a9724.netlify.app/'><small>Preiveiw </small></Link>
                          <Link href='https://github.com/Ibrahim-Sikder/quiz-cracker'> <small>Client </small> </Link>
                          <small>Server </small>
                       
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.cards}>
                  <div className={style.innerBox}>
                    <div className={style.cardsFront}>
                      <div className={style.iconWrap}>
                        <Image src={icon3} alt="Icon" />
                      </div>
                      <p className="mt-2 font-bold"> Car Services </p>
                    </div>
                    <div className={style.cardsBack}>
                      <div className={style.cardsBackContent}>
                        <b className="block">Car Services </b>
                        <small className="my-1 md:my-3"> It is car services website.Making this website I use React js , Tailwind css, Node js, Express js, JWT, MongoDB </small>
                        <div className="flex items-center justify-between w-[150px] mx-auto">
                          <Link href='https://sensational-zuccutto-34d3d8.netlify.app/'><small>Preiveiw </small></Link>
                          <Link href='https://github.com/Ibrahim-Sikder/car-services-client'> <small>Client </small> </Link>
                          <Link href='https://github.com/Ibrahim-Sikder/car-services-servers'> <small>Server </small> </Link>
                       
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
