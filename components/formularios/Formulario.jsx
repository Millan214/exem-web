import React from 'react'
import styled from "styled-components"
import { errors, useForm } from 'react-hook-form';
import { useState } from 'react';
import emailjs from 'emailjs-com';

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
    cursor: pointer;

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
  padding: 20%;

`;

const Formulario = () => {

  const frmContact = { nombre:', nombre:', email:', email:', telefono:', telefono:', curso:', curso:' };
  const [contact, setContact] = useState(frmContact);

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
    <form id="form" onSubmit={handleSubmit(onSubmit)} >
        <input type="text" name="nombre" id='nombre' {...register('nombre', 
          {required: true
          })}/>
          {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}

        <input type="text" name="apellidos" id='apellidos' {...register('apellidos', 
          {required: true
          })}/>
          {errors.apellidos?.type === 'required' && <p>El campo apellidos es requerido</p>}

        <input type="text" name="email" id='email' {...register('email',
          {required: true, pattern: /\S+@\S+\.\S+/
          })}/>
          {errors.email?.type === 'required' && <p>El campo email es requerido</p>}
          {errors.email?.type === 'pattern' && <p>El email es incorrecto</p>}
        <input type="text" name="telefono" id='telefono'{...register('telefono', 
          {required: true
          })}/>
          {errors.telefono?.type === 'required' && <p>El campo telefono es requerido</p>}

        <div>
        <label>Selecciona el curso que te interese</label>
        <select {...register('curso')}>
          <option value="Quiromasaje" name="quiro" id='quiro'>Quiromasaje</option>
          <option value="Reflexología" name="quiro" id='quiro'>Reflexología</option>
          <option value="Deportivo" name="quiro" id='quiro'>Deportivo</option>
          <option value="Talleres" name="quiro" id='quiro'>Talleres</option>
        </select>
        </div>

        <BotonForm>SOLICITAR INFORMACIÓN</BotonForm>
    </form>
  </div>
  )
}

export default Formulario