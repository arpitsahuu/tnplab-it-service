
import { Laptop, Globe, Users } from "lucide-react";

const stats = [
  {
    icon: <Laptop className="w-8 h-8 text-blue-400" />,
    number: "40K+",
    title: "Projects Completed",
    description: "Successfully delivered innovative solutions across various industries.",
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-400" />,
    number: "70K+",
    title: "Global Clients",
    description: "Trusted by businesses worldwide for their IT needs and digital transformation.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-400" />,
    number: "149+",
    title: "Expert Team Members",
    description: "Skilled professionals dedicated to delivering cutting-edge technology solutions.",
  },
];

export default function Statistics() {
  return (
    <section className="bg-gradient-to-b px-10  py-20 text-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left: Stats Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center lg:text-left">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-800 border-gray-700">
                <div className="p-6 text-center lg:text-left">
                  <div className="mb-4 flex justify-center lg:justify-start">{stat.icon}</div>
                  <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-300">{stat.title}</h3>
                  <p className="text-gray-400">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="/path-to-your-image.jpg" 
            alt="Our Impact"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
