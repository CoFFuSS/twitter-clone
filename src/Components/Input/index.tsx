import { InputField } from './styled';

interface InputProps {
  width?: string;
  height?: string;
  borderColor?: string;
  borderRadius?: string;
  textColor?: string;
  type?: string;
  placeholder?: string;
  id?: string;
  maxLength?: number;
}

export const Input = ({
  width,
  height,
  borderColor,
  borderRadius,
  textColor,
  type,
  placeholder,
  id,
  maxLength,
}: InputProps) => (
  <InputField
    width={width}
    height={height}
    borderColor={borderColor}
    borderRadius={borderRadius}
    textColor={textColor}
    type={type}
    placeholder={placeholder}
    id={id}
    maxLength={maxLength}
  />
);
