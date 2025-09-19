import { getServiceIcon } from '../Icons/icons'

export const ServiceCard = ({ service }) => {
  const { title, description, icon } = service
  
  return (
    <div className="bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors rounded-lg p-8 text-center group">
      <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-500/30 transition-colors">
        {getServiceIcon(icon, { className: "w-8 h-8 text-cyan-400" })}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  )
}