<script lang="ts">
import { page } from '$app/stores';
import { onMount } from 'svelte';
import '../app.css';
    import { browser } from '$app/environment';
    import { scale } from 'svelte/transition';

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

const themeOptions = ['julienlight', 'juliendark'] as const;
const lightTheme = 'julienlight';
const darkTheme = 'juliendark';
type themeOption = typeof themeOptions[number];

let drawerOpen = $state(false);
let theme = $state(null as null | themeOption);
let effectiveTheme = $derived(
    theme !== null && themeOptions.find(t => t === theme) !== undefined 
        ? theme : 
        (browserPrefersDark() ? darkTheme : lightTheme)
);

let routesStates = $derived(
    routes.map(route => ({
        ...route,
        active: $page.url.pathname == route.href,
        
    }))
)

onMount(() => {
    theme = localStorage.getItem('theme') as null | 'julienlight' | 'juliendark';
});

$effect(() => {
    if (theme !== null) {
        window.localStorage.setItem('theme', theme);
    } else {
        window.localStorage.removeItem('theme');
    }
})

function browserPrefersDark() {
    if (!browser) return false;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function setTheme(event: Event) {
    const target = event.target as HTMLInputElement;
    theme = target.value as null | 'julienlight' | 'juliendark';
}


</script>


<div class="drawer md:drawer-open">
    <input type="checkbox" class="drawer-toggle" id="drawer-toggle-checkbox" bind:checked={drawerOpen}>
    <div class="drawer-content">
        <nav class="navbar bg-base-100">
            <div class="navbar-start">
                <label for="drawer-toggle-checkbox" class="btn btn-ghost md:hidden text-2xl" aria-label="Toggle Menu">
                    <!-- Using Google Material Icons: https://icon-sets.iconify.design/ic/   -->
                    <span class="icon-[ic--baseline-menu]"></span>
                </label>
            </div>
            <div class="navbar-center"></div>
            <div class="navbar-end space-x-0">
                <a href="https://www.linkedin.com/in/julienbblanchet/" class="btn btn-ghost text-lg" aria-label="LinkedIn" title="LinkedIn">
                    <span class="icon-[fa6-brands--linkedin]"></span>
                </a>
                <a href="https://github.com/j55blanchet" class="btn btn-ghost text-lg" aria-label="GitHub" title="GitHub">
                    <span class="icon-[fa6-brands--github]"></span>
                </a>
                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" id="toggleTheme" class="btn btn-ghost" aria-label="Select Theme">
                        <label class="swap swap-rotate" for="toggleTheme" class:swap-active={effectiveTheme === "julienlight"}>
                            <div class="swap-on">
                                <svg class="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                            </div>
                            <div class="swap-off">
                                <svg transition:scale class="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                            </div>
                        </label>
                    </div>
                    <ul class="dropdown-content rounded-box shadow bg-base-200 p-2">
                        <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value={null} bind:group={theme}/></li>
                        <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Light" value="julienlight" bind:group={theme}/></li>
                        <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="juliendark" bind:group={theme}/></li>
                    </ul>
                </div>
            </div>
        </nav>
        <slot></slot>
    </div>
    <div class="drawer-side lg:w-80">
        <label class="drawer-overlay" for="drawer-toggle-checkbox" aria-label="Close menu"></label>
        <div class="bg-base-200 min-h-screen">            
            <ul class="menu">
                <li class="menu-title text-xl font-slabserif font-light">Julien Blanchet</li>
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
                <!-- <ul class="menu menu-horizontal p-0">
                    <li><a href="https://www.linkedin.com/in/julienbblanchet/" class="btn btn-ghost text-xl btn-sm" aria-label="LinkedIn" title="LinkedIn">
                            <span class="icon-[fa6-brands--linkedin]"></span>
                    </a></li>
                    <li><a href="https://github.com/j55blanchet" class="btn btn-ghost text-xl btn-sm" aria-label="GitHub" title="GitHub">
                        <span class="icon-[fa6-brands--github]"></span>
                    </a></li>
                </ul> -->
            </ul>
        </div>
    </div>
</div>