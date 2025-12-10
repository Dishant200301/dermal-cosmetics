interface ArrowIconProps {
    className?: string;
    fill?: string;
    width?: number;
    height?: number;
}

export const ArrowIcon = ({
    className = '',
    fill = 'currentColor', // Use currentColor to inherit parent's text color
    width = 18,
    height = 14
}: ArrowIconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-colors duration-400 ${className}`} // Add transition for smooth color change
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.32 5.66001C13.9795 5.66001 11.8464 3.439 11.8464 1V0H9.92638V1C9.92638 2.774 10.6733 4.438 11.8455 5.66001H0V7.66001H11.8455C10.6733 8.88201 9.92638 10.546 9.92638 12.32V13.32H11.8464V12.32C11.8464 9.88101 13.9795 7.66001 16.32 7.66001H17.28V5.66001H16.32Z"
                fill={fill}
            />
        </svg>
    );
};
