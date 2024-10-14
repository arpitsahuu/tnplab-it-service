import React from 'react'
import Contact from "@/components/routers/Contact"
import Faq from "@/components/faq/Faq"
import MasterTechnologes from "@/components/routers/MasterTechnologes"
import Why from '@/components/about/Why'

const page = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      <Why />
      <MasterTechnologes />
      <div className="mt-14">
        <Faq />
      </div>
      <Contact />

    </div>
  )
}

export default page

