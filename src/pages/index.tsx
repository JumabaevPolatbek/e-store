// import Image from 'next/image'
import type { NextPageWithLayout } from './_app'
import {ReactElement} from "react";
import {Layout} from "@/components/Layout/layout";
const Home:NextPageWithLayout=()=>{
  return (
      <div>Helo</div>
  )
}
Home.getLayout=function getLayout(page: ReactElement) {
  return (
     <Layout>
       {page}
     </Layout>
  )
}
export default  Home