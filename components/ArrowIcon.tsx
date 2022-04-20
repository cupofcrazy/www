type Props = {
  size?: number;
  stroke: string
}

export const ArrowIcon = ({ size=20, stroke }: Props) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 5L20 12L13 19M4 12H20H4Z" stroke={stroke} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
