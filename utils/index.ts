// Device Sizes
export const sizes = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xl2: '1440px',
  xl3: '1920px'
}

// CSS Media Queries
export const mq = {
  sm: `screen and (min-width: ${sizes.sm})`,
  md: `screen and (min-width: ${sizes.md})`,
  lg: `screen and (min-width: ${sizes.lg})`,
  xl: `screen and (min-width: ${sizes.xl})`,
  xl2: `screen and (min-width: ${sizes.xl2})`,
  xl3: `screen and (min-width: ${sizes.xl3})`
};

export const formatNumber = (num: number) => {
  return num < 10 ? `0${num}` : num.toString();
}

export const ease = {
  easeInOutExpo: 'cubic-bezier(0.87, 0, 0.13, 1)'
}

const shuffle = (array: any[]) => {
  return array
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1])
} 

export const colors = shuffle([
{
  name: 'pink',
  background: '#FFD7F6' 
},
{
  name: 'green',
  background: '#C0FFB5' 
},
{
  name: 'yellow',
  background: '#FFE897' 
},
{
  name: 'blue',
  background: '#BFF0FF' 
},
{
  name: 'gray',
  background: '#FFE2D9' 
},
{
  name: 'orange',
  background: '#EFEFEF' 
},
])