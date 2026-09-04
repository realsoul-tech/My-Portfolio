import { motion } from "framer-motion";
import { Globe, Server, Database, Shield, Cpu, Terminal } from "lucide-react";
import SectionHeader from "../../components/SectionHeader";
import SkillBar from "../../components/SkillBar";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "React", level: 90, color: "bg-blue-500" },
        { name: "TypeScript", level: 85, color: "bg-blue-400" },
        { name: "Tailwind CSS", level: 95, color: "bg-teal-500" },
        { name: "Next.js", level: 80, color: "bg-gray-800" },
        { name: "Vue.js", level: 75, color: "bg-green-500" },
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Spring Boot", level: 88, color: "bg-green-500" },
        { name: "Node.js", level: 85, color: "bg-green-600" },
        { name: "Python", level: 82, color: "bg-yellow-500" },
        { name: "REST APIs", level: 90, color: "bg-purple-500" },
        { name: "GraphQL", level: 70, color: "bg-pink-500" },
      ]
    },
    {
      title: "Database & DevOps",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MySQL", level: 92, color: "bg-blue-600" },
        { name: "MongoDB", level: 80, color: "bg-green-400" },
        { name: "PostgreSQL", level: 78, color: "bg-blue-700" },
        { name: "Docker", level: 75, color: "bg-blue-400" },
        { name: "AWS", level: 70, color: "bg-yellow-600" },
      ]
    },
    {
      title: "Networking & Security",
      icon: <Shield className="w-6 h-6" />,
      skills: [
        { name: "Cisco Networking", level: 85, color: "bg-red-500" },
        { name: "Network Security", level: 88, color: "bg-red-600" },
        { name: "Firewall Configuration", level: 82, color: "bg-orange-500" },
        { name: "TCP/IP Protocols", level: 90, color: "bg-indigo-500" },
        { name: "VPN Configuration", level: 80, color: "bg-purple-600" },
      ]
    }
  ];

  const tools = [
    { category: "Development", items: ["VS Code", "IntelliJ IDEA", "Git", "Postman", "Figma"] },
    { category: "Networking", items: ["Wireshark", "Packet Tracer", "GNS3", "Putty", "Nmap"] },
    { category: "Database", items: ["MySQL Workbench", "pgAdmin", "MongoDB Compass", "DBeaver"] },
    { category: "DevOps", items: ["Docker", "Jenkins", "Kubernetes", "GitHub Actions", "Linux"] },
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Technical Skills"
          subtitle="A comprehensive skill set combining software development with networking expertise for full-stack solutions."
          icon={<Cpu className="w-8 h-8 text-primary-600" />}
        />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex} 
                    skill={skill} 
                    index={skillIndex} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="flex items-center justify-center mb-8">
            <Terminal className="w-8 h-8 text-primary-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-800 text-center">Tools & Technologies</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((toolCategory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <h4 className="font-bold text-gray-800 mb-4 text-center">{toolCategory.category}</h4>
                <div className="space-y-3">
                  {toolCategory.items.map((tool, toolIndex) => (
                    <div key={toolIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                      <span className="text-gray-700">{tool}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Learning Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-8 border border-primary-100"
          >
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Currently Learning</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Kubernetes", "Microservices Architecture", 
                  "Cloud Security", "Machine Learning", 
                  "Blockchain Technology"
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white text-primary-700 rounded-full font-medium border border-primary-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mt-4">
                Always expanding my skill set to stay current with industry trends
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;