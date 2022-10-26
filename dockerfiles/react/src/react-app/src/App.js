import './App.css';
import {useState,useRef} from "react"
import MesPr from './MesPr';



function App() {
  const [count, setCount] = useState([]);

  const nameRef = useRef();
  
  const add_mes = event => {
    event.preventDefault();
    const name = nameRef.current.value;
    if(name === "") return;
    
    setCount((prev) =>{
      let a = [...prev] 
      a.push(name)
      return(
        [...a]
      )
    });
    nameRef.current.value = null;
  }; 
   

  return (
    <div>
      <div>
        質問を入力してください。<br/>例<br/>-->夏休みはいつからですか？
        <MesPr mess={count} />
      </div>
        <form onSubmit={add_mes}>
          <input type="text" placeholder="質問を入力"ref={nameRef}/>
        </form>      
      <button onClick={add_mes}>送信 ＞ </button>
    </div>
  );
}

export default App;