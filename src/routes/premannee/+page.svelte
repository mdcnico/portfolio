<script lang="ts">
    // No additional logic is needed for this page.
</script>

<h1 class="text-center text-4xl font-extrabold mb-8 mt-8 text-gray-100">Première année</h1>
<p class="text-center text-lg mb-12 text-gray-300">Explorez les différentes sections de ma première année d'études.</p>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
    <!-- Projects Card -->
    <a
        href="/premannee/projects"
        class="block bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-250 group"
    >
        <div class="relative w-full h-64">
            <img src="/images/premannee/projects.gif" alt="Projects" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gray-700 bg-opacity-50 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        </div>
        <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-100 group-hover:text-gray-400 transition-colors duration-300">Projets</h2>
            <p class="text-gray-400 mt-2">Découvrez les projets réalisés durant ma première année.</p>
        </div>
    </a>

    <!-- Competences Card -->
    <a
        href="/premannee/competences"
        class="block bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-250 group"
    >
        <div class="relative w-full h-64">
            <img src="/images/premannee/competences.jpg" alt="Competences" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gray-700 bg-opacity-50 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        </div>
        <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-100 group-hover:text-gray-400 transition-colors duration-300">Compétences</h2>
            <p class="text-gray-400 mt-2">Découvrez les compétences acquises durant ma première année.</p>
        </div>
    </a>
</div>