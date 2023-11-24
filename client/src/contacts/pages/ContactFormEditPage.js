import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getContactById, updateContact} from '../services/contactService';
import ContactForm from '../components/ContactForm';

/**
 * Formulaire d'édition de contact
 * @return {jsx}
 */
function ContactFormEditPage() {
  const [initialData, setInitialData] = useState();
  const {id} = useParams();
  const navigate = useNavigate();
  useEffect(()=>{
    getContactById(id).then((res)=>setInitialData(res));
  }, [id]);
  const submitAction = (data)=>{
    updateContact(data).then(()=>navigate('/contacts'));
  };
  if (!initialData) {
    return <p>Chargement en cours...</p>;
  }

  return (
    <>
      <h1>Formulaire de modifications de contact</h1>
      <ContactForm initialData={initialData} submitAction={submitAction} />
    </>
  );
}

export default ContactFormEditPage;
