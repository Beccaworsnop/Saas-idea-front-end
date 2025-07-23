export const Input = ({ 
  type = 'text', 
  placeholder, 
  className = '',
  ...props 
}) => {
  const baseStyles = 'w-full px-3 py-2 bg-slate-800 border border-cyan-500/30 rounded-md text-white placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400'
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${baseStyles} ${className}`}
      {...props}
    />
  )
}

export const Textarea = ({ 
  placeholder, 
  rows = 4, 
  className = '',
  ...props 
}) => {
  const baseStyles = 'w-full px-3 py-2 bg-slate-800 border border-cyan-500/30 rounded-md text-white placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400'
  
  return (
    <textarea
      placeholder={placeholder}
      rows={rows}
      className={`${baseStyles} ${className}`}
      {...props}
    />
  )
}