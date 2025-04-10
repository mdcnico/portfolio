<script lang="ts">
    import { page } from '$app/stores';

    $: name = $page.params.name;
</script>

<div class="flex flex-wrap md:flex-nowrap p-4">
    <div class="w-full md:w-1/3 flex flex-col items-center mb-4">
        <img src="/images/secannee/stage.jpg" alt="" 
             class="w-full h-auto object-cover rounded-lg mb-4 opacity-90 aspect-video" />
        <h1 class="text-4xl font-bold text-gray-100 mb-4 text-center">Stage de fin d'année</h1>
    </div>
    <div class="w-full md:w-2/3 p-4">
        <p class="text-gray-300 mb-4"></p>
        <div class="text-gray-200">Le stage de fin d'année fut l'occasion pour moi de découvrir ce qu'était le développement dans le cadre professionnel. J'ai eu la chance d'effectuer mon stage au Laboratoire Central de la Préfecture de Police de Paris en qualité de Développeur.<br><br> L'objectif de ce stage était de faire de la maintenance sur des outils déjà en place et d'y apporter des améliorations.<br><br> Pour cela, j'ai pu notamment pratiquer sur Joomla pour la première fois, afin de faire du HTML ainsi que du CSS. De plus, ce stage fut l'occasion de mettre en exergue mes compétences en JavaScript pour des retouches sur du code existant et des ajouts de fonctionnalités sur des pages.<br><br> Ce stage fut extrêmement enrichement tant en culture personnelle car le LCPP possède beaucoup de branches d'activités qu'en culture professionnelle car bien que l'on fasse des simulations du monde de l'entreprise pendant les projets, rien de mieux que du concret.</div>
    </div>
</div>
