import classNames from 'classnames';

type ButtonProps = {
  buttonContent: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'filled' | 'outline';
};

const Button = ({
  buttonContent,
  onClick,
  type = 'button',
  variant = 'filled'
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        'rounded-[10px] border border-[var(--primary-blue)] py-[13px] text-[18px] font-bold',
        {
          'bg-[var(--primary-blue)] text-white': variant === 'filled',
          'text-[var(--primary-blue)]': variant === 'outline'
        }
      )}
      onClick={onClick}
      type={type}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
