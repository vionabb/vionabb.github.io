<script>
    import { page } from '$app/stores';
</script>

<main class="mw-prose p-4 prose mx-auto">
    <h1 class="font-slabserif">Sorry, we have a problem</h1>

    <p>We ran into a  
        {#if ($page.status ?? 200) >= 400} 
            <code>HTTP 404</code>
        {/if}
        error 
        while loading this page{#if $page.error?.message}: <code>&quot;{$page.error.message}&quot;</code>{/if}
    </p>

    <!-- TODO:
    <ul>
        <li>Describe research interests (up to this point)</li>
        <li>Describe research interests (next up)</li>
        <li>Describe career interests (broadly)</li>

        <li>Include some sort of graphics on about page to make it more interesting</li>
   </ul> -->
</main>