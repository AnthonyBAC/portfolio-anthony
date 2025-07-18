import { personal } from '../data/PersonalContent';

export default function PersonalContent() {

  return (
    <main className="min-w-[300px] max-w-[700px]">
      <div className="flex flex-row gap-[50px]">
        {/* Borde  */}
        <div className="w-[2px] bg-black/50" />

        {/* Contenido */}
        <div className="flex flex-col gap-[50px]">
          <h1>{personal.title}</h1>
          <div id="subtitles" className="flex flex-col">
            <p>{personal.subtitle}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
