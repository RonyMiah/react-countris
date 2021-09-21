import './App.css';
import Countris from './components/Countryall/Countris';
import Footer from './components/Footer/Footer';




function App() {
  return (
    <div className="App">
      
    <Countris></Countris>
    <Footer></Footer>
      
    </div>
  );
}



























/* 

function Countris(){
  const [countris, setCountris]=useState([]);
  useEffect( ()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountris(data));
  } , [])
return(
  <div>
    <h2>Traveling All Wrold !! </h2>
    <h4>Countris Avaleavle: {countris.length} </h4>
    {
      countris.map(country=> <Country name={ country.name }region={country.region} ></Country>)
    }
  </div>
)

}
function Country (props){
  return(
    <div>
      <h2>Country Name : {props.name}</h2>
      <p>Region : {props.region}</p>
      
    </div>
  )
}
 */



export default App;
