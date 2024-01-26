import Link from "next/link";
import CardHolder from "./components/CardHolder";

export default function Home() {
  return (
    <>
      <main className="grid h-screen grid-rows-7 place-items-center bg-black ">
        <h1 className="row-start-1 row-end-2 text-2xl font-bold">
          Flashcards Project!
        </h1>
        <CardHolder />
        <h2 className="row-start-7 row-end-8 mx-auto place-self-start">
          Hover the card for answer!
        </h2>
      </main>
      <Link
        href={"/edit"}
        className="fixed bottom-6 right-6 aspect-square w-16 rounded-full bg-violet-700 pb-2 text-center text-6xl"
      >
        +
      </Link>
    </>
  );
}
