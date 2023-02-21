import { Link, Outlet } from "umi"
export default function Information() {
  return (
    <div>
     <p>this is Information page</p>
     <p style={{color:"red"}}>学习嵌套路由/子路由</p>
     <div>
      <Link to="/information/news">News</Link> &nbsp;&nbsp;
      <Link to="/information/hots?page=1&size=10">Hots</Link>
     </div>
     <Outlet />
    </div>
  )
}
