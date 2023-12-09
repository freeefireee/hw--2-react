import {useState} from 'react';
import axios from 'axios';
import './style.css';


const Form = ({data, setData}) => {
    const [cityName, setCityName] = useState('');

    const getData = (city) => {
        let Key = 'f4833cf990dc92ef43563c9b00da2a78';
        let APILink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}`;
        axios (APILink)
        .then(({data})=> {
          console.log(data);
          setData(data);
        });
      }
    
    return (
        <div className='container2'>
               <input type="text" placeholder="введите город" onChange={(event) =>{
        setCityName(event.target.value);
      }} />
      <button className="button-33" role="button" onClick={()=> {
        getData(cityName)
      }}>get weather</button>
        </div>
    );
}

export default Form;
