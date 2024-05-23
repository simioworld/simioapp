interface PersonProps {
  stroke: string;
  width?: number;
  height?: number;
  className: string;
}

const Person = ({
  stroke,
  width = 16,
  height = 16,
  className,
}: PersonProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  );
};

export default Person;
