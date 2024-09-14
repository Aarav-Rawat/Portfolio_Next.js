import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";

export default function Home() {
  return (
    <main className=" bg-black-100 relative flex  items-center justify-center flex-col overflow-hidden mx-auto text-white sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={
            [
              {
                name: 'Home',
                link: '/',
              }
            ]
          }
        />
        <Hero />
        <Grid/>
      </div>
    </main>
  );
}
