import './App.css';
import * as data from './data.json';
import FilterableProductTable from './src/FilterableProductTable/FilterableProductTable';

function App() {
  return (
    <div className="App">
      <FilterableProductTable props={data}/>
    </div>
  );
}

export default App;
