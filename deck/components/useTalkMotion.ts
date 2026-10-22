import { useLayoutEffect, useRef, useSyncExternalStore } from 'react';
import { flags, reducedMotion, useScene } from 'beatdeck';

// These containers arrange content; animate their children, not the whole layout.
const GROUPS = '.talk-columns, .talk-column, .talk-clues, .talk-agent-layout, .talk-assistants, .talk-flow, .talk-rows, .talk-stack, .talk-vs-layout, .talk-window-items, .talk-numbers, .talk-chips, .talk-closing-layout, .talk-tools, .talk-acceptance-layout, .talk-acceptance-list, .talk-bonus-tips, .talk-ego-objections, .talk-lives, .talk-opening-questions, .talk-context-selection, .talk-token-notes, .talk-document-levels, .talk-tips-layout, .talk-practice-transition, .talk-safety-groups, .talk-prompt-context';

function collect(parent: Element): HTMLElement[] {
  return Array.from(parent.children).flatMap((child) => {
    if (!(child instanceof HTMLElement)) return [];
    // NodeBox / Arrow own their beat visibility and motion, including hidden nodes.
    if (child.matches('.talk-diagram')) return [];
    if (child.matches(GROUPS) || (child.tagName === 'DIV' && !child.className)) return collect(child);
    return [child];
  });
}

/** Cosmetic only: URL loads/back navigation always show the complete beat. */
export function useTalkMotion() {
  const root = useRef<HTMLDivElement>(null);
  const seen = useRef(new WeakMap<HTMLElement, string>());
  const { here, entry, dir } = useScene();
  const reduced = useSyncExternalStore(reducedMotion.subscribe, reducedMotion.get);

  useLayoutEffect(() => {
    const page = root.current;
    if (!here || !page) {
      seen.current = new WeakMap();
      return;
    }
    const targets = Array.from(page.querySelectorAll('.talk-heading, .talk-body, .talk-cover-content'))
      .flatMap(collect);
    const footer = page.querySelector<HTMLElement>('.talk-foot');
    if (footer) targets.push(footer);
    const arriving = targets.filter((element) => {
      const signature = `${element.textContent}|${element.getAttribute('src') ?? ''}`;
      const changed = seen.current.get(element) !== signature;
      seen.current.set(element, signature);
      return changed;
    });
    if (flags.capture || reduced || dir !== 'forward') return;

    const animations = arriving.map((element, index) => {
      const horizontal = element.matches('.talk-flow-node, .talk-flow-arrow, .talk-lives > span');
      const distance = element.matches('.talk-big, .talk-equation') ? 28 : 16;
      return element.animate([
        { opacity: 0, transform: horizontal ? 'translateX(-16px)' : `translateY(${distance}px)` },
        { opacity: 1, transform: 'translate(0, 0)' },
      ], {
        duration: 420,
        delay: Math.min(index * 55, 240),
        easing: 'cubic-bezier(.22, 1, .36, 1)',
        fill: 'backwards',
      });
    });
    // Rapid clicks settle immediately; never let an old animation hide new content.
    return () => animations.forEach((animation) => animation.cancel());
  }, [here, entry, dir, reduced]);

  return root;
}
