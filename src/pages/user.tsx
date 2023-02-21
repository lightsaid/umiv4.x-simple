import React, { useEffect } from 'react'
import { useParams } from "umi"
import { getListUsers } from "@/services/users"
export default function User() {
  const param = useParams()
  console.log(location)

  useEffect(() => {
    getListUsers({page: 1, size: 10}).then(data=>{
      console.log(data)
    })

    // async 写法
    !(async () => {
      let data = await getListUsers({ page: 1, size: 10 })
      console.log(data)
    })()

  }, [])



  return (
    <div>user:{param?.id}</div>
  )
}
