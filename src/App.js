
import {useState} from "react"
import Form from './Form'
import Table from "./Table"

function App() {
  const [data, setData] = useState({})
 
  return (

    <div>
   <Form data = {data} setData = {setData} />
   <Table data = {data} />
   

    </div>
  );
}

export default App;
