<script>
	import MobileMenu from './MobileMenu.svelte';
	import { REPO_URL, LINKEDIN_PAGE } from '$lib/siteConfig';
	import NavLink from './NavLink.svelte';
	let isDark = false;
	if (typeof localStorage !== 'undefined') {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			isDark = true;
		}
	}
	function toggleDarkMode() {
		if (isDark) {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
			isDark = false;
		} else {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
			isDark = true;
		}
	}
</script>

<nav
	class="relative mx-auto flex w-full max-w-2xl items-center justify-between border-gray-200
	bg-gray-50 bg-opacity-60 py-8 text-gray-900 dark:border-gray-700 dark:bg-gray-900
	dark:text-gray-100 sm:pb-16"
>
	<a href="#skip" class="skip-nav">Skip to content</a>
	<MobileMenu />
	<ul class="ml-[-0.60rem] flex">
		<li>
			<NavLink href="/">Home</NavLink>
		</li>
		<li>
			<NavLink href="/blog">Blog</NavLink>
		</li>
		<li>
			<NavLink href="/about">About</NavLink>
		</li>
		<li>
			<a
				class="hidden rounded-lg p-1 text-gray-800 transition-all hover:bg-yellow-200 dark:text-gray-200 dark:hover:bg-yellow-800 sm:px-3 sm:py-2 md:inline-block"
				rel="external"
				href={'/rss.xml'}
				><span class="capsize">RSS</span>
			</a>
		</li>
	</ul>
	<div class="flex items-center space-x-4">
		<!-- RSS -->
		<!-- <a
			class="text-gray-700 hover:bg-yellow-200 dark:text-gray-200 dark:hover:bg-yellow-800"
			rel="external"
			href={origin + '/rss.xml'}
			aria-label="RSS"
		>
			rss
			<svg
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				class="h-9 w-9 p-1"
				fill="currentColor"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
				/>
			</svg>
		</a> -->
		<!-- Github -->
		<a
			class="rounded-lg text-gray-700 hover:bg-yellow-200 dark:text-gray-200
			dark:hover:bg-yellow-800"
			href={REPO_URL}
			aria-label="GitHub source"
		>
			<svg aria-hidden="true" class="h-9 w-9 p-1" fill="currentColor" viewBox="0 0 24 24">
				<path
					fill-rule="evenodd"
					d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
					0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608
					1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088
					2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988
					1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112
					6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202
					2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566
					4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019
					10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>
		<a
			class="rounded-lg text-gray-700 hover:bg-yellow-200 dark:text-gray-200
			dark:hover:bg-yellow-800"
			href={LINKEDIN_PAGE}
			aria-label="Julio's Linkedin page"
		>
			
		<svg height="24" viewBox="0 0 72 72" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#007EBB"/><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFF"/></g></svg>
		</a>
		<button
			aria-label="Toggle Dark Mode"
			class="ml-1 flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-400 ring-yellow-400
			transition-all hover:ring-2 dark:bg-yellow-800"
			on:click={toggleDarkMode}
		>
			{#if isDark}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					class="h-5 w-5 text-gray-800 dark:text-yellow-100"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728
						0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
					/>
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					class="h-5 w-5 text-gray-800 dark:text-gray-200"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
					/>
				</svg>
			{/if}
		</button>
	</div>
</nav>

<style>
	.skip-nav {
		position: absolute;
		left: -25%;
		top: -2rem;
		--tw-translate-y: -3rem;
		padding: 0.75rem 1rem;
		transition-property: transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 0.2s;
	}
</style>
