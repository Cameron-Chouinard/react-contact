
import {Button, ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import useContactList from '../hooks/useContactList.js';

/**
 * Page liste de contacts.
 * @return {jsx}
 */
function ContactListPage() {
  const {contactsList} = useContactList();

  return (
    <>
      <h1>Liste des contacts</h1>
      <ListGroup>
        {contactsList.map((elt) =>
          (<ListGroup.Item key={elt.id}>
            <Link to={`/contacts/${elt.id}`}>
              {elt.name}
            </Link>
          </ListGroup.Item>))}
      </ListGroup>
      <Button variant="primary" type="submit">
        Ajouter
      </Button>
    </>
  );
}

export default ContactListPage;
