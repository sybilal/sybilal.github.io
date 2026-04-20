import { useLottie } from "lottie-react";
import { Suspense } from "react";
import Loading from "../../containers/Loading";

const DisplayLottie = ({ animationData }: { animationData: any }) => {

  const options = {
    animationData,
    loop: true
  };

  const { View } = useLottie(options);


  return (
    <Suspense fallback={<Loading />}>
      {View}
    </Suspense>
  );
};

export default DisplayLottie;
