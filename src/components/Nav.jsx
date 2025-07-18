export default function Nav({ links, activeKey, onChange }) {

    return (
        <nav className="flex justify-end basis-auto flex-shrink-0 flex-grow-0 nav-style">
            <ul className="list-none m-0 p-0 flex flex-col items-end gap-2.5">
                {links.map((link) => (
                    <li key={link.key}>
                        <button
                            className='nav-link-style'
                            type="button"
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
