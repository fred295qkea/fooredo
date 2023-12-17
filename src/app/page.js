import Frontpage from "@/components/Frontpage";

export const metadata = {
  title: "Foo Festival",
  description: "Homepage for Foo Festival",
};

export default function Home() {
  return (
    <main className="pt-20 lg:pt-0">
      <Frontpage />
    </main>
  );
}
