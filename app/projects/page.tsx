import Image from "next/image";
import Link from "next/link";


export default async function Project() {

    const projects = [
      {
        "id": 1,
        "image": "/DASCA.jfif",
        "name": "AI-Powered Healthcare System",
        "description": "This project involves developing an advanced AI-powered healthcare system aimed at improving patient diagnostics and treatment plans. The system integrates machine learning algorithms to analyze patient data and provide accurate predictions and personalized healthcare recommendations."
      },
      {
        "id": 2,
        "image": "/design2.jpg",
        "name": "Smart Home Automation",
        "description": "The Smart Home Automation project focuses on creating an intelligent system that allows homeowners to control various home devices remotely. The system utilizes IoT devices, machine learning, and voice recognition technology to provide a seamless and convenient home automation experience."
      },
      {
        "id": 3,
        "image": "/design7.jpg",
        "name": "Sustainable Urban Development",
        "description": "This project is centered around designing and implementing sustainable urban development practices. It aims to reduce the environmental impact of urban areas by integrating green building materials, renewable energy sources, and efficient waste management systems."
      },
      {
        "id": 4,
        "image": "/design3.png",
        "name": "Blockchain-Based Voting System",
        "description": "The Blockchain-Based Voting System project seeks to create a secure and transparent voting system using blockchain technology. The system ensures the integrity of the voting process by providing an immutable and tamper-proof ledger of votes, thus increasing public trust in the electoral process."
      },
      {
        "id": 5,
        "image": "/design4.jpg",
        "name": "Augmented Reality Learning Platform",
        "description": "This project involves developing an augmented reality (AR) learning platform designed to enhance the educational experience. The platform uses AR technology to create interactive and immersive learning environments, making complex subjects more engaging and easier to understand for students."
      },
      {
        "id": 6,
        "image": "/design5.jpg",
        "name": "Renewable Energy Management System",
        "description": "The Renewable Energy Management System project aims to optimize the use and distribution of renewable energy resources. The system uses smart grid technology and real-time data analytics to manage energy production and consumption, ensuring efficient and sustainable energy utilization."
      },
      {
        "id": 7,
        "image": "/design6.jpg",
        "name": "Advanced Cybersecurity Solutions",
        "description": "This project focuses on developing advanced cybersecurity solutions to protect against modern cyber threats. It involves creating sophisticated threat detection algorithms, implementing robust encryption methods, and designing secure network architectures to safeguard sensitive data."
      },
      {
        "id": 8,
        "image": "/design7.jpg",
        "name": "Personal Finance Management App",
        "description": "The Personal Finance Management App project aims to help individuals manage their finances effectively. The app provides tools for budgeting, expense tracking, and financial planning, along with personalized financial advice based on user data to promote better financial habits."
      },
      {
        "id": 9,
        "image": "/design9.jpg",
        "name": "AI-Driven Customer Support Chatbot",
        "description": "This project involves creating an AI-driven customer support chatbot that can handle a wide range of customer queries. The chatbot uses natural language processing (NLP) and machine learning to understand and respond to customer inquiries, providing quick and accurate support."
      },
      {
        "id": 10,
        "image": "/design2.jpg",
        "name": "Smart Agriculture System",
        "description": "The Smart Agriculture System project focuses on leveraging technology to improve agricultural practices. The system uses IoT sensors, drone technology, and data analytics to monitor crop health, optimize irrigation, and increase overall farm productivity, promoting sustainable agriculture."
      }
    ];

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
            <h1 className="text-2xl font-bold mb-4">My Latest Projects</h1>
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
