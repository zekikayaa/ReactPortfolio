import { GetServerSideProps } from "next";
// import { services } from "../data";

const index = (props) => {
  // console.log("----------------------------Client----------------------------");
  // console.log(props)

  return (
    <div>
      <h1>Bye bye world</h1>
    </div>
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

  console.log('getStaticProps Metod')
  // console.log("----------------------------Server----------------------------");
  // console.log("SERVER", data);

  return {
    props: {
      services: data,
    },
  };
};

