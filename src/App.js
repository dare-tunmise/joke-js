import logo from './logo.svg';
import Header from './Header';
import Joke from './Joke';
import jokesData from './jokesData';


function App() {
  const jokesElements = jokesData.map((joke)=>{
    return <Joke setup={joke.setup} punchline = {joke.punchline} />
  })
  return (
      <div>
        {jokesElements}
      </div>
  );
}

export default App;


{/* <div className="container">
                  
<Joke 
    setup= "I got my daughter a fridge for her borthday." 
    punchline ="I can't wait to see her face light up when she opens it." 
/>
<Joke 
    setup="How did the hacker escape the police?" 
    punchline ="He just ransomware!"
/>
<Joke 
    setup="why don't pirates travel on mountai roads?" 
    punchline ="Scurvy!"
/>
<Joke 
    setup="why do bees stay in the hive in the winter?" 
    punchline ="Swarm!"
/>
<Joke 
    setup="what is the best thing about switzerland?" 
    punchline ="I don't know, but the flag is a big plus"
/>
</div> */}
