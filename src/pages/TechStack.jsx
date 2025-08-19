import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const techIcons = [
  "/icons/icon1.png",
  "/icons/icon2.png",
  "/icons/icon3.png",
  "/icons/icon4.png",
  "/icons/icon5.png",
  "/icons/icon6.png",
  "/icons/icon7.png",
  "/icons/icon8.png",
  "/icons/icon9.png",
  "/icons/icon10.png",
  "/icons/icon11.png",
  "/icons/icon12.png",
  "/icons/icon13.png",
];

const TechStack = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const { Engine, Render, World, Bodies, Runner } = Matter;

    const engine = Engine.create();
    engine.gravity.y = 1.2;
    const world = engine.world;

    const width = window.innerWidth;
    const height = 600;

    const render = Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width,
        height,
        background: "black", // match screenshot background
        wireframes: false,
      },
    });

    // Ground & walls
    const ground = Bodies.rectangle(width / 2, height + 20, width, 40, { isStatic: true });
    const leftWall = Bodies.rectangle(-20, height / 2, 40, height, { isStatic: true });
    const rightWall = Bodies.rectangle(width + 20, height / 2, 40, height, { isStatic: true });
    World.add(world, [ground, leftWall, rightWall]);

    // Add circular "bubble" icons
    techIcons.forEach((src) => {
      const xPos = 100 + Math.random() * (width - 200);
      const yPos = -100 - Math.random() * 600;

      const body = Bodies.circle(xPos, yPos, 55, {
        restitution: 0.6,
        friction: 0.2,
        render: {
          fillStyle: "white",   // white circular bubble
          strokeStyle: "rgba(251, 250, 250, 0.1)", // subtle border/shadow
          lineWidth: 2,
          sprite: {
            texture: src,
            xScale: 0.2,  // scale icon inside bubble
            yScale: 0.2,
          },
        },
      });

      World.add(world, body);
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(world, false);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <section className="bg-black text-white py-5 relative overflow-hidden">
      <div className="text-center mb-12">
        <span className="text-purple-400 font-medium">TECH STACK</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-2">
          OUR TECH CAPABILITIES FOR YOUR <br /> SOFTWARE DEVELOPMENT IDEA
        </h2>
      </div>

      {/* Falling icons */}
      <div ref={sceneRef} className="w-full h-[700px]" />
    </section>
  );
};

export default TechStack;
