import React from "react";
import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animations";

const resume = () => {
 

  return (
    <motion.div className="px-6 py-2"  variants={routeAnimation} initial="initial" animate="animate" exit="exit">
      {/* //education & exp */}

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div  variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Edication</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              {" "}
              Computer Science Engineering
            </h5>
            <p className="font-semibold">Academy of Technology(2017-2019)</p>
            <p className="my-3">
              {" "}
              I am currently pursuing B.tech in Computer Science Engineering
              from Academy of Technology
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" animate="animate" >
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold"> Software Engineer Jr.</h5>
            <p className="font-semibold">Academy of Technology(2017-2019)</p>
            <p className="my-3">I don't know Why I am doing this job</p>
          </div>
        </motion.div>
      </div>

      {/* languages & tools */}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
