import { forwardRef } from 'react';

import { SelectContainer, StyledOption } from './styled';
import { SelectProps } from './types';

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ placeholder, options, width, ...props }, ref) => (
    <SelectContainer
      width={width}
      ref={ref}
      {...props}
    >
      <StyledOption
        value=''
        disabled
        defaultValue={placeholder}
        selected
      >
        {placeholder}
      </StyledOption>
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
