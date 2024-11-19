import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";


const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./ahmed-modified.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
           Flutter Developer 
        </motion.h1>

        <p className="sub-title">
        I am Ahmed mohamed a Flutter developer with experience building high-performance, cross-platform mobile applications. With a strong focus on creating seamless, user-friendly experiences, I have developed a range of applications that are both visually appealing and highly functional.
        </p>

        <div className="all-icons flex">
          <a href="https://www.linkedin.com/in/ahmed-mohammed-8874142a5/"><div className="icon icon-linkedin"></div></a>
         {/* <a href="https://github.com/jawadTamer"> <div className="icon icon-github"></div></a> */}
         <a href="https://drive.google.com/file/d/1BgswAlrQxQUtcxzU7HQAconXrSR4xTcM/view" style={{color: "#282891"}} >cv <span className="icon icon-link "></span></a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
