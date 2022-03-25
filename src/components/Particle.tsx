import { ReactNode } from "react";
import Particles from "react-tsparticles";

type Props = {
  children?: ReactNode;
};

export default function Particle({ children }: Props) {
  return (    
    <>
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: {
                enable: true,
                mode: "repulse",
                parallax: { enable: false, force: 60, smooth: 10 }
              },
              resize: true
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 250, duration: 0.4 }
            }
          },
          particles: {
            color: { value: "#ffffff" },
            move: {
              direction: "none",
              enable: true,
              outModes: "out",
              random: false,
              speed: 4,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 1000
              },
              value: 80
            },
            opacity: {
              value: {
                min: 0,
                max: 0.5
              }
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: 0.8, max: 3 }
            }
          }
        }}
      />
      {children}
    </>
  );
}
