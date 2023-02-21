import { connect, useDispatch } from "@umijs/plugins/libs/dva"
import { useEffect } from "react"
 function News({listNews}:any) {

  let dispatch = useDispatch()

  useEffect(()=>{
    !(async ()=>{
      dispatch({
        type:"news/initNewsAction",
        payload: {
          page: 1,
          size:10
        }
      })
    })()
  }, [])

  console.log("page listNews: ", listNews)

  return (
    <div>news</div>
  )
}

const mapModelToProps = state => {
  return {
    // state.模块.具体数据
    listNews: state.news.listNews
  }
}

export default connect(mapModelToProps)(News)