import './App.css';
import Button from '@material-ui/core/Button'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import {nextWord, previousWord} from './Words';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <TextareaAutosize
          aria-label="German Word"
          placeholder="German Word"
          style={{ width: 500, height: 100, marginBottom: 20 }}
        />

        <TextareaAutosize
          aria-label="English Word"
          placeholder={this.state.name}
          
          style={{ width: 500, height: 100, marginTop: 20 }}
        />

        <Button variant="contained" onClick={previousWord}
        
          style={{ width: 200, height: 100, marginLeft: -300, marginTop: 40, display: 'inline-block' }}
        >Previous Word</Button>
        <Button variant="contained"  onClick={nextWord}
          style={{ width: 200, height: 100, marginLeft: 300, marginTop: -100, display: 'inline-block' }}

        >Next Word</Button>


      </header>
    </div>
  );
}

this.state = {
  name: "Hi"
};

export default App;
