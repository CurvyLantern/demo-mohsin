import BasicComp from "@/components/BasicComp";
export default function Home() {
  return (
    <main>
      <div className="bg-green-500 hover:bg-green-500 text-red-100 hover:text-red-900 py-10 px-10 text-3xl">
        Hello There
      </div>
      <button className="btn">Button </button>
      <BasicComp />
    </main>
  );
}
