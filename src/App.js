import React from 'react';
import './App.css';
import Child from './Child';
import {TransactionProvider} from './transcationContext';
function App() {
  return (
    <TransactionProvider>
      <Child />
    </TransactionProvider>
  );
}

export default App;
