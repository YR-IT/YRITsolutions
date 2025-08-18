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

    // Create engine
    const engine = Engine.create();
    engine.gravity.y = 1.2; // strong gravity for falling effect
    const world = engine.world;

    const width = window.innerWidth;
    const height = 600;

    // Create renderer
    const render = Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width,
        height,
        background: "transparent",
        wireframes: false,
      },
    });

    // Ground and walls
    const ground = Bodies.rectangle(width / 2, height + 20, width, 40, { isStatic: true });
    const leftWall = Bodies.rectangle(-20, height / 2, 40, height, { isStatic: true });
    const rightWall = Bodies.rectangle(width + 20, height / 2, 40, height, { isStatic: true });

    World.add(world, [ground, leftWall, rightWall]);

    // Add icons
    techIcons.forEach((src, i) => {
      const xPos = 100 + Math.random() * (width - 200); // random horizontal spread
      const yPos = -100 - Math.random() * 600; // always start ABOVE viewport
      const body = Bodies.circle(xPos, yPos, 40, {
        restitution: 0.6, // bounce
        friction: 0.2,
        render: {
          sprite: {
            texture: src,
            xScale: 0.15,
            yScale: 0.15,
          },
        },
      });
      World.add(world, body);
    });

    // Run engine & renderer
    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // ✅ Cleanup on unmount (important when refreshing in dev)
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
