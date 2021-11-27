import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      {/* <img
        src="https://docs.kariyer.net/candidate/000/024/476/avatar/2447609520191214014806287.jpg?filesec=XdsV1VzBKiPzRwcAz5MUUrQs62paRHWQKZE0fMeNGD0srCpP82SOy0gReBGyFO40m6NqbhDXIr5RktpxSbOo4L%2FWhX4Tz6Uk!e!"
        alt="user avar"
        className="w-32 h-32 mx-auto rounded-full"
      /> */}

      <Image
        src="https://docs.kariyer.net/candidate/000/024/476/avatar/2447609520191214014806287.jpg?filesec=XdsV1VzBKiPzRwcAz5MUUrQs62paRHWQKZE0fMeNGD0srCpP82SOy0gReBGyFO40m6NqbhDXIr5RktpxSbOo4L%2FWhX4Tz6Uk!e!"
        alt="user avar"
        className="mx-auto rounded-full"
        height="200px"
        width="200px"
        layout="intrinsic"
        quality="100"
      />

      <h3 className="my-4 text-3xl tracking-wider font-kaushan">
        {" "}
        <span className="text-green">Zeki</span> Kaya
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-700 dark:bg-black-500 ">
        Backend Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 bg-gray-200 rounded-full dark dark:bg-dark-700"
        //  href="/assets/Zeki Kaya Resume.pdf"
        //  download="Zeki Kaya Resume.pdf"
        href="/assets/blink.jpg"
        download="blink.jpg"
      >
        {" "}
        <GiTie className="w-6 h-6" /> Download Resume
      </a>

      {/* Social icons */}

      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* address */}

      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-700"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Istanbul Turkey</span>
        </div>
        <p className="my-2">kayaazeki@hotmail.com</p>
        <p className="my-2">0534243****</p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => {
          window.open("mailto:kayaazeki@hotmail.com");
        }}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
