import Image from "next/image";
import Link from "next/link";


export default async function Project() {

    const res = await fetch("http://localhost:3000/data.json");

    const projects = await res.json();

  return (
    <div className="bg-slate-50 w-[80vw] mx-auto rounded-lg relative">
    <main className="flex rounded-lg min-h-[50vh]  mt-5 bg-slate-50  items-start justify-between p-24 gap-4">
      <div className="flex flex-col items-start justify-between gap-6">
        <div className="text-teal-800 text-lg">
          Welcome to Projects Page
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
              src="/design3.png"
              alt="Vercel Logo"
              className="rounded-lg shadow-2xl"
              width={700}
              height={248}
              priority
            />
      </div>
    </main>

    <section>
        <div className="flex items-start justify-between text-slate-800">
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">My Projects</h1>
            <ul className="flex flex-wrap items-start justify-between w-full">
                {projects.map((project: any) => (
                <li key={project.id} className="mb-2 p-2 px-4 rounded  w-1/3">
                    <div className="mb-3">
                        <Image
                            src={project.image}
                            alt="Vercel Logo"
                            className="rounded-lg shadow-sm"
                            width={700}
                            height={248}
                            priority
                        />
                    </div>
                    <h2 className="text-xl font-semibold">{project.name}</h2>
                    <p>{project.description}</p>
                </li>
                ))}
            </ul>
        </div>
        </div>
    </section>
    </div>
  );
}
