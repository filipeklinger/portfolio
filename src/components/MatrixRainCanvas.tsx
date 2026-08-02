import React, { useEffect, useRef } from 'react';

export interface MatrixRainCanvasProps {
  className?: string;
  /** 
   * Multiplicador de velocidade de queda das letras.
   * @default 0.4
   */
  speed?: number;
  /** 
   * Taxa de quadros (FPS) da animação.
   * @default 24
   */
  fps?: number;
  /** 
   * Tamanho da fonte dos caracteres em pixels.
   * @default 14
   */
  fontSize?: number;
  /**
   * Se true, aplica uma máscara gradiente que faz as letras desvanecerem suavemente no final do canvas.
   * @default true
   */
  fadeBottom?: boolean;
}

export const MatrixRainCanvas: React.FC<MatrixRainCanvasProps> = ({
  className,
  speed = 0.4,
  fps = 24,
  fontSize = 14,
  fadeBottom = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = 0;
    const frameInterval = 1000 / fps;

    const updateSize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    const characters = '0123456789アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEF';
    const columns = Math.ceil(canvas.width / fontSize);

    // Cada coluna possui sua posição vertical e um fator de velocidade levemente individual
    const drops: { y: number; columnSpeed: number }[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = {
        y: Math.floor(Math.random() * -50),
        columnSpeed: speed * (0.75 + Math.random() * 0.5),
      };
    }

    const draw = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(draw);

      // Controle estrito de FPS (evita velocidade excessiva em telas de 120Hz/144Hz)
      const delta = currentTime - lastTime;
      if (delta < frameInterval) return;
      lastTime = currentTime - (delta % frameInterval);

      // Rastro: limpa a tela com fundo semitransparente (#0f172a / slate-900)
      ctx.fillStyle = 'rgba(15, 23, 42, 0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'Courier New', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        const gridY = Math.floor(drop.y);

        if (gridY >= 0) {
          const text = characters.charAt(Math.floor(Math.random() * characters.length));
          const x = i * fontSize;
          const pixelY = gridY * fontSize;

          // Caractere da frente (cabeça da gota) com brilho azul ciano
          ctx.fillStyle = '#93c5fd';
          ctx.fillText(text, x, pixelY);

          // Caractere seguinte na cor azul padrão da marca
          if (gridY > 1) {
            const prevText = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillStyle = '#3b82f6';
            ctx.fillText(prevText, x, pixelY - fontSize);
          }
        }

        // Reinicia a coluna no topo ao ultrapassar o final do canvas
        if (gridY * fontSize > canvas.height && Math.random() > 0.975) {
          drop.y = 0;
          drop.columnSpeed = speed * (0.75 + Math.random() * 0.5);
        }

        drop.y += drop.columnSpeed;
      }
    };

    draw(performance.now());

    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, fps, fontSize]);

  const maskStyle: React.CSSProperties = fadeBottom
    ? {
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%)',
        maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%)',
      }
    : {};

  return (
    <canvas
      ref={canvasRef}
      style={maskStyle}
      className={`absolute inset-0 pointer-events-none ${className || ''}`}
    />
  );
};

export default MatrixRainCanvas;