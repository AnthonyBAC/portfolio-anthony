import { proyects } from '../data/ProyectsContent';

export default function ProyectsContent() {

    return (
        <main className="min-w-[300px] max-w-[700px]">
            <div className="flex flex-row gap-[50px]">
                {/* Borde separado */}
                <div className="w-[2px] bg-black/50" />

                {/* Contenido */}
                <div className="flex flex-col gap-[50px]">
                    <h1>{proyects.title}</h1>
                    <div id="subtitles" className="flex flex-col">
                        <p>{proyects.subtitle}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
