import { proyects } from '../data/ProyectsContent';

export default function ProyectsContent() {
    const contentBorderStyle = {
        display: 'flex',
        borderLeft: '2px solid rgba(0, 0, 0, 0.5)',
        paddingLeft: '50px',
        gap: '50px',
    };

    return (
        <section className="min-w-[300px] max-w-[700px] custom-size">
            <div
                className="content-border flex flex-col gap-y-[50px]" id="main-content-proyects" style={contentBorderStyle}>
                <h1>{proyects.title}</h1>
                <div id="subtitles" className="flex flex-col">
                    <p>{proyects.subtitle}</p>
                </div>
            </div>
        </section>
    );
}
