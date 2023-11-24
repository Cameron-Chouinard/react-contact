import {useContext} from 'react';
import {Button, Container, Form} from 'react-bootstrap';
import {login} from '../services/authService';
import {AuthContext} from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';
import useForm from '../../_misc/hooks/useForm';

/**
 * Page login
 * @return {jsx} page login
 */
function LoginPage() {
  const {setIsAuth} = useContext(AuthContext);
  const navigate = useNavigate();

  const submitAction = () => {
    login(data.email, data.password).then((isConnected) => {
      setIsAuth(isConnected);
      navigate('/');
    });
  };

  const {data, handleChange, handleSubmit} = useForm({
    email: '',
    password: '',
  }, submitAction);

  return (
    <Container>
      <h1>Page de connexion</h1>
      <h2>Veuillez vous connecter avec un identifiant</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Addresse courriel</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
            value={data.email} name='email'
            onChange={(e)=> handleChange(e.target)}/>
          <Form.Text className="text-muted">
          Nice email, wow so cool!
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Password"
            value={data.password} name='password'
            onChange={(e)=> handleChange(e.target)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
        Se connecter
        </Button>
      </Form>
    </Container>
  );
}

export default LoginPage;
