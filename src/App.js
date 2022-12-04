import './App.css';
import ConditionalRender from './components/ConditionalRender';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import LearnHook from './components/LearnHook';

function App() {
  return (
    <div className="App">
      <h1 className='text-3xl font-bold underline mb-8'>Hello</h1>
      {/* <Counter /> */}
      {/* <LearnHook /> */}
      {/* <ConditionalRender /> */}
      <FetchData />
    </div>
  );
}

export default App;
