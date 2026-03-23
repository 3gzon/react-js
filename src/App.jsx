
import './App.css'
import WelcomeComponent from "./components/WelcomeComponent";
import StatusMessage from "./components/StatusMessage";
import StudentsList from "./components/StudentsList";

function App() {

  return (
    <>
      <WelcomeComponent isLoggedIn={false} />
      <StatusMessage isOnline={true} />
      <StudentsList />
    </>
  )
}

export default App
