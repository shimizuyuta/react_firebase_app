import './App.css';
import './service/firebase';
import Header from './components/Header';
import {  AuthProvider } from './providers/AuthProvider'
import DashBoard from './components/Dashboard';

function App() {
  return (
   <AuthProvider>
         <div className="App">
      <Header/>
      <DashBoard/>

    </div>
   </AuthProvider>
  );
}

export default App;
