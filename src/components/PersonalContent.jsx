import { h } from "preact";

export default function PersonalContent({ personal }) {
  return (
    <main className="min-w-[300px] max-w-[700px]">
      <div className="flex flex-row gap-[50px]">
        <div className="w-[1px] min-w-[1px] max-w-[1px] bg-[#CCCCCC]" />
        <div className="flex flex-col gap-[30px]">
          <h1 className="personal-title">{personal.title}</h1>
          <div id="subtitles" className="flex flex-col personal-subtitle">
            <p>{personal.subtitle}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
