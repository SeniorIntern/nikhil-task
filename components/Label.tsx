type LabelProps = {
  labelContent: string;
  className?: string;
  htmlFor?: string;
};

const Label = ({
  labelContent,
  className = 'text-[18px]',
  htmlFor
}: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {labelContent}
    </label>
  );
};

export default Label;
