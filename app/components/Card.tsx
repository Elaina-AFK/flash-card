import { CardData } from "../interfaces/data";

export default function Card({ id, name, description }: CardData) {
  return (
    <div className="flip-card aspect-video h-full min-h-96">
      <div className="flip-card-inner snap-center rounded-2xl">
        <div className="flip-card-front grid place-items-center rounded-2xl bg-slate-700">
          <h2>{name}</h2>
        </div>
        <div className="flip-card-back rounded-2xl bg-red-400 py-1">
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
}
