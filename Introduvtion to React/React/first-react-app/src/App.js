// import logo from './logo.svg';
import './App.css';
import Avatar from './components/Avatar';
import Card from './components/Card'; // by using control space


const gridBox = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
};

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div style={gridBox}>
    <Card
      name="Shivam"
      email="shivambaranwal267@gmail.com"
      image="https://via.placeholder.com/200"
    />
    <Card
      name="Suraj"
      email="shivamal267@gmail.com"
      image="https://via.placeholder.com/200"
    />
    <Card
      name="Satyam"
      email="shivambaranwal@gmail.com"
      image="https://via.placeholder.com/200"
    />
    <Card
      name="Chand"
      email="abc123@gmail.com"
      image="https://via.placeholder.com/200"
    />
    <Avatar name="Random" image="https:/via.placeholder.com/200" />
  </div>
  );
}

export default App;
