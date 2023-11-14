import './App.css';
import {Container} from 'react-bootstrap';
import {useContext} from 'react';
import {AuthContext} from './auth/context/AuthContext';
import {Route, Routes} from 'react-router-dom';
import HomePage from './_misc/pages/HomePage';
import WelcomePage from './_misc/pages/WelcomePage';
import LoginPage from './auth/pages/LoginPage';
import NavigationBar from './_misc/components/NavigationBar';

/**
 * composant racine de l'application
 * @return {jsx}
 */
function App() {
  const {isAuth} = useContext(AuthContext);
  return (
    <div className="App">
      <NavigationBar />
      <Container>
        <Routes>
          {
            isAuth ? (
              <Route path='' element={ <WelcomePage/>}/>
            ) : (
              <>
                <Route path='' element={ <HomePage/>}/>
                <Route path='login' element={ <LoginPage/>}/>
              </>
            )
          }
        </Routes>
      </Container>
    </div>
  );
}

export default App;
