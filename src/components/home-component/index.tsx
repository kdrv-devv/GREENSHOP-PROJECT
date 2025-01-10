import Navbar from "../navbar";
import Hero from "./hero";

const HomeComponent = () => {
  return (
    <div className="w-[90%] m-auto">
      <Navbar />
      <Hero/>
    </div>
  );
};

export default HomeComponent;
