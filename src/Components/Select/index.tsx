import { forwardRef } from 'react';

import { SelectContainer } from './styled';

interface ISelectProps {
  placeholder: string;
  options: string[] | number[];
  width?: string;
  name: string;
}

export const Select = forwardRef<HTMLSelectElement, ISelectProps>(
  ({ placeholder, options, width, ...props }, ref) => (
    <SelectContainer
      width={width}
      ref={ref}
      {...props}
    >
      <option
        value=''
        disabled
        defaultValue={placeholder}
        selected
      >
        {placeholder}
      </option>
      {options.map((option) => (
        <option
          key={option}
          value={option}
        >
          {option}
        </option>
      ))}
    </SelectContainer>
  ),
);
