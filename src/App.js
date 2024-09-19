import logo from './logo.svg';
import './App.css';
import Toast from './components/Toast';
import Wrapper from './components/Wrapper';
import { library } from '@fortawesome/fontawesome-svg-core'
//import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTrash, faArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add( faTrash, faArrowRight)

function App() {
  
  return (
    <div className="App">
      <Toast/>
      <Wrapper/>
    </div>
  );
}

export default App;
