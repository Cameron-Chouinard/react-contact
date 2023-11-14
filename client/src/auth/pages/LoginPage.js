import {useState} from 'react';
import {Button, Container, Form} from 'react-bootstrap';

/**
 * Page login
 * @return {jsx} page login
 */
function LoginPage() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  /**
   * Binding du formulaire et du state
   * @param {{name:String, value:'String'}} target
   */
  function handleChange({name, value}) {
    setData( (prev) => ({...prev, [name]: value}));
  }

  return (
    <Container>
      <h1>Page de connexion</h1>
      <h2>Veuillez vous connecter avec un identifiant</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Addresse courriel</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
            value={data.email} name='email'
            onChange={(e)=> handleChange(e.target)}/>
          <Form.Text className="text-muted">
          Votre mot de passe est entre de bonnes mains
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="Password"
            value={data.password} name='password'
            onChange={(e)=> handleChange(e.target)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
        Soumettre
        </Button>
      </Form>
    </Container>
  );
}

export default LoginPage;

