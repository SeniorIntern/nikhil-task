type LabelProps = {
  labelContent: string;
  className?: string;
  htmlFor?: string;
};

const Label = ({ labelContent, className, htmlFor }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={'text-[18px]' + className}>
      {labelContent}
    </label>
  );
};

export default Label;
