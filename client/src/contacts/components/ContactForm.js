import {Button, Form} from 'react-bootstrap';
import useForm from '../../_misc/hooks/useForm';

/**
 * Formulaire de modifications et d'ajout de contacts.
 * @return {jsx}
 */
function ContactForm({initialData, submitAction}) {
  const {data, handleChange, handleSubmit} = useForm(initialData,
      ()=>submitAction(data));
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="text" placeholder="Nom"
          value={data.name} name='name'
          onChange={(e)=> handleChange(e.target)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Addresse courriel</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
          value={data.email} name='email'
          onChange={(e)=> handleChange(e.target)}/>
        <Form.Text className="text-muted">
          Nice email, wow so cool!
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Téléphone</Form.Label>
        <Form.Control type="phone" placeholder="Téléphone"
          value={data.phone} name='phone'
          onChange={(e)=> handleChange(e.target)}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Valider
      </Button>
    </Form>
  );
}

export default ContactForm;
