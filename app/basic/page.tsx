import BasicsOfMotion from '@/components/tom-is-loading/BasicsOfMotion';
import Gestures from '@/components/tom-is-loading/Gestures';

const page = () => {
  return (
    <div className="h-screen grid content-center gap-5">
      <BasicsOfMotion />
      <Gestures/>
    </div>
  );
};

export default page;
