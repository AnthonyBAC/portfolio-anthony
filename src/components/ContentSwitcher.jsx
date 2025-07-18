import { useState, useEffect } from "preact/hooks";
import Nav from "./Nav.jsx";
import PersonalContent from "./PersonalContent.jsx";
import ProyectsContent from "./ProyectsContent.jsx";
import Contact from "./Contact.jsx";

import { nav } from "../data/Nav";
import { info } from "../data/Contact";

import { h } from "preact";

export default function ContentSwitcher() {
    const [activeKey, setActiveKey] = useState("about");
    const [selectedProject, setSelectedProject] = useState(null);
    const [personalData, setPersonalData] = useState(null);
    const [projectsData, setProjectsData] = useState([]); // 👈 nuevo estado
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL;

    useEffect(() => {
        Promise.all([
            fetch(`${STRAPI_URL}/api/personals`).then((res) => res.json()),
            fetch(`${STRAPI_URL}/api/proyects`).then((res) => res.json()),
            fetch(`${STRAPI_URL}/api/proyects?populate=img1,img2,img3`).then((res) => res.json()),
        ])
            .then(([personalRes, projectsRes]) => {
                const personalItem = personalRes.data[0];
                const projectItems = projectsRes.data;

                if (!personalItem) throw new Error("No personal data found");

                setPersonalData({
                    title: personalItem.title || "",
                    subtitle: personalItem.subtitle || "",
                });

                const extractImageUrl = (markdown) => {
                    if (!markdown) return "";
                    const match = markdown.match(/!\[.*?\]\((.*?)\)/);
                    return match ? match[1] : "";
                };

                const mappedProjects = projectItems.map((p) => ({
                    id: p.id,
                    name: p.nameProyect || "",
                    date: p.dateProyect || "",
                    desc: p.descProyect || [],
                    img1: extractImageUrl(p.images1),
                    img2: extractImageUrl(p.images2),
                    img3: extractImageUrl(p.images3),
                    link: p.linkProyect || "",
                }));



                setProjectsData(mappedProjects);
            })
            .catch((e) => {
                setError(e.message);
                console.error(e);
            })
            .finally(() => setLoading(false));
    }, []);

    const containerStyle = {
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "50px",
        height: '100%',

    };

    const handleNavChange = (key) => {
        setActiveKey(key);
        if (key === "projects") setSelectedProject(null);
    };

    const renderContent = () => {
        if (loading) return <p>Cargando...</p>;
        if (error) return <p>Error: {error}</p>;

        switch (activeKey) {
            case "about":
                return personalData ? (
                    <PersonalContent personal={personalData} />
                ) : (
                    <p>No hay datos de personal</p>
                );
            case "projects":
                return (
                    <ProyectsContent
                        personal={projectsData}
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
            <div style={{ flexShrink: 0 }}>
                <Nav links={nav.links} activeKey={activeKey} onChange={handleNavChange} />
            </div>
            <main className="main-content-style">
                {renderContent()}
            </main>
        </div>
    );
}
