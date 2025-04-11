<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { page } from '$app/stores';
    

    let projects = [];
    $: projects = $page.data.projects;

    let currentIndex = 0;
    let direction: 'left' | 'right' = 'right';
    let isAnimating = false;

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
        setTimeout(() => (isAnimating = false), 300);
    }
</script>

<h1 class="text-center text-4xl mt-8 font-extrabold mb-8 text-gray-100">Deuxième année</h1>
<p class="text-center text-lg mb-12 text-gray-300">Voici quelques projets réalisés durant ma deuxième année d'études.</p>

<div class="relative flex items-center justify-center">
    <!-- Left Arrow -->
    <button
        class="absolute left-4 z-10 p-3 bg-gray-800 text-gray-100 rounded-full hover:bg-gray-700 transition shadow-lg"
        on:click={previousProject}
        aria-label="Previous Project"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
    </button>

    <!-- Project Card Container -->
    <div class="relative w-[90%] max-w-4xl h-[60vh] overflow-hidden bg-gray-800 rounded-xl">
        {#key currentIndex}
            <a
                href={projects[currentIndex].link}
                class="absolute inset-0 block bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-250 group"
                in:fly={{ x: direction === 'right' ? 300 : -300, duration: 250 }}
                out:fly={{ x: direction === 'right' ? -300 : 300, duration: 250 }}
            >
                <!-- Image with Grey Veil -->
                <div class="relative w-full h-full">
                    <img 
                        src={projects[currentIndex].image} 
                        alt={projects[currentIndex].title} 
                        class="w-full h-full object-cover" 
                        style="object-fit: cover; width: 100%; height: 100%;"
                    >
                    <div class="absolute inset-0 bg-gray-700 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <!-- Title in the Bottom -->
                <div class="absolute bottom-0 left-0 bg-gray-900 rounded-tr-lg w-full opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <h2 class="text-xl font-semibold text-white px-4 py-2">{projects[currentIndex].title}</h2>
                </div>
                <!-- Title in the Middle -->
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h2 class="text-3xl font-bold text-gray-100">{projects[currentIndex].title}</h2>
                </div>
            </a>
        {/key}
    </div>

    <!-- Right Arrow -->
    <button
        class="absolute right-4 z-10 p-3 bg-gray-800 text-gray-100 rounded-full hover:bg-gray-700 transition shadow-lg"
        on:click={nextProject}
        aria-label="Next Project"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
    </button>
</div>
