import { history, useNavigate } from "umi"
const About = () => {
  const navigate = useNavigate()
  return (
    <div>
      <p>About</p>
      <p style={{color:"red"}}>学习路由跳转的两种方式: history、useNavigate</p>
      <div>
        <button onClick={()=>history.back()}>返回</button>
        <button onClick={()=>history.push({pathname:"/information/hots?page=2&size=10"})}>history跳转到Hots</button>
        <button onClick={()=>navigate("/docs", {replace: true})}>navigate到Docs</button>
      </div>
    </div>
  )
}

export default About