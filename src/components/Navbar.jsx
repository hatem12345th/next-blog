import Link from "next/link"


 const Navbar = () => {
  return (
    <div className="bg-neutral-100 ">
    <div className="navbar bg-neutral-100 mx-auto w-[80%] ">
  <div className="flex-1 ">
    <Link className="btn btn-ghost lg:text-xl text-xl" href={'/'} > Icons  </Link>
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