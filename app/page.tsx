import CardHolder from "./components/CardHolder";

export default function Home() {
  return (
    <main className="grid h-screen grid-rows-7 place-items-center bg-black ">
      <h1 className="row-start-1 row-end-2 text-2xl font-bold">
        Flashcards Project!
      </h1>
      <CardHolder />
      <h2 className="row-start-7 row-end-8 mx-auto place-self-start">
        Hover the card for answer!
      </h2>
    </main>
  );
}
