import logo from './logo.svg';
import './App.css';
import Todo from './Components/todo'
import { Container } from 'reactstrap';
import UserManagement from './Components/userManagement';
import Calculator from './Components/calculatorComponent';

function App() {
  return (
    <Container>
   {/* <UserManagement/> */}
   <Calculator/>
   </Container>
  );
}

export default App;
