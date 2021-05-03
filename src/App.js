import './App.css';
import image from './images/imageInSrc.jpg';


function App() {
  return (
    <div className="App">
      <nav>
        <a href={`#Home`}>Home</a>
        <a href={`#Services`}>Services</a>
        <a href={`#Contact`}>Contact</a>
        <a href={`#About`}>About</a>
      </nav>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Akrimi Rabeh</h1>
          <br/>
          <img src={`/image/imageInPublic.jpg`} />
          <br/>
          <img src= {image} />
        </div>
        <video width={600} height={240} controls>
          <source src={`/GOMYCODE.mp4`} />
        </video>
    </div>
  );
}


export default App;
