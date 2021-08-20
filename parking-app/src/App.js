import React from 'react'
import NavAndRouting from './component/navAndRouting/NavAndRouting';
import { GlobalStateProvider } from './contexApi/Context';
function App() {
  return (
    <GlobalStateProvider>
      <NavAndRouting />
    </GlobalStateProvider>
  );
}

export default App;
