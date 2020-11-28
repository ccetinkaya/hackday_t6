import './App.css';
import Button from 'react-bootstrap/Button'
import Logo from "/pictures/shapemycity.jpg";



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





function App() {
  return (
    <div className="App">
	
      <text>
		<img src={Logo} />
        <h3>Shape my City (27 - 28. November 2020)</h3>
        <h2> Visitor quantification of cultural events in Lucerne</h2>
		
		<ColoredLine color="#0082c7" />
		<br></br>
		
		
        <h4> UNLOCK THE SECRETS WITH YOUR POSTCODE</h4>
		<p> Press the button of your postcode to access the secrets of today's event </p>
    
      </text>
      <br></br>
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
