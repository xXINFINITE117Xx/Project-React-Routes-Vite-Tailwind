import home from "../../../assets/Images/Home.png";

export const Home = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="mt-4 text-4xl text-sky-600">I'm Home</h2>
      <img src={home} alt="Home" />
    </div>
  );
};
