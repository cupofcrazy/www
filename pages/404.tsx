import { Marquee } from "components/Marquee";
import { NavLink } from "components/NavLink";

export default function PageNotFound() {
  return (
    <>
      <Marquee>404 - Page Not Found</Marquee>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p>Go to</p> <span style={{ marginLeft: '.15rem' }}><NavLink href="/">Home</NavLink></span>
      </div>
    </>
  )
}