// import logo from './logo.svg';
import './App.css';
import SwitchScreernshotTest001 from './assets/SwitchScreernshotTest001.png';
import SwitchCaptureTest001 from './assets/SwitchCaptureTest001.mp4';
import SomeExampleComponent from './SomeExampleComponent';

let someMessage = "Hello world!!!!";




function App() {
	const classFavouritePokemon = [
		"Bulbasaur",
		"Chikorita",
		"The water one",
		"Pikachu",
		"Squirtle",
		"Mankey",
		"Voltorb",
		"Poliwag",
		"Geodude",
		"Komala",
		"Snorlax",
		"Gumblesnorf"
	];
	

  return (
    <div className="App">
		<SomeExampleComponent />
      <header className="App-header">
        <h1>{someMessage}</h1>
		<img className="splatoonImage" src={SwitchScreernshotTest001} width={300}>
		</img>
		<video src={SwitchCaptureTest001} autoPlay={true} controls width={300} height={400}>
			Video not loading...
		</video>
      </header>
	  <div>
		<h2 style={{backgroundColor:'red'}} >Class Pokemon</h2>
		<ul>
			{classFavouritePokemon.map((pokemon, index) => (
				<li className='pokemon' key={index}>{pokemon}</li>
			))}
		</ul>
		</div>
    </div>

  );
}

export default App;
