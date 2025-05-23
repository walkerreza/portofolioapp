const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`px-8 py-3 rounded-full font-semibold transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
