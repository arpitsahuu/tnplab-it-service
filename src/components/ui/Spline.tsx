"use client"
import React from 'react'
import Spline from '@splinetool/react-spline/next';

const SplineComponent = () => {
    return (
        <Spline className='w-[750px] h-[700px] lg:scale-[0.80] xl:scale-[1.40] md:scale-[0.70] sm:scale-[0.35] scale-[0.60]  '
            scene="https://prod.spline.design/AytvQmZ1V7RFdW2j/scene.splinecode"
        />
    )
}

export default SplineComponent