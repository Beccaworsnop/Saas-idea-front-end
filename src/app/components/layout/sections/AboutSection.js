import { COMPANY_INFO, STATS } from "@/app/data/constants"

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            About <span className="text-cyan-400">{COMPANY_INFO.name}</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Founded with a vision to revolutionize Algeria's digital infrastructure, DataWave Insights stands at the
            forefront of data center innovation. We combine cutting-edge technology with local expertise to deliver
            world-class data solutions that empower businesses to thrive in the digital age.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}