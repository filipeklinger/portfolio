import { useEffect, useRef, useState } from 'react';

/**
 * Observa o próprio elemento e retorna `inView = true` na primeira vez que ele
 * entra na viewport. Cada elemento gerencia seu próprio observer, então
 * conteúdo adicionado dinamicamente (ou via HMR) é animado corretamente —
 * ao contrário de um observer global que só varre o DOM uma vez na montagem.
 */
export function useInView<T extends Element = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        // Animação é one-shot: para de observar após revelar.
        observer.disconnect();
      }
    }, options);

    observer.observe(element);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}
