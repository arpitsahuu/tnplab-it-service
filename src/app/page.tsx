import Hero from '@/components/routers/Hero';
import MasterTechnologes from '@/components/routers/MasterTechnologes';
import CustomerOnboarding from '@/components/routers/Onbord';
import { Industrys } from '@/components/about/Industrys';
import ServicesSemi from '@/components/routers/ServiceSemi';
import Impact from '@/components/routers/Impact';
import Spline from '@splinetool/react-spline/next';

export default function Home() {

  return (
    <>
      <Hero />
      <ServicesSemi />
      <MasterTechnologes />
      <CustomerOnboarding />
      <Impact />



      <Industrys />

      <Spline className='w-[750px] h-[700px] lg:scale-[0.80] xl:scale-[0.95] md:scale-[0.70] sm:scale-[0.35] scale-[0.30]  '
        scene="https://prod.spline.design/AytvQmZ1V7RFdW2j/scene.splinecode"
      />

      {/* <Statistics /> */}

    </>
  );
}
