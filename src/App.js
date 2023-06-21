import './App.css';
import LoginForm from './components/LoginForm';
// import LeftSideBar from './components/LeftSideBar';

function App() {
  return (
    <div className="app" backgroundImage="url('C:\Users\Vinita Yadav\OneDrive\Desktop\signup\demo\src\components\bg.webp')">
      <div className='side-bar'>
        <LoginForm />
      </div>
      {/* <LeftSideBar/> */}
    </div>
  );
}

export default App;
