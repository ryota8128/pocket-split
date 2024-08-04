import React from "react";

interface TextInputProps {
    required?: boolean;
    label?: string
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    type: "email" | "password" | "text";
    name?: string;
}


export default function TextInput({
                                      label, value, placeholder, name, className, onChange, type, required = false
                                  }: TextInputProps) {
    return (
        <div className={className}>
            {label && (
                <label htmlFor={name} className="">
                    {placeholder}
                </label>
            )}
            <input
                required
                name={name}
                type={type}
                autoComplete="current-password"
                className={`h-12 block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 px-3`}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}

