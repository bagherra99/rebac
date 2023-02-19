/* eslint-disable no-unused-vars */
/* eslint-disable no-template-curly-in-string */
import About from './components/About';
import AboutSecond from './components/AboutSecond';
import Header from './components/Header';
import Main from './components/Main';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <About/>
      <AboutSecond/>
      <Team/>
    </div>
  );
}

export default App;
