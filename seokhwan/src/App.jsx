import { useContext,useEffect } from "react";
import { ToastContext } from "./context/ToastContext";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const { showToast } = useContext(ToastContext);
  const { loading,data,error,errorMessage} = useFetch("/posts")

  useEffect (() => {
    if (data) showToast("불러오기 성공!")
  },[data])

    useEffect (() => {
    if (error) showToast(errorMessage)
  },[error])

  if (loading) return <p>로딩 중...</p>

  return (
    <div className="grid grid-cols-2 gap-4 p-6">
      {data?.slice(0,4).map((post) => (
        /* aspect-square을 정사각형으로 사용했습니다 */
        <div key={post.id} className="border rounded-lg p-4 aspect-square
        overflow-hidden"> 
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </div>
  ))}
</div>
  )
}

export default App;