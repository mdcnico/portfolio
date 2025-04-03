<script lang="ts">
    import { fade, fly } from 'svelte/transition';

    let currentIndex = 0;
    let direction: 'left' | 'right' = 'right'; // Track scroll direction
    let isAnimating = false; // Prevent rapid triggering of animations

    const projects = [
        { title: "Morpion", image: "/images/projet1.jpg", link: "/premannee/projects/morpion" },
        { title: "Jeu de Nim", image: "/images/projet2.jpg", link: "/premannee/projects/jeu-de-nim" },
        { title: "Horloge", image: "/images/projet3.jpg", link: "/premannee/projects/horloge" },
        { title: "Projet 4", image: "/images/projet4.jpg", link: "/premannee/projects/projet-4" },
        { title: "Projet 5", image: "/images/projet5.jpg", link: "/premannee/projects/projet-5" },
        { title: "Projet 6", image: "/images/projet6.jpg", link: "/premannee/projects/projet-6" }
    ];

    function nextProject() {
        if (isAnimating) return;
        direction = 'right';
        currentIndex = (currentIndex + 1) % projects.length;
        triggerAnimation();
    }

    function previousProject() {
        if (isAnimating) return;
        direction = 'left';
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        triggerAnimation();
    }

    function triggerAnimation() {
        isAnimating = true;
        setTimeout(() => (isAnimating = false), 300); // Prevent rapid triggering for 300ms
    }
</script>

<h1 class="text-center text-4xl font-extrabold mb-8 text-gray-800">Première année</h1>
<p class="text-center text-lg mb-12 text-gray-600">Voici quelques projets réalisés durant ma première année d'études.</p>

<div class="relative flex items-center justify-center">
    <!-- Left Arrow -->
    <button
        class="absolute left-4 z-10 p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition shadow-lg"
        on:click={previousProject}
        aria-label="Previous Project"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
    </button>

    <!-- Project Card Container -->
    <div class="relative w-[90%] max-w-4xl h-[60vh] overflow-hidden">
        {#key currentIndex}
            <a
                href={projects[currentIndex].link}
                class="absolute inset-0 block bg-white rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-250 group"
                in:fly={{ x: direction === 'right' ? 300 : -300, duration: 250 }}
                out:fly={{ x: direction === 'right' ? -300 : 300, duration: 250 }}
            >
                <!-- Image with Grey Veil -->
                <div class="relative w-full h-full">
                    <img src={projects[currentIndex].image} alt={projects[currentIndex].title} class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <!-- Title in the Bottom-Left -->
                <div class="absolute bottom-4 left-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <h2 class="text-xl font-semibold text-black">{projects[currentIndex].title}</h2>
                </div>
                <!-- Title in the Middle -->
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h2 class="text-3xl font-bold text-white">{projects[currentIndex].title}</h2>
                </div>
            </a>
        {/key}
    </div>

    <!-- Right Arrow -->
    <button
        class="absolute right-4 z-10 p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition shadow-lg"
        on:click={nextProject}
        aria-label="Next Project"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
    </button>
</div>
