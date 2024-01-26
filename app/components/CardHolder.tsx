"use client";
import { useRef } from "react";
import Card from "./Card";

const dummy = [
  {
    id: 1,
    name: "Product A",
    description: "A high-quality product with advanced features.",
  },
  {
    id: 2,
    name: "Service X",
    description: "An exceptional service that caters to your specific needs.",
  },
  {
    id: 3,
    name: "Item B",
    description: "A versatile item suitable for various applications.",
  },
  {
    id: 4,
    name: "Solution Y",
    description: "A comprehensive solution addressing complex problems.",
  },
  {
    id: 5,
    name: "Gadget C",
    description: "A trendy gadget with cutting-edge technology.",
  },
  {
    id: 6,
    name: "Service Z",
    description:
      "A reliable service known for its efficiency and effectiveness.",
  },
  {
    id: 7,
    name: "Accessory D",
    description:
      "An essential accessory that complements your devices perfectly.",
  },
  {
    id: 8,
    name: "Software P",
    description: "Powerful software designed to streamline your workflow.",
  },
  {
    id: 9,
    name: "App Q",
    description:
      "An intuitive app that enhances user experience with its user-friendly interface.",
  },
  {
    id: 10,
    name: "Tool E",
    description:
      "A versatile tool suitable for both amateurs and professionals.",
  },
];

export default function CardHolder() {
  const holderRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    holderRef.current?.scrollTo({
      left: holderRef.current.scrollLeft - window.innerWidth,
      behavior: "smooth",
    });
  };
  const scrollPrev = () => {
    holderRef.current?.scrollTo({
      left: holderRef.current.scrollLeft + window.innerWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="row-start-2 row-end-7 w-screen">
      <button
        className="absolute left-8 top-1/2 z-10 rounded-full bg-gray-800 text-6xl"
        onClick={scrollNext}
      >
        {"<-"}
      </button>
      <button
        className="absolute right-8 top-1/2 z-10 rounded-full bg-gray-800 text-6xl"
        onClick={scrollPrev}
      >
        {"->"}
      </button>
      <div
        className="flex h-full w-full snap-x snap-mandatory gap-[70%] overflow-hidden px-[30%]"
        ref={holderRef}
      >
        {dummy.map((each) => (
          <Card
            key={each.id}
            id={each.id}
            name={each.name}
            description={each.description}
          />
        ))}
        fd
      </div>
    </div>
  );
}
