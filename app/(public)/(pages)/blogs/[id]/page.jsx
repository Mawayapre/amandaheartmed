import React from 'react'
import TopSection from './components/topsection'
import Details from './components/details'
import Blogs from '../../../components/blogs'


const Page = ({ params }) => {
  return (
    <div>
        <TopSection id={Number(params.id)} />
        <Details id={Number(params.id)} />
        <Blogs />
    </div>
  )
}

export default Page