import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import data from './data';

function App() {
  //console.log(data);

  const cards=data.map((card)=>{
      return (
        <Card item={card} key={card.id}/>
        //console.log(card)
      )
  });

  // console.log(cards);

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className="card-list">
        {cards}
      </div>
      
    </div>
  );
}

export default App;
