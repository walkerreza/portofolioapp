const Input = ({ label, id, className = '', ...props }) => {
  return (
    <div>
      {label && (
        <label className="block text-gray-700 mb-2" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500 ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
