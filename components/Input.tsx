type InputProps = {
  id?: string;
  className?: string;
  type?: string;
  placeholder?: string;
};

const Input = ({
  id,
  className = 'rounded-[10px] border border-[var(--primary-gray)] px-[9px] py-[18px]',
  type = 'text',
  placeholder
}: InputProps) => {
  return (
    <input
      id={id}
      className={className}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
