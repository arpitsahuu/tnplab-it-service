import Hero from '@/components/routers/Hero';
import MasterTechnologes from '@/components/routers/MasterTechnologes';
import CustomerOnboarding from '@/components/routers/Onbord';
import { Industrys } from '@/components/about/Industrys';
import ServicesSemi from '@/components/routers/ServiceSemi';
import Impact from '@/components/routers/Impact';

export default function Home() {

  return (
    <>
      <Hero />
      <div className='mt-14'>
        <ServicesSemi />
      </div>
      <MasterTechnologes />
      <CustomerOnboarding />
      <Impact />



      <Industrys />

      {/* <Statistics /> */}

    </>
  );
}
