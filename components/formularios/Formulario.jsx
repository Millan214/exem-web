import React from 'react'
import styled from "styled-components"
import { errors, useForm } from 'react-hook-form';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Titulo4 from '../titulos/Titulo4';

const SInput = styled.input`
    height: 20em;
`
const SError = styled.p`
  
`;

const BotonForm = styled.button`
    outline: none;
    border: none;
    background: var(--color2);
    color: var(--color1);
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: var(--shadow);
    font-size: 20px;
    font-weight: bold;;
    cursor: pointer;
    text-shadow: -1px 0 grey, 1px 0 grey, 0 1px grey, 0 -1px grey;

    ${ props => props.flat ? `border-radius: 0; box-shadow: none`:``};
    ${ props => props.borderBottom ? `border-bottom-left-radius: 10px; border-bottom-right-radius: 10px` : ``};
    ${ props => props.fullWidth ? `width: 100%` : ``};

    transition: transform .1s, background .4s;

    &:hover{
        background: var(--secundario);
    }

    &:active{
        transform: translateY(2px);
    }
`

const ContainerForm = styled.div`
  display: grid;
  grid-template-columns: 400px;
  line-height : 4em;
  justify-content: center;
  background-color: rgba(218, 118, 216, 0.6);
  width: 30em;
  height: 40em;
  border-radius: 2%;
  align-items: center;
  margin-top: 2.5em;
`;

const InputForm = styled.input`
  font-size: 20px;
  width: 20em;
  height: 2.5em;
  border: none;
  border-radius: 12px;
  padding: 7px 10px;
`;

const SelectForm = styled.select`
  font-size:20px;
  display: inline-block;
	width: 100%;
	cursor: pointer;
  padding: 7px 10px;
  height: 42px;
  outline: 0; 
  border: 0;
	color: #7b7b7b;
	/*font-size: 1em;
  border:2px solid rgba(0,0,0,0.2);*/
  border-radius: 12px;
  position: relative;
`;

const Form = styled.form`
 
`

const Formulario = () => {

  const frmContact = { nombre:', nombre:', email:', email:', telefono:', telefono:', curso:', curso:' };
  const [setContact] = useState(frmContact);

  const { register, formState: {errors}, handleSubmit } = useForm();

  const onSubmit = (data) =>{
    console.log(data)
    const frmContact = { nombre: data.nombre, email: data.email, telefono: data.telefono, curso: data.curso };
    
    console.log(frmContact)
      emailjs.send('service_9omzxg5','template_wcyhh5a', frmContact,'sWIdjc2pYZ9Zrgb9X').then(res=>{
        console.log(res);
        setContact(frmContact);
        alert("ENVIADO!")
      })
  }

  return (

  <div>
    <ContainerForm>
    <Form onSubmit={handleSubmit(onSubmit)} >
    <Titulo4>SOLICITAR OFERTA DE LANZAMIENTO</Titulo4>
        <InputForm type="text" name="nombre" id='nombre' placeholder="Nombre*" {...register('nombre', 
          {required: true
          })}/>
          {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}

        <InputForm type="text" name="apellidos" id='apellidos' placeholder="Apellidos*" {...register('apellidos', 
          {required: true
          })}/>
          {errors.apellidos?.type === 'required' && <p>El campo apellidos es requerido</p>}

        <InputForm type="text" name="email" id='email' placeholder="Correo electrónico*" {...register('email',
          {required: true, pattern: /\S+@\S+\.\S+/
          })}/>
          {errors.email?.type === 'required' && <p>El campo email es requerido</p>}
          {errors.email?.type === 'pattern' && <p>El email es incorrecto</p>}

        <InputForm type="text" name="telefono" id='telefono' placeholder="Teléfono*" {...register('telefono', 
          {required: true
          })}/>
          {errors.telefono?.type === 'required' && <p>El campo telefono es requerido</p>}

        <div>
        <label style={{fontSize: '20px'}}>Selecciona el curso que te interese:</label>
        
        <SelectForm {...register('curso')}>
          <option value="Quiromasaje">Quiromasaje</option>
          <option value="Reflexología">Reflexología</option>
          <option value="Deportivo">Deportivo</option>
          <option value="Tailandes">Tailandés</option>
          <option value="Talleres">Talleres</option>
        </SelectForm>
        </div>

        <BotonForm>SOLICITAR INFORMACIÓN</BotonForm>
    </Form>
    </ContainerForm>
  </div>
 
  )
}

export default Formulario