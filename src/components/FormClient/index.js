import './formclient.css';
import TextInput from '../TextField';
import ListSuspen from '../ListSuspen';
import DefaultButton from '../DefaultButton';
import { useState } from 'react';

// This component is used to create a form for the user to fill in the data of the colaborators card
// The form has a button to create the card

// The form has the following fields: name, position, image and team
const FormClient = (props) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');

  // The form has a submit event that calls the toSave function
  const toSave = (event) => {
    event.preventDefault();
    props.toExpoNewAdd({
      name,
      position,
      image,
      team,
    });
    setName('');
    setPosition('');
    setImage('');
    setTeam('');
  };

  return (
    <section className="formulario">
      <form onSubmit={toSave}>
        <h2> Fill the form with the data to create the colaborators card</h2>
        <TextInput
          FormRequired={true}
          label="Music Name"
          placeholder="Type your name here"
          InputValue={name}
          toChange={(value) => setName(value)}
        />
        <TextInput
          FormRequired={true}
          label="Album"
          placeholder="Type your position here"
          InputValue={position}
          toChange={(value) => setPosition(value)}
        />
        <TextInput
          label="Album Image"
          placeholder="Type link address of your image here"
          InputValue={image}
          toChange={(value) => setImage(value)}
        />
        <ListSuspen
          FormRequired={true}
          label="Categories"
          itens={props.teams}
          InputValue={team}
          toChange={(value) => setTeam(value)}
        />

        <div className="form-client-image">
          {image && <img src={image} alt="Preview" />}
        </div>
        <p className="form-client-text">
          The image will be shown in the card preview
        </p>

        <DefaultButton type="submit"> Create Card </DefaultButton>
      </form>
    </section>
  );
};

export default FormClient;
