export const load = async () => {
    const projects = [
        { title: "Project A", image: "/images/secannee/project_a.jpg", link: "/secannee/projects/project-a", description: "Description for Project A", content: "Detailed content about Project A goes here." },
        { title: "Project B", image: "/images/secannee/project_b.jpg", link: "/secannee/projects/project-b", description: "Description for Project B", content: "Detailed content about Project B goes here." },
        { title: "Project C", image: "/images/secannee/project_c.jpg", link: "/secannee/projects/project-c", description: "Description for Project C", content: "Detailed content about Project C goes here." }
    ];

    return { projects };
};
