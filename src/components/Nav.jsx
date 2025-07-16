export default function Nav({ links, activeKey, onChange }) {
    return (
        <nav className="min-w-auto max-w-auto flex justify-end">
            <ul className="list-none m-0 p-0 flex flex-col items-end gap-2.5">
                {links.map((link) => (
                    <li key={link.key}>
                        <button
                            type="button"
                            className={`text-blue-600 hover:underline ${activeKey === link.key ? "font-bold underline" : ""
                                }`}
                            onClick={() => onChange(link.key)}
                        >
                            {link.name}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
