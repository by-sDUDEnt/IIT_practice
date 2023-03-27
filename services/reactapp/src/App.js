import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"

function App() {

  const [service1state, service1SetState] = useState("");
  const [service2state, service2SetState] = useState("");
  useEffect(() => {
    fetch('http://localhost:6015/')
        .then((response) => {
          console.log(response)
            return response.text();
        })
        .then((data) => {
            service1SetState(data);
        })
        .catch((err) => {
      service1SetState("nothing")
      console.log(err)
    });
  }, []);

  useEffect(() => {
    fetch('http://localhost:6015/wow')
        .then((response) => {
          console.log(response)
            return response.text();
        })
        .then((data) => {
            service2SetState(data);
        })
        .catch((err) => {
      service1SetState("nothing")
      console.log(err)
    });
  }, []);

  return (
    <div className="App">
      YEap this is {service1state}
      YEap this is {service2state}

      
    </div>
  );
}

export default App;
