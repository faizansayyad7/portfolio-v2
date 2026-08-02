export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050505]">
      {/* Green Glow */}
      <div className="absolute left-[-250px] top-[-250px] h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-[140px]" />

      {/* Blue Glow */}
      <div className="absolute right-[-250px] bottom-[-250px] h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[140px]" />

      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-[120px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}