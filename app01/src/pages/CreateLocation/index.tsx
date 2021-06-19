import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/logo.svg'; 

const CreateLocation: React.FC = () => {
    return (
        <div id="page-create-location">
            <div className="content">
                <header>
                    <img src={logo} alt="Coleta Seletiva" />
                    <Link to="/">
                        <FiArrowLeft />
                        Voltar para home
                    </Link>
                </header>
                <form>
                    <h1>Cadastro do <br /> local de coleta</h1>

                    <fieldset>
                        <legend>
                            <h2>Dados</h2>
                        </legend>
                    </fieldset>

                    <fieldset>
                        <legend>
                            <h2>Endereço</h2>
                            <span>Marque o endereço no mapa</span>
                        </legend>
                    </fieldset>

                    <fieldset>
                        <legend>
                            <h2>Itens coletaos</h2>
                            <span>Você pode marcar um ou mais itens</span>
                        </legend>
                    </fieldset>

                    <button type="submit">
                        Cadastrar local de coleta
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateLocation;