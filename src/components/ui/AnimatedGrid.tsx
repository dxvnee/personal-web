export default function AnimatedGrid() {
    return (
  <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 3px)" +
          ", linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 3px)",
        backgroundSize: "50px 50px",
      }}
    />
  </div>
);

}