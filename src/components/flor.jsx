import Lottie from "lottie-react";
import treeAnimation from './ecbab72e-1185-11ee-88e6-1b7d27a0c42e.json';

function Tree() {
  return (
    <Lottie 
      animationData={treeAnimation} 
      loop={true} 
      autoplay={true}
      style={{ width: 500, height: 500 }}
    />
  );
}

export default Tree;