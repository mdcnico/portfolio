<script lang="ts">
    import { page } from '$app/stores';

    // Access the current route's name parameter
    $: name = $page.params.name;
</script>

<div class="flex flex-wrap md:flex-nowrap p-4">
    <div class="w-full flex flex-col items-center mb-4 md:w-1/2">
        <div class="flex space-x-4 w-full">
            <img src="/images/troisannee/javascript.png" alt=""
                 class="w-1/3 h-auto object-cover rounded-lg opacity-90" />
            <img src="/images/troisannee/svn.jpg" alt=""
                 class="w-1/3 h-auto object-cover rounded-lg opacity-90" />
            <img src="/images/troisannee/php.png" alt=""
                 class="w-1/3 h-auto object-cover rounded-lg opacity-90" />
        </div>
        <h1 class="text-4xl font-bold text-gray-100 mt-2 text-center">Alternance au LCPP</h1>
    </div>
    <div class="w-full md:w-1/2 pl-8">
        <p class="text-gray-300 mb-4">Le LCPP m'a offert, à l'issue de mon stage, l'opportunité de continuer avec eux pour la troisième année de BUT en tant qu'alternant afin que je puisses aborder plus de sujets mais aussi manipuler plus et prendre un rôle plus défini qu'avant. <br><br> Étant donné que je n'étais plus simplement stagiaire, j'ai pris la place d'un développeur à temps plein et ce encore plus lorsque nous sommes passé au format stage, car ma présence n'était plus effective simplement les lundis et mardis mais tous les jorus de la semaine<br><br> Cet apprentissage fut l'opportunité d'approfondir mes compétences dans les langages que je maitrisais déjà, JavaScript, PHP, etc... mais aussi et surtout de développer des compétences annexes pour lesquelles je n'aurais pas forcément porté d'intérêt, la virtualisation, l'installation de plateformes, la gestion de serveurs.<br><br>Également, l'apprentissage fut l'occasion de développer et de découvrir le travail de groupe avec un développeur sénior expérimenté en la personne de mon tuteur. Son expérience m'a apporté une plus grande rigueur en matière de code car en tant que junior il arrive d'être négligeant face aux erreurs, ou de déployer des choses qui peuvent possiblement résulter en des soucis par la suite.</p>
    </div>
</div>
