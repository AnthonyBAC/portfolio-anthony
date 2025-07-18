import { h } from 'preact';

// Función recursiva para renderizar nodos Rich Text
function renderNode(node) {
    switch (node.type) {
        case "paragraph":
            return (
                <p>
                    {node.children.map((child, i) => (
                        <span key={i}>{child.text}</span>
                    ))}
                </p>
            );
        case "list":
            const ListTag = node.format === "unordered" ? "ul" : "ol";
            return (
                <ListTag>
                    {node.children.map((child, i) => (
                        <span key={i}>{renderNode(child)}</span>
                    ))}
                </ListTag>
            );
        case "list-item":
            return (
                <li>
                    {node.children.map((child, i) => (
                        <span key={i}>{renderNode(child)}</span>
                    ))}
                </li>
            );
        case "text":
            return node.text;
        default:
            return null;
    }
}

export default function ProyectsContent({ personal, selected, setSelected }) {
    const proyectContent = {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "start",
        alignItems: "start",
    };

    const formattedDate = selected
        ? (() => {
            const [year, month, day] = selected.date.split("-");
            const dateLocal = new Date(year, month - 1, day);
            return dateLocal.toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            });
        })()
        : "";

    return (
        <main className="min-w-[300px] max-w-[700px] lg:w-[700px]">
            <div className="flex gap-[50px]">
                <div className="w-[1px] min-w-[1px] max-w-[1px] bg-[#CCCCCC]" />

                {!selected ? (
                    <div className="flex flex-col w-full ">
                        <h1 className="color-text pb-[30px]">projects / experiences / learning</h1>
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
                    <div className="proyect-content-style" style={proyectContent}>
                        <h1 className="color-text">{selected.name}</h1>
                        <p className="color-text">{formattedDate}</p>

                        {/* Descripción renderizada recursivamente */}
                        <div className="flex flex-col gap-2 color-text">
                            {selected.desc.map((node, idx) => (
                                <div key={idx}>{renderNode(node)}</div>
                            ))}
                        </div>

                        {/* Imágenes del proyecto */}
                        <div className="flex flex-wrap gap-4 mt-4">
                            {[selected.img1, selected.img2, selected.img3]
                                .filter(Boolean) // filtra vacíos
                                .map((src, idx) => (
                                    <img
                                        key={idx}
                                        src={src}
                                        alt={`${selected.name} image ${idx + 1}`}
                                        className="w-full h-full rounded shadow"
                                    />
                                ))}
                        </div>

                        {/* Link si existe */}
                        {selected.link && (
                            <a
                                href={selected.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                                Preview Page
                            </a>
                        )}
                    </div>
                )}
            </div>
        </main>
    );
}
