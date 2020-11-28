import './App.css';
import Button from 'react-bootstrap/Button'

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 1,
          borderColor : '#000000'
          
      }}
  />
);

var myHeaders = new Headers(); myHeaders.append("Content-Type", "application/json");
var raw = JSON.stringify({"event":"HackDay Shape my City - 2020","plz":"6000"});
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

function App() {

  return (
    <div className="App">
	
      <text>

        <h3>Shape my City (27 - 28. November 2020)</h3>
        <h2> Visitor quantification of cultural events in Lucerne</h2>
		
		<ColoredLine color="#0082c7" />
		<br></br>
		
        <h4> UNLOCK THE SECRETS WITH YOUR POSTCODE</h4>
		<p> Press the button of your postcode to access the secrets of today's event </p>
    
      </text>
      <br></br>
      <text style={{fontWeight: "bold"}}>Please tap on your postal code</text>
      <br></br> 
      <br></br>
      <Button onClick={() => fetch('http://127.0.0.1:5000/visitorcount/add',{method: "POST", headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({event: 'Hackday', plz: '6002'})})}>6002</Button>
      <Button onClick={() => fetch('http://127.0.0.1:5000/visitorcount/add',{method: "POST", headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({event: 'Hackday', plz: '6003'})})}>6003</Button>
      <Button onClick={() => fetch('http://127.0.0.1:5000/visitorcount/add',{method: "POST", headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({event: 'Hackday', plz: '6004'})})}>6004</Button>
      <Button onClick={() => fetch('http://127.0.0.1:5000/visitorcount/add',{method: "POST", headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({event: 'Hackday', plz: '6010'})})}>6010</Button>
      <Button onClick={() => fetch('http://127.0.0.1:5000/visitorcount/add',{method: "POST", headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({event: 'Hackday', plz: '6011'})})}>6011</Button>
      <Button onClick={() => fetch('http://127.0.0.1:5000/visitorcount/add',{method: "POST", headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({event: 'Hackday', plz: '6012'})})}>6012</Button>
      <Button onClick={() => fetch('http://127.0.0.1:5000/visitorcount/add',{method: "POST", headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({event: 'Hackday', plz: '6013'})})}>6013</Button>
      <Button onClick={() => fetch('http://127.0.0.1:5000/visitorcount/add',{method: "POST", headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({event: 'Hackday', plz: '6020'})})}>6020</Button>
      <Button onClick={() => fetch('http://127.0.0.1:5000/visitorcount/add',{method: "POST", headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({event: 'Hackday', plz: '6030'})})}>6030</Button>
      <Button onClick={() => fetch('http://127.0.0.1:5000/visitorcount/add',{method: "POST", headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({event: 'Hackday', plz: '6032'})})}>6032</Button>
      <Button onClick={() => fetch('http://127.0.0.1:5000/visitorcount/add',{method: "POST", headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({event: 'Hackday', plz: '4402'})})}>4402</Button>
      <Button onClick={() => fetch("http://127.0.0.1:5000/visitorcount/add",{method: "POST", headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({'event': 'Hackday', 'plz': '4414'})})}>4414</Button>
      <Button onClick={() => fetch("http://127.0.0.1:5000/visitorcount/add",{method: "POST", headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({"event": "Hackday", "plz": "4415"})})}>4415</Button>
      <Button onClick={() => fetch("http://127.0.0.1:5000/visitorcount/add", requestOptions)
                                .then(response => response.text())
                                .then(result => console.log(result))
                                .catch(error => console.log('error', error))
                              }>44xx</Button>
    <button type="button" className="btn btn-info">Others</button>{' '}
	  <Button variant="secondary">I am an outsider from a place far far away</Button>{' '}
    </div>
    );
}

export default App;
