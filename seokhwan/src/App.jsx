import { useContext } from "react";
import { ToastContext } from "./context/ToastContext";

const App = () => {
  const { showToast } = useContext(ToastContext);
  return <button onClick={() => showToast('토스트 뿅!')}>Show Toast</button>
};

export default App;