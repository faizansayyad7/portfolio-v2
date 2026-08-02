import Background from "../ui/Background";
import MouseGlow from "../ui/MouseGlow";

export default function Layout({ children }) {
  return (
    <>
      <Background />
      <MouseGlow />

      <main className="relative z-10 min-h-screen text-white">
        {children}
      </main>
    </>
  );
}