import Link from "next/link"

export const FormPost = () => {
  return (
    <div className=" px-[260px]   ">

      <Link   
        className="btn btn-ghost text-2xl"
        href={"/"}
      >  
         <span> {"< "} </span> Back
      </Link>

      <div className=" w-full flex  flex-col  justify-center items-center mt-10 ">
        
        <h1 className="text-3xl  font-semibold "> Add  new post  </h1>

        <input type="text " placeholder="Post title " className="mt-10 px-10 border-black input w-full input-bordered max-w-lg " />
        <textarea className="textarea textarea-bordered mt-6 border-black max-w-lg w-full " placeholder="Bio"></textarea>

        <select className="select select-bordered   w-full max-w-lg border-black mt-10 ">
  <option disabled selected className="bg-[#E4E4E4]">  Select tag</option>
  <option  className="bg-[#E4E4E4]" >  Javascript </option>
  <option  className="bg-[#E4E4E4]" >  Python  </option>
  <option  className="bg-[#E4E4E4]" > Java  </option>
</select>

    <button className="text-2xl btn btn-primary w-full text-white font-bold  max-w-lg  mt-10">   Create    </button>


      </div>






    </div>
  )
}
