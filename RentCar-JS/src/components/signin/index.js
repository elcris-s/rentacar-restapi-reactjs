import React, {useState, useEffect} from 'react'
import Video from '../../videos/video1.mp4'
import {
    Container,
    HeroBg,
    VideoBg,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
} from './signinElements'
import {useHistory} from 'react-router-dom'
import Cookies from 'universal-cookie';

function Login(props){

    let history = useHistory();
    const baseUrl = "https://localhost:44336/api/UserLogins";
    const cookies = new Cookies();

    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const handleChange= e => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const iniciarSesion=async()=>{
        if(form.username === 'cristejeda33' && form.password === '12345'){
            cookies.set('id', '1', {path: '/'});
            cookies.set('IdUsuario', '402-4044264-6', {path: '/'});
            cookies.set('IdRol', '1', {path: '/'});
            cookies.set('Usuario', 'cristejeda33', {path: '/'});
            cookies.set('Contraseña', '1234', {path: '/'});
            history.push('/admin');
        }
        else if(form.username === 'emil' && form.password === 'naruto'){
            cookies.set('id', '3', {path: '/'});
            cookies.set('IdUsuario', 'b', {path: '/'});
            cookies.set('IdRol', '3', {path: '/'});
            cookies.set('Usuario', 'emil', {path: '/'});
            cookies.set('Contraseña', 'naruto', {path: '/'});
            history.push('/cliente')
        }

    }

      useEffect(()=>{
        if(cookies.get('id')){
          history.push('/admin');
        }
          },[]);
    return ( 
        <> 
         <> 
        <Container>
        <Icon to="/">Rentacar</Icon> 

            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg> 
            <FormWrap> 

                <FormContent> 
                <Form action="#"> 
                        <FormH1>Inicio de Sesion</FormH1> 
                        <FormLabel htmlFor='for'>Usuario</FormLabel> 
                        <FormInput name='username' type='text' onChange={handleChange} required/> 
                        <FormLabel htmlFor='for'>Contraseña</FormLabel> 
                        <FormInput name='password' type='password' onChange={handleChange} required/> 

                        <FormButton type='submit' onClick={()=>iniciarSesion()}>Iniciar</FormButton>     
                         
                    </Form> 
                </FormContent>                
            </FormWrap> 
        </Container> 
        </>   
        </> 
    ) 
}

export default Login