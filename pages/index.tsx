import { GetServerSideProps } from "next";
import { IService } from "../type";
import ServiceCard from "../components/ServiceCard";

import { services } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../animations";

const index = (props: { services: IService[] }) => {
  // console.log("----------------------------Client----------------------------");

  return (
    <motion.div 
    variants={routeAnimation} initial="initial" animate="animate" exit="exit"
    className="flex flex-col flex-grow px-6 pt-1" >
      <h5 className="my-3 font-medium">
        I am currently pursuing B.Tech Degree(Final Year) in Computer Science
        Engineering from Academy of Technology. I have 3+ years of experience in
        Web Development and I have a Youtube Channel where I teach Full Stack
        Web Development
      </h5>
      <div
        className="flex-grow p-4 mt-4 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {/* {props.services.map((service) => (
            <div className="bg-gray-200 rounded-lg lg:col-span-1 ">
              <ServiceCard service={service} />
            </div>
          ))} */}
          {services.map((service) => (
            <motion.div
              variants={fadeInUp}
              className="col-span-2 p-2 bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200 "
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;

//If ourt data is static we dont need to use getServerSideProps() function
// export const getServerSideProps = async (contex: GetServerSideProps) => {
//   //calculation

//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   console.log('getServerSideProps Metod')
//   console.log("----------------------------Server----------------------------");
//   console.log("SERVER", data);

//   return {
//     props: {
//       services: data,
//     },
//   };
// };

// This functon call once time at the project build beacuse this data static and never change so we dont need call every About page opening
export const getStaticProps = async (contex: GetServerSideProps) => {
  //calculation

  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();

  console.log("getStaticProps Metod");
  // console.log("----------------------------Server----------------------------");
  // console.log("SERVER", data);

  return {
    props: {
      services: data,
    },
  };
};
