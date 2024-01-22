<script>
    import { page } from '$app/stores';
</script>

<main class="mw-prose p-4 prose mx-auto">
    <h1 class="mb-0">Sorry, we hit an error</h1>

    <p>{$page.status}: {$page.error?.message}</p>

    <!-- TODO:
    <ul>
        <li>Describe research interests (up to this point)</li>
        <li>Describe research interests (next up)</li>
        <li>Describe career interests (broadly)</li>

        <li>Include some sort of graphics on about page to make it more interesting</li>
   </ul> -->
</main>