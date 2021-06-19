import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';
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
                        <div className="field">
                            <label htmlFor="name">Nome da entidade</label>
                            <input 
                                type="text" 
                                name="name"
                                id="name"
                            />
                        </div>
                        <div className="field-group">
                            <div className="field">
                                <label htmlFor="email">E-mail</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    id="email"
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="whatsapp">E-mail</label>
                                <input 
                                    type="text" 
                                    name="whatsapp"
                                    id="whatsapp"
                                />
                            </div>
                        </div>
                    </fieldset>
                    
                    
                    <fieldset>
                        <legend>
                            <h2>Endereço</h2>
                            <span>Marque o endereço no mapa</span>
                        </legend>
                        <Map center={[-23.0003709, -43.365895]} zoom={14}>
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[-23.0003709, -43.365895]} />
                        </Map>
                        <div className="field-group">
                            <div className="field">
                                <label htmlFor="city">Cidade</label>
                                <input 
                                    type="text" 
                                    name="city"
                                    id="city"
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="uf">Estado</label>
                                <input 
                                    type="text" 
                                    name="uf"
                                    id="uf"
                                />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>
                            <h2>Itens coletaos</h2>
                            <span>Você pode marcar um ou mais itens</span>
                        </legend>
                        <ul className="items-grid">
                            <li>
                                <img src="" alt="" />
                            </li>
                            <li className="selected">
                                <img src="" alt="" />
                            </li>
                            <li>
                                <img src="" alt="" />
                            </li>
                        </ul>
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