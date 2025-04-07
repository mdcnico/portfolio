export const load = async () => {
    const projects = [
        { title: "Project A", image: "/images/projectA.jpg", description: "Description for Project A", content: "Detailed content about Project A goes here." },
        { title: "Project B", image: "/images/projectB.jpg", description: "Description for Project B", content: "Detailed content about Project B goes here." },
        { title: "Project C", image: "/images/projectC.jpg", description: "Description for Project C", content: "Detailed content about Project C goes here." },
        { title: "Project D", image: "/images/projectD.jpg", description: "Description for Project D", content: "Detailed content about Project D goes here." },
        { title: "Project E", image: "/images/projectE.jpg", description: "Description for Project E", content: "Detailed content about Project E goes here." },
        { title: "Project F", image: "/images/projectF.jpg", description: "Description for Project F", content: "Detailed content about Project F goes here." }
    ];

    return { projects };
};
