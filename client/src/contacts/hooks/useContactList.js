import {useEffect, useState} from 'react';
import {getAllContact} from '../services/contactService';

/**
 * Custom hook pour la liste de contacts.
 * @return {Object} les éléments accessible du hook
 */
function useContactListPage() {
  const [contactsList, setContactList] = useState([]);

  useEffect(()=>{
    getAllContact().then((data) => setContactList(data));
  }, []);

  return {contactsList};
}

export default useContactListPage;
