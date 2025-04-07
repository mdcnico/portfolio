import type { PageServerLoad } from './$types';

const projects = [
    { title: "Project A", image: "/images/projectA.jpg", description: "Description for Project A", content: "Detailed content about Project A goes here." },
    { title: "Project B", image: "/images/projectB.jpg" },
    { title: "Project C", image: "/images/projectC.jpg" },
    { title: "Project D", image: "/images/projectD.jpg" },
    { title: "Project E", image: "/images/projectE.jpg" },
    { title: "Project F", image: "/images/projectF.jpg" }
];

export const load: PageServerLoad = ({ params }) => {
    const project = projects.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === params.name);
    if (!project) {
        throw new Error('Project not found');
    }
    return project;
};
