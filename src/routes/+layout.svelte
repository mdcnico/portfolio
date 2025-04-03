<header class="bg-gray-800 text-white p-4">
    <nav>
        <ul class="flex space-x-4">
            <li><a href="/" class="hover:text-gray-300">Accueil</a></li>
            <li><a href="/premannee" class="hover:text-gray-300">Première Année</a></li>
            <li><a href="/secannee" class="hover:text-gray-300">Seconde Année</a></li>
            <li><a href="/troisannee" class="hover:text-gray-300">Troisième Année</a></li>
        </ul>
    </nav>
</header>

<script>
    let { children } = $props();
    import "../app.css";
  </script>
  {@render children()}
