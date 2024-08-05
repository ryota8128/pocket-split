import React from 'react';

interface TextInputProps {
  required?: boolean;
  label?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type: 'email' | 'password' | 'text';
  name?: string;
  value: string;
  errorMessage?: string;
}


export default function TextInput({
                                    label,
                                    value,
                                    placeholder,
                                    name,
                                    className,
                                    onChange,
                                    type,
                                    errorMessage,
                                  }: Readonly<TextInputProps>) {
  return (
    <div className={`block ${className}`}>
      {label && (
        <label htmlFor={name} className=''>
          {placeholder}
        </label>
      )}
      <input
        required
        name={name}
        type={type}
        autoComplete='current-password'
        className={`h-12 block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 px-3`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {errorMessage ? (
          <p className='text-red-500 text-xs mt-1 h-2'>{errorMessage}</p>) :
        (<div className='h-2'></div>)
      }
    </div>
  );
}

