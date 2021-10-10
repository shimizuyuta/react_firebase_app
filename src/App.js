import './App.css';
import './service/firebase';
import Header from './components/Header';
import {  AuthProvider } from './providers/AuthProvider'

function App() {
  return (
   <AuthProvider>
         <div className="App">
      <Header/>

    </div>
   </AuthProvider>
  );
}

export default App;
