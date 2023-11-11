import { Hero, Tiles } from "./components";

export default function HomePage() {
  return (
    <main>
      <Hero isHasVideo={true} />
      <Tiles />
      <Tiles />
      <Tiles />
    </main>
  );
}
