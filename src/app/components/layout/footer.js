import { COMPANY_INFO } from '../../data/constants'

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-cyan-500/20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-cyan-400 mb-4">{COMPANY_INFO.name}</div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}