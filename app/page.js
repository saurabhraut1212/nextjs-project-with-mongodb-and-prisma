import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div >
      <h1 className="text-4xl">Home page</h1>
      <p className="py-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, alias non corrupti quas quisquam, quae est quidem nesciunt eum eligendi iusto deserunt. Ex nulla alias, laborum voluptas quia natus cum.</p>
      <Link href="/about">About page</Link>
    </div>
  )
}

export default HomePage