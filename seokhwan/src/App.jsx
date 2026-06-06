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
    <div className="min-h-screen bg-stone-100 p-8">
    <h1 className="text-4xl font-bold text-stone-800 text-center mb-6">게시글 대시보드</h1>
    <div className="max-w-2xl mx-auto grid grid-cols-2 gap-4 p-6">
      {data?.slice(0,4).map((post) => (
        /* aspect-square을 정사각형으로 사용했습니다 */
        <div key={post.id} className="bg-white border border-stone-300
        rounded-xl p-5 aspect-square overflow-hidden hover:shadow-xl hover:shadow-stone-300
        transition-shadow duration-300"> 
        <h2 className="font-bold text-stone-800 mb-2 text-1xl">{post.title}</h2>
        <p className="text-xs text-stone-500">{post.body}</p>
    </div>
  ))}
</div>
</div>
  )
}

export default App;