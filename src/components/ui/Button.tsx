interface ButtonProps {
    text: string;
    onClick: () => void;
    className?: string;
    disabled?: boolean;
}

export default function Button({text, onClick, className, disabled}: Readonly<ButtonProps>) {
    const baseClassName = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full h-12';
    const disabledClassName = 'bg-gray-400 cursor-not-allowed hover:bg-gray-400';
    const finalClassName = `${baseClassName} ${disabled ? disabledClassName : ''} ${className}`;

    return (
        <button
            className={finalClassName}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    )
}
