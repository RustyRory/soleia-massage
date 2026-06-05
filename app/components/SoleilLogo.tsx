type Props = {
  className?: string;
  scrolled?: boolean;
};

export default function SoleilLogo({ className = "w-8 h-8", scrolled = false }: Props) {
  const longRay  = "M 0,-17 C 1.6,-12 1.4,-8.5 0,-7 C -1.4,-8.5 -1.6,-12 0,-17 Z";
  const shortRay = "M 0,-13 C 1.1,-10 1,-8.5 0,-7 C -1,-8.5 -1.1,-10 0,-13 Z";

  const rayColor   = scrolled ? "#C07A4A" : "#E8D8CC";
  const circleOuter = scrolled ? "#C07A4A" : "#D49A6A";
  const circleInner = scrolled ? "#E8D8CC" : "#FAF2EE";

  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <g transform="translate(20,20)">
        {/* Rayons longs — cardinaux */}
        {[0, 90, 180, 270].map((angle) => (
          <path
            key={`long-${angle}`}
            d={longRay}
            fill={rayColor}
            transform={`rotate(${angle})`}
          />
        ))}
        {/* Rayons courts — diagonaux */}
        {[45, 135, 225, 315].map((angle) => (
          <path
            key={`short-${angle}`}
            d={shortRay}
            fill={rayColor}
            opacity="0.75"
            transform={`rotate(${angle})`}
          />
        ))}
        {/* Cercle central */}
        <circle r="6.5" fill={circleOuter} />
        <circle r="3.5" fill={circleInner} />
      </g>
    </svg>
  );
}
