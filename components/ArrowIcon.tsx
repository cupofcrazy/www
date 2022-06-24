type SVGProps = {
  size?: number;
  stroke: string
  style?: React.CSSProperties
}

export const ArrowIcon = ({ size=20, stroke, ...props }: SVGProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M13 5L20 12L13 19M4 12H20H4Z" stroke={stroke} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
