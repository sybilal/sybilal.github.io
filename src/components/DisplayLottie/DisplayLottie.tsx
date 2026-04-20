import Lottie from "lottie-react";
import { Suspense } from "react";
import Loading from "../../containers/Loading";

const DisplayLottie = ({ animationData }: { animationData: any }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData
  };

  return (
    <Suspense fallback={<Loading />}>
      <Lottie
        animationData={defaultOptions.animationData}
        loop={defaultOptions.loop}
      />
    </Suspense>
  );
};

export default DisplayLottie;
