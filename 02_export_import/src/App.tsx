import './App.css'

// ------------- default export 처리하기 
import Post from "./components/Post.tsx"
import Member from "./components/User.tsx"

// ------------- named export 처리하기 
// 중괄호 안 import
// 내보낸 이름과 동일한 이름으로 import
// 이름을 바꾸고 싶다면 as 키워드 활용 
import { PI } from "./api/calculate";
import { getArea } from './api/calculate';
import { feature as f } from './api/calculate';


function App() {

  return (
    <>
      <Post/>
      <Member/>
      <div>{PI}</div>
      <div>{getArea(10)}</div>
      <div>{f.add(1,5)}</div>
      <div>{f.sub(10,5)}</div>
      <div>{f.mul(5,5)}</div>
      <div>{f.div(10,50)}</div>
    </>
  )
}

export default App
