import AnimationControls from '@/components/tom-is-loading/AnimationControls';
import BasicsOfMotion from '@/components/tom-is-loading/BasicsOfMotion';
import Gestures from '@/components/tom-is-loading/Gestures';
import ViewBasedAnimations from '@/components/tom-is-loading/ViewBasedAnimations';

const page = () => {
  return (
    <div className="h-[200vh] min-h-screen grid content-center gap-5">
      <BasicsOfMotion />
      <Gestures/>
      <AnimationControls />
      <ViewBasedAnimations />
    </div>
  );
};

export default page;
