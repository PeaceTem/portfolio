import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div>

    <main className="flex rounded-lg min-h-[50vh] w-[80vw] mx-auto mt-5 bg-slate-50  items-start justify-between p-24 gap-4">
      <div className="flex flex-col items-start justify-between gap-6">
        <div className="text-teal-800 text-lg">
          Welcome to my site
        </div>
        <h1 className="text-4xl font-bold text-teal-800">
          Hi, I'm Sachina, a UI/UX <span className="text-orange-800">Designer</span>
        </h1>

        <p className="font-mono text-lg text-slate-800">
          I am a focused and talented B.Sc. CSIT student currently pursuing my bachelor degree from Asian School of Management and Technology. See More...
        </p>

        <div className="flex space-x-6">
          <div>
            <button className="bg-teal-800 px-5 py-2 rounded-lg">
              Hire Me!
            </button>
          </div>
          <div>
            <Link href="/projects">
              <button className="bg-orange-800 px-5 py-2 rounded-lg">
              See My Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="">
            <Image
              src="/design9.jpg"
              alt="Vercel Logo"
              className="rounded-lg shadow-2xl"
              width={700}
              height={248}
              priority
            />
      </div>
    </main>
    </div>
  );
}
