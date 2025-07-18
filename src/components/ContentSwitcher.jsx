import { useState } from "preact/hooks";
import Nav from "./Nav.jsx";
import PersonalContent from "./PersonalContent.jsx";
import ProyectsContent from "./ProyectsContent.jsx";
import Contact from "./Contact.jsx";

import { nav } from "../data/Nav";
import { personal } from "../data/PersonalContent";
import { proyects } from "../data/ProyectsContent";
import { info } from "../data/Contact";

import { h } from "preact";

export default function ContentSwitcher() {
    const [activeKey, setActiveKey] = useState("about");
    const [selectedProject, setSelectedProject] = useState(null);

    const containerStyle = {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "50px",
        border: "1px solid #CCCCCC",
        // borderRadius: "10px",
        height: "fit-content",
        padding: "50px",
        overflow: "hidden",
    };

    const handleNavChange = (key) => {
        setActiveKey(key);
        if (key === "projects") {
            setSelectedProject(null);
        }
    };

    const renderContent = () => {
        switch (activeKey) {
            case "about":
                return <PersonalContent personal={personal} />;
            case "projects":
                return (
                    <ProyectsContent
                        personal={proyects}
                        selected={selectedProject}
                        setSelected={setSelectedProject}
                    />
                );
            case "contact":
                return <Contact />;
            default:
                return null;
        }
    };

    return (
        <div style={containerStyle}>
            <Nav links={nav.links} activeKey={activeKey} onChange={handleNavChange} />
            <main className="transition-opacity duration-500 ease-in-out opacity-100">
                {renderContent()}
            </main>
        </div>
    );
}
