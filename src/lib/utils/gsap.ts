import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import type { ScrollTrigger as ScrollTriggerType } from 'gsap/all';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
}

const ScrollTriggerExport: typeof ScrollTriggerType = ScrollTrigger;

export * from 'gsap';
export { ScrollTriggerExport as ScrollTrigger };
