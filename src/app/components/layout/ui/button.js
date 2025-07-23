export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'default', 
  className = '',
  type = 'button',
  ...props 
}) => {
  const baseStyles = 'font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-cyan-500 hover:bg-cyan-600 text-white focus:ring-cyan-500',
    secondary: 'bg-slate-700 hover:bg-slate-600 text-white focus:ring-slate-500'
  }
  
  const sizes = {
    default: 'px-8 py-3 text-lg',
    small: 'px-4 py-2 text-sm',
    large: 'px-10 py-4 text-xl'
  }
  
  const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  return (
    <button 
      type={type}
      className={buttonStyles} 
      onClick={onClick} 
      {...props}
    >
      {children}
    </button>
  )
}