
import icon from "../../public/assets/icon6.png";
import icon2 from "../../public/assets/quizzing.png";
import icon3 from "../../public/assets/car.png";
import icon4 from "../../public/assets/restaurant.png";
import icon5 from "../../public/assets/landing.png";
import style from './Project.module.css';
import Image from "next/image";

const MyProjects = () => {
  
  const cardData = [
    {
      id: 1,
      img: icon,
      name: "SoftyPy",
      desc:"SoftyPy is a It Services Website.Making this website I use React js, Tailwind Css, Matarial UI, Node Js, Express Js, MongoDB technologies."
    },
    {
      id: 2,
      img: icon2,
      name: "Happy Quizzing",
    desc: "It is Quizzing Website. Where you give quize based on JavaScript, React js, Html5, Css3.React Js , Bootstrap using tecnologies in this website."
    },
    
    {
      id: 3,
      img: icon4,
      name: "Bistro Boss ​",
      desc: "It is Restaurant Website. Where user can order different food.In this website make I use React js, Tailwind Css, Node Js, Express js and MongoDB."
    },
    {
      id: 4,
      img: icon3,
      name: "Car Services",
      desc:"It is Car services website.There are Search and mongodb sort functionality added. Making this website I use React js, Tailwind Css, Node js, Express js and MongoDB"
    },
    {
      id: 5,
      img: icon5,
      name: "Landing Page Design ",
      desc: 'It is full responsive landing page design. It is just awesome user friendly landing page design.'
    },
    
  ];
  return (
    <div className={style.servicesWraps}>
      <div className={style.ourServicesWrap}>
        <div  className={style.ourServiceLeftSide}>
          <h3 className="text-3xl mb-3 text-[#64FFDA] font-bold ">
          "Other portfolio Showcase: My Creative Journey"
          </h3>
          <p>
            
Explore my diverse portfolio showcasing a range of projects, each a testament to my passion for innovation and creativity. From web development to design, these works demonstrate my dedication to delivering excellence in every endeavor.
          </p>
        </div>
        <div className={style.ourServicesRightSide}>
          <div>
            <div className={style.cardsWrap}>
              {cardData.map((card) => (
                <div key={card.id} className={style.cards}>
                  <div className={style.innerBox}>
                    <div className={style.cardsFront}>
                      <div className={style.iconWrap}>
                        <Image
                        src={card.img}
                        alt='Icon'
                        />
                      </div>
                      <p className="mt-2 font-bold">{card.name}</p>
                    </div>
                    <div className={style.cardsBack}>
                      <div className={style.cardsBackContent}>
                        <b className="block"> {card.name}</b>
                        <small className="my-1 md:my-3">
                         {card.desc}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
