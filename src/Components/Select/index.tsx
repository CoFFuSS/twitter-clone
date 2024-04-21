import { forwardRef } from 'react';

import { StyledSelect } from './styled';

interface ISelectProps {
  placeholder: string;
  options: string[] | number[];
  width?: string;
  name: string;
}

export const Select = forwardRef<HTMLSelectElement, ISelectProps>(
  ({ placeholder, options, width, ...props }, ref) => (
    <StyledSelect
      width={width}
      ref={ref}
      {...props}
    >
      <option
        value=''
        disabled
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
    </StyledSelect>
  ),
);
