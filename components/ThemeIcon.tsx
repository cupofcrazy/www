type Props = {
  width?: number;
  height?: number;
  stroke?: string;
}

export const ThemeIcon = ({ width=24, height=24, stroke }: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.5 18.5L20 20M12 3V2V3ZM12 22V21V22ZM21 12H22H21ZM2 12H3H2ZM18.5 5.5L20 4L18.5 5.5ZM4 20L5.5 18.5L4 20ZM4 4L5.5 5.5L4 4Z" stroke={stroke} strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke={stroke} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}