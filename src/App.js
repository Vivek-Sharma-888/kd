import "./App.css"
import {useState} from "react"
import Modal from "./component/Modal";


function App() {
  const [show,setShow] = useState(false)
  return (
    <>
    <div className=" relative px-3 py-3">
      <button className="px-3 border-2 border-red-600 bg-slate-600 transition-[1s]" onClick={()=>setShow(!show)}>Login</button>
      <div className="fixed left-1/2 top-1/2 " >
       {show? <Modal/> : null}
      </div> 
    </div>
    <table style={{border:"1px solid black",borderCollapse:"collapse"}}>
      <tr>
        <th>X</th>
        <th>Y</th>
        <th>Z</th>
      </tr>
      <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
      </tr>
    </table>


      </>  
  );
}

export default App;
