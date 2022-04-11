import React from 'react'
import { dehydrate, QueryClient } from 'react-query'
import { fetchPages, usePages } from "../libs/pages"

export default function Home() {

  const { data } = usePages()

  console.log(data);

  return (
    <div className="flex">
      <p className="text-3xl font-bold underline">Home</p>
    </div>
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['pages'], () => fetchPages())

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}