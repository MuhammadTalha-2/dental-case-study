type ProblemItemProps = {
  label: string;
  description: string;
};

export default function ProblemItem({ label, description }: ProblemItemProps) {
  return (
    <li className="flex items-start">
      <i className="fas fa-times-circle text-red-500 mt-1 mr-3"></i>
      <span>
        <strong>{label}:</strong> {description}
      </span>
    </li>
  );
}
