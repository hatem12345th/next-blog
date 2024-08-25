import Link from "next/link"
import { PiBookOpenTextLight } from "react-icons/pi";


 const Navbar = () => {
  return (
    <div className="bg-neutral-100 ">
    <div className="navbar xl:px-[130px] bg-neutral-100 mx-auto  w-[80%] ">
  <div className="flex-1  ">
    <Link className="btn btn-ghost lg:text-xl text-xl" href={'/'} > 
    <PiBookOpenTextLight size={30} className="text-purple-800" />

      </Link>
  </div>
  <div className="flex-none">
   
    <Link  href={"/create"} className="btn lg:text-2xl text-xl btn-ghost" >       Create Post
    </Link>
  </div>
</div>
</div>
  )
}
export default Navbar