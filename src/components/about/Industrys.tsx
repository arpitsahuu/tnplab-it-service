"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "../ui/apple-cards-carousel";
import helth from "../../../images/helth.jpg"
import menufacturein from "../../../images/menufacturing.jpg"

export function Industrys() {
  const cards = data.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl font-bold text-gray-200 font-sans">
      Industries
      </h2>
      <p className="max-w-7xl pl-4 mx-auto text-lg md:text-xl  text-neutral-300 dark:text-neutral-200 font-sans mt-3">Industries We&apos;ve Transformed: At TNPLab, we bring innovative solutions to a wide range of sectors, 
      driving progress and delivering impactful results.</p>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
    {
      category: "Healthcare",
      title: "Revolutionizing Healthcare with Technology.",
      src: helth,
      content: <DummyContent />,
    },
    {
      category: "Finance",
      title: "Innovative FinTech Solutions for the Future.",
      src: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
    {
      category: "Retail",
      title: "Transforming the Retail Industry with Digital Solutions.",
      src: "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
    {
      category: "Education",
      title: "Empowering Education Through Innovative Technologies.",
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
    {
      category: "Manufacturing",
      title: "Smart Manufacturing Solutions for Industry 4.0.",
      src: menufacturein,
      content: <DummyContent />,
    },
    {
      category: "Real Estate",
      title: "Driving Digital Transformation in Real Estate.",
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
  ];
  
