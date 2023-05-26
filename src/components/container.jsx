import Arrow from "./arrow";
import Inputs from "./inputs";
import Results from "./results";

const Container = () => {
  return (
    <div className="bg-white">
      <Inputs />
      <Arrow />
      <Results />
    </div>
  );
};

export default Container;
