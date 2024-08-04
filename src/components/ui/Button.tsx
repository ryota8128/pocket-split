interface ButtonProps {
    text: string;
    onClick: () => void;
    className?: string;
}

export default function Button({text, onClick, className}: Readonly<ButtonProps>) {
    return (
        <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full h-12 ${className}`}
            onClick={onClick}>
            {text}
        </button>

    )
}
