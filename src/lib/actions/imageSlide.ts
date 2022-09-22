import { gsap } from '$lib/utils/gsap';

interface ImageSlideParams {
	scrollTrigger: ScrollTrigger.Vars;
}

const DEFAULT_SCROLL_TRIGGER_VARS: ScrollTrigger.Vars = {
	start: 'top top',
	end: 'bottom bottom',
    toggleActions: 'play none none reverse',
};

export const imageSlide = (node: HTMLElement, params: ImageSlideParams) => {
	let tween = gsap.from(node, {
		width: '80%',
		scrollTrigger: { ...DEFAULT_SCROLL_TRIGGER_VARS, ...params.scrollTrigger }
	});

	return {
		destroy() {
			tween.kill();
            tween = null;
		}
	};
};
