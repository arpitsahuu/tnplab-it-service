import Hero from '@/components/routers/Hero';
import { Industrys } from '@/components/about/Industrys';
import Impact from '@/components/routers/Impact';
import dynamic from "next/dynamic";

const ServicesSemi = dynamic(
  () => import('@/components/routers/ServiceSemi'),
)
const MasterTechnologes = dynamic(
  () => import('@/components/routers/MasterTechnologes'),
)

const CustomerOnboarding = dynamic(
  () => import('@/components/routers/Onbord'),
)



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
