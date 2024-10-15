import React, { FC } from "react";

interface InputBoxProps {
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
}

const InputBox: FC<InputBoxProps> = ({
  type,
  placeholder,
  onChange,
  className,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
};

export default InputBox;
