import { personal } from '../data/PersonalContent';

export default function PersonalContent() {

  return (
    <main className="min-w-[300px] max-w-[700px]">
      <div className="flex flex-row gap-[50px]">
        {/* Borde  */}
        <div className="w-[1px] bg-[#CCCCCC]" />

        {/* Contenido */}
        <div className="flex flex-col gap-[50px]">
          <h1 className='personal-title'>{personal.title}</h1>
          <div id="subtitles" className="flex flex-col personal-subtitle">
            <p>{personal.subtitle}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
