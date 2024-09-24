import React from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Input = ({ className, ...props }: Props) => {
  return <input {...props} className={[className].filter(Boolean).join(' ')} />;
};

export default Input;
