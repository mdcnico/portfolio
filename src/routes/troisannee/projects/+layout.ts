export const load = async () => {
    const projects = [
        { title: "Project X", image: "/images/troisannee/project_x.jpg", link: "/troisannee/projects/project-x", description: "Description for Project X", content: "Detailed content about Project X goes here." },
        { title: "Project Y", image: "/images/troisannee/project_y.jpg", link: "/troisannee/projects/project-y", description: "Description for Project Y", content: "Detailed content about Project Y goes here." },
        { title: "Project Z", image: "/images/troisannee/project_z.jpg", link: "/troisannee/projects/project-z", description: "Description for Project Z", content: "Detailed content about Project Z goes here." }
    ];

    return { projects };
};
