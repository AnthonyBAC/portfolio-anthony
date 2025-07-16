import { useState } from "preact/hooks";
import Nav from "./Nav.jsx";
import PersonalContent from "./PersonalContent.jsx";
import ProyectsContent from "./ProyectsContent.jsx";

import { nav } from "../data/Nav";
import { personal } from "../data/PersonalContent";
import { proyects } from "../data/ProyectsContent";


export default function ContentSwitcher() {
    const [activeKey, setActiveKey] = useState("about");

    const renderContent = () => {
        switch (activeKey) {
            case "about":
                return <PersonalContent personal={personal} />;

            case "projects":
                return <ProyectsContent personal={proyects} />

            default:
                return null;
        }
    };

    return (
        <div class='flex flex-row gap-[50px]'>
            <Nav links={nav.links} activeKey={activeKey} onChange={setActiveKey} />
            <main>{renderContent()}</main>
        </div>
    );
}
