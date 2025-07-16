import { personal } from '../data/PersonalContent';

export default function PersonalContent() {
  const contentBorderStyle = {
    display: 'flex',
    borderLeft: '2px solid rgba(0, 0, 0, 0.5)',
    paddingLeft: '50px',
    gap: '50px',
  };

  return (
    <section className="min-w-[300px] max-w-[700px] custom-size">
      <div
        className="content-border flex flex-col gap-y-[50px]" id="main-content-personal" style={contentBorderStyle}>
        <h1>{personal.title}</h1>
        <div id="subtitles" className="flex flex-col">
          <p>{personal.subtitle}</p>
        </div>
      </div>
    </section>
  );
}
