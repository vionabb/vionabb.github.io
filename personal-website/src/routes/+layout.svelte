<script lang="ts">
import { page } from '$app/stores';
import '../app.css';

let drawerOpen = $state(false);

const routes: { 
    title: string, 
    href: string, 
    cssClass?: string,
    external?: boolean,
}[] = [
    {
        title: 'About Me',
        href: '/'
    },
    {
        title: 'Publications',
        href: '/publications'
    },
    {
        title: 'Resumé',
        href: '/resume-fall-2023.pdf',
        external: true,
    },
    
    // {
    //     title: 'About',
    //     href: '/about'
    // },
    // {
    //     title: 'Contact',
    //     href: '/contact'
    
    // }
]; 

let routesStates = $derived(
    routes.map(route => ({
        ...route,
        active: $page.url.pathname == route.href,
        
    }))
)
</script>


<div class="drawer lg:drawer-open">
    <input type="checkbox" class="drawer-toggle" id="drawer-toggle-checkbox" bind:checked={drawerOpen}>
    <div class="drawer-content">
        <nav class="navbar bg-base-100">
            <div class="narbar-start">
                <label for="drawer-toggle-checkbox" class="btn btn-ghost lg:hidden text-2xl" aria-label="Toggle Menu">
                    <!-- Using Google Material Icons: https://icon-sets.iconify.design/ic/   -->
                    <span class="icon-[ic--baseline-menu]"></span>
                </label>
            </div>
        </nav>
        <slot></slot>
    </div>
    <div class="drawer-side">
        <label class="drawer-overlay" for="drawer-toggle-checkbox" aria-label="Close menu"></label>
        <div class="bg-base-200 min-h-screen">            
            <ul class="menu">
                <li class="menu-title text-xl">Julien Blanchet</li>
                {#each routesStates as routeWithState}
                <li>
                    <a  href={routeWithState.href} 
                        class={routeWithState.cssClass ?? ''}

                        class:active={routeWithState.active}>
                      {routeWithState.title}
                      {#if routeWithState.external} 
                        <span class="icon-[ic--baseline-open-in-new]"></span>
                    {/if}
                    </a>
                </li>
                {/each}
            </ul>
        </div>
    </div>
</div>