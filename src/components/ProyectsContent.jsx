export default function ProyectsContent({ personal, selected, setSelected }) {
    const proyectContent = {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "start",
        alignItems: "start",
    };

    return (
        <main className="min-w-[300px] max-w-[700px] lg:w-[700px]">
            <div className="flex gap-[50px]">
                {/* Borde */}
                <div className="w-[1px] bg-[#CCCCCC]" />

                {/* Contenido */}
                {!selected ? (
                    <div className="flex flex-col w-full ">
                        {personal.map((proyect) => (
                            <button
                                key={proyect.id}
                                className="button-proyects flex w-full justify-between "
                                onClick={() => setSelected(proyect)}
                            >
                                <h1>{proyect.name}</h1>
                                <p>{proyect.date}</p>
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className='proyect-content-style' style={proyectContent}>
                        <h1>{selected.name}</h1>
                        <p>{selected.date}</p>
                        <p>{selected.description}</p>
                    </div>
                )}
            </div>
        </main>
    );
}
