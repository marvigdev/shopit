interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  primary?: boolean;
  icon?: JSX.Element;
  children?: React.ReactNode;
}

const Button = ({ primary, children, icon, type, ...props }: ButtonProps) => {
  return (
    <button
      className={`border-2 rounded-md ${
        primary
          ? 'border-primary bg-primary text-white font-bold'
          : 'border-gray-200'
      } px-4 py-2 flex gap-4 items-center justify-center w-full`}
      type='button'
      {...props}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;
