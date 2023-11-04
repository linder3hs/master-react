import { Hero, Tiles } from "./components";

export default function HomePage() {
  return (
    <main>
      <Hero isHasVideo={false} />
      <Tiles />
    </main>
  );
}
