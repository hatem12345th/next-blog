import Link from 'next/link'
import React from 'react'

export const PostCard = () => {
  return (
    <div className="card bg-base-100 w-90 lg:w-80 xl:w-[460px]  shadow-2xl ">
    <div className="card-body">
      <h2 className="card-title">Card title!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <Link href={"/blog/1"} className="btn btn-primary btn-outline  ">  Read more...  </Link>
      </div>
    </div>
  </div>
  )
}
