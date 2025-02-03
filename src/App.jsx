import Bottom from "./components/Bottom";
import FloatingHearts from "./components/FloatingHearts";
import Head from "./components/Head";
import Timer from "./components/Timer";

export default function App() {
  return (
    <div className="relative bg-linear-to-tl from-pink-100 to-rose-200">
      <FloatingHearts />
      <div className="flex flex-col gap-5 items-center justify-center h-screen relative">
        <Head />
        <Timer />
        <Bottom />
      </div>
    </div>
  );
}
