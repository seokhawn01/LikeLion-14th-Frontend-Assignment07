import { useContext,useEffect } from "react";
import { ToastContext } from "./context/ToastContext";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const { showToast } = useContext(ToastContext);
  const { loading,result,error,errorMessage} = useFetch("/posts")

  useEffect (() => {
    if (result) showToast("불러오기 성공!")
  },[result])

  useEffect (() => {
    if (loading) showToast("로딩중")
  },[loading])

    useEffect (() => {
    if (error) showToast("에라에라!")
  },[error])

  return <button onClick={() => showToast('!')}>Show Toast</button>

};

export default App;