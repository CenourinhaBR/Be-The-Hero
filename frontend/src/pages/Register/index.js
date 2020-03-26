import React, {  useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

import LogoImg from '../../assents/logo.svg';




export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, SetCity] = useState('');
    const [uf, setUF] = useState('');
    
    const history = useHistory();


   async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try {
            const response = await api.post('ongs', data)
            
        alert(`Seu ID de acesso: ${response.data.id}`);
        history.push('/');

        } catch (error) {
            alert(`Erro ao Registrar`);
            console.log(error);
        }
        
    };
    
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={LogoImg } alt='Be the Hero'></img>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#E02041" /> Ja tenho cadastro
                </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input placeholder="nome da ONG" value={name} onChange={e => setName(e.target.value)}></input>
                    <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)}></input>
                    <input placeholder="WhatsApp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}></input>
                    <div className="div input-group">
                    <input placeholder="Cidade" value={city} onChange={e => SetCity(e.target.value)}></input>
                    <input placeholder="UF" value={uf} onChange={e => setUF(e.target.value)} style={{ width: 80 }}></input>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}