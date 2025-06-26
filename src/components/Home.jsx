import homeImg from "../../assets/homeimage.png";
import homeBg from "../../assets/eyp.webm";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

export const Home = () => {
  return (
    <div
      className="relative bg-white w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between 
    items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 object-cover w-full h-full opacity-50"
      > 
        <source src={homeBg} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[60%] w-full flex flex-col justify center items-start lg:gap-8 gap-4 z-10"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-orange-700 font-bold text-2xl"
        >
          WE ARE CAFFE ENGINEERING
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-black uppercase text-[50px] font-bold"
        >
          we will build your dream
        </motion.h1>
        <div className="w-[180px] h-[6px] bg-orange-700"></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="flex justify-center items-center gap-5 "
        >
          <motion.a
            variants={zoomInVariants}
            className="z-[100] border-black hover:border-orange-700 hover:text-orange-700 border-2 px-10 py-3 rounded-lg text-black font-bold"
            href="https://www.facebook.com/messages/t/311288022867857"
            target="blank"
          >
            REACH US
          </motion.a>
        </motion.div>
      </motion.div>
      <div className="w-[40%] flex flex-col justify-end items-end">
        <motion.img
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          src={homeImg}
          alt="homeImage"
          className="lg:h-[655px] h-[300px] lg:mb-[-100px] z-10"
        />
      </div>
    </div>
  );
};
