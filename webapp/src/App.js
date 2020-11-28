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
var raw = JSON.stringify({"event":"HackDay: Shape my City","plz":"6000"});
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
      <Button variant="primary">6010</Button>{' '}
      <Button variant="success">6011</Button>{' '}
      <Button variant="warning">6012</Button>{' '}
      <Button variant="success">6013</Button>{' '}
      <Button variant="warning">6020</Button>{' '}
      <Button variant="success">6030</Button>{' '}
      <Button variant="warning">6032</Button>{' '}
      <Button onClick={() => fetch("http://127.0.0.1:5000/visitorcount/add",{method: "POST", headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({event: 'Hackday', plz: '4422'})})}>4402</Button>
      <Button onClick={() => fetch("http://127.0.0.1:5000/visitorcount/add",{method: "POST", headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({'event': 'Hackday', 'plz': '4414'})})}>4414</Button>
      <Button onClick={() => fetch("http://127.0.0.1:5000/visitorcount/add",{method: "POST", headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({"event": "Hackday", "plz": "4415"})})}>4415</Button>
      <Button onClick={() => fetch("http://127.0.0.1:5000/visitorcount/add", requestOptions)
                                .then(response => response.text())
                                .then(result => console.log(result))
                                .catch(error => console.log('error', error))
                              }>44xx</Button>
    <button type="button" className="btn btn-info">Others</button>{' '}
    <Button variant="secondary">6002</Button>{' '}
    <Button variant="secondary">6003</Button>{' '}
    <Button variant="secondary">6004</Button>{' '}
    <Button variant="secondary">6005</Button>{' '}
    <Button variant="secondary">6006</Button>{' '}
    <Button variant="secondary">6010</Button>{' '} 
    <Button variant="secondary">6011</Button>{' '}
    <Button variant="secondary">6012</Button>{' '}
    <Button variant="secondary">6014</Button>{' '}
    <Button variant="secondary">6015</Button>{' '}
    <Button variant="secondary">6020</Button>{' '}
    <Button variant="secondary">6030</Button>{' '}
    <Button variant="secondary">6032</Button>{' '}
    <Button variant="secondary">6047</Button>{' '} 
    <Button variant="secondary">6048</Button>{' '}
    <Button variant="secondary">I am an outsider from a place far far away</Button>{' '}
    </div>
    );
}

export default App;
