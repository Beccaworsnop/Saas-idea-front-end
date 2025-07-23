import { SERVICES } from "@/app/data/constants"
import { ServiceCard } from '../ui/ServiceCard'

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive data solutions tailored to meet your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}