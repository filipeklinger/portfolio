import type { HTMLAttributes } from 'react';
import { useInView } from '../hooks/useInView';

type RevealProps = HTMLAttributes<HTMLDivElement>;

/**
 * Wrapper que revela seu conteúdo com a animação `slide-in` quando entra na
 * viewport. Substitui diretamente as antigas `<div className="slide-in">`,
 * mantendo a mesma estrutura de DOM e classes extras via `className`.
 */
export default function Reveal({ className = '', children, ...rest }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`slide-in ${inView ? 'visible' : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </div>
  );
}
