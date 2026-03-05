// @ts-check

import {defineConfig} from 'astro/config';
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: 'https://anastasia-rusakovich.netlify.app/',
    integrations: [mdx(), react(), tailwind({
        applyBaseStyles: false,
    }), icon(), sitemap()],
    markdown: {
        shikiConfig: {
            theme: 'plastic',
            wrap: true,
        },
    },
    experimental: {
        svg: true,
    }});