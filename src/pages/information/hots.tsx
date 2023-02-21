import React from 'react'
import { useSearchParams } from "umi"
export default function Hots() {
    const [ searchParams, setSearchParams ] = useSearchParams()
    let page = searchParams.get("page")
    let size = searchParams.get("size")
    console.log("queryString: ", page, size)
    return (
        <div>hots</div>
    )
}
