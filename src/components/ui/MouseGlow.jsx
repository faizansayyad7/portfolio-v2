import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{ overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          left: mouse.x - 150,
          top: mouse.y - 150,
          background:
            "radial-gradient(circle, rgba(0,255,136,0.15), transparent 70%)",
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}