<script>
    import { base } from '$app/paths';
</script>

<main class="max-w-4xl mx-auto p-6 text-gray-200">
    <h1 class="text-4xl font-extrabold text-center mt-8 text-gray-100">
        Bienvenue sur mon Portfolio
    </h1>
    <div class="space-y-8 max-w-4xl mx-auto mt-12">
        <a
            href="https://github.com/mdcnico"
            class="block bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-250 group flex flex-row items-center justify-between"
            target="_blank"
        >
            <div class="relative w-24 h-24 flex-shrink-0 ml-2">
                <img src="/images/github.png" alt="Projects" class="w-full h-full object-cover rounded-full">
                <div class="absolute inset-0 bg-gray-700 bg-opacity-50 opacity-0 transition-opacity duration-300 rounded-full"></div>
            </div>
            <div class="p-6 flex-1 text-right">
                <h2 class="text-2xl font-bold text-gray-100 group-hover:text-gray-400 transition-colors duration-300">GitHub</h2>
                <p class="text-gray-400 mt-2">Accédez à mon GitHub et à l'ensemble de mes réalisations.</p>
            </div>
        </a>
    
        <a
            href="{base}/presentation"
            class="block bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-250 group flex flex-row-reverse items-center"
        >
            <div class="relative w-24 h-24 flex-shrink-0 mr-2">
                <img src="/images/presentation.jpg" alt="Competences" class="w-full h-full object-cover rounded-full">
                <div class="absolute inset-0 bg-gray-700 bg-opacity-50 opacity-0 transition-opacity duration-300 rounded-full"></div>
            </div>
            <div class="p-6 flex-1">
                <h2 class="text-2xl font-bold text-gray-100 group-hover:text-gray-400 transition-colors duration-300">Présentation</h2>
                <p class="text-gray-400 mt-2">Qui suis-je et que fais-je.</p>
            </div>
        </a>
    </div>
</main>
