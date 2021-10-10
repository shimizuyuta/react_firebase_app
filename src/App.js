import './App.css';
import './service/firebase';
import Header from './components/Header';
import {  AuthProvider } from './providers/AuthProvider'
import DashBoard from './components/Dashboard';
import Footer from './components/footer';

function App() {
  return (
   <AuthProvider>
      <div className="App">
      <Header/>
      <DashBoard/>
      <Footer/>
    </div>
   </AuthProvider>
  );
}

export default App;
