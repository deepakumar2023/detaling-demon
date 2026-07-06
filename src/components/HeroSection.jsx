import { useEffect, useRef } from 'react';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import { Reveal } from '../hooks/useReveal.jsx';

const VERTEX_SHADER = `
attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const FRAGMENT_SHADER = `
precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
varying vec2 v_texCoord;

void main() {
    vec2 p = (v_texCoord * 2.0 - 1.0) * (u_resolution.y / u_resolution.x);
    
    for(float i = 1.0; i < 10.0; i++){
        p.x += 0.3 / i * sin(i * 3.0 * p.y + u_time + u_mouse.x / u_resolution.x * 2.0);
        p.y += 0.3 / i * cos(i * 3.0 * p.x + u_time + u_mouse.y / u_resolution.y * 2.0);
    }
    
    vec3 color1 = vec3(0.05, 0.05, 0.05);
    vec3 color2 = vec3(0.9, 0.0, 0.0);
    
    float intensity = 0.5 + 0.5 * sin(p.x + p.y);
    vec3 color = mix(color1, color2, intensity * 0.15);
    
    float sheen = pow(intensity, 10.0) * 0.5;
    color += sheen;

    gl_FragColor = vec4(color, 1.0);
}`;

function ShaderBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const syncSize = () => {
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    let ro;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(syncSize);
      ro.observe(canvas);
    }
    syncSize();
    mouseRef.current = { x: canvas.width / 2, y: canvas.height / 2 };

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const compileShader = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const prog = gl.createProgram();
    gl.attachShader(prog, compileShader(gl.VERTEX_SHADER, VERTEX_SHADER));
    gl.attachShader(prog, compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouseRef.current.x = nx * canvas.width;
        mouseRef.current.y = ny * canvas.height;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = (t) => {
      if (typeof ResizeObserver === 'undefined') syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouseRef.current.x, mouseRef.current.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animRef.current = requestAnimationFrame(render);
    };
    animRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animRef.current) cancelAnimationFrame(animRef.current);
      if (ro) ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 opacity-60"
      style={{ display: 'block' }}
    />
  );
}

export default function HeroSection() {
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden">
      <ShaderBackground />

      <div className="relative z-10 px-5 md:px-20 max-w-6xl mt-20">
        <Reveal>
          <h1 className="font-[Anybody] text-[48px] leading-[52px] md:text-[72px] md:leading-[80px] tracking-[-0.04em] font-extrabold italic uppercase mb-4">
            UNLEASH THE<br />
            <span className="text-[var(--color-primary-container)]">RADIANCE</span>
          </h1>
          <p className="font-[Geist] text-[18px] leading-[28px] text-[var(--color-on-surface-variant)] max-w-xl mb-10 border-l-4 border-[var(--color-primary)] pl-6 py-2">
            Elite Automotive Detailing &amp; Ceramic Coating. We treat every vehicle as a
            masterpiece of engineering, restoring it to a level of perfection that defies the
            showroom floor.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, '#services')}
              className="bg-[var(--color-primary-container)] text-black font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold uppercase px-10 py-5 text-center transition-all glow-red"
            >
              EXPLORE SERVICES
            </a>
            <a
              href="#process"
              onClick={(e) => handleSmoothScroll(e, '#process')}
              className="border-2 border-[var(--color-primary-container)] text-[var(--color-primary-container)] font-[Space_Mono] text-[12px] leading-[16px] tracking-[0.1em] font-bold uppercase px-10 py-5 text-center transition-all hover:bg-[var(--color-primary-container)]/10"
            >
              OUR PROCESS
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <MdKeyboardDoubleArrowDown className="text-4xl text-[var(--color-on-surface)]" />
      </div>
    </section>
  );
}
