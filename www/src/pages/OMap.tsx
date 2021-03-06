import React from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import '../styles/pages/omap.css'


function OMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src= { mapMarkerImg } alt="Um ícone" />
                    <h2>Escolha um orfanato</h2>
                    <p>Muitas crianças estão esperando sua visita :)</p>
                </header>

                <footer>
                    <strong>Rio de Janeiro</strong>
                    <span>Rio de Janeiro</span>
                </footer>
            </aside>

           <Map
                center={[-27.2,-49.6]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
           >
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>

        </div>
    );
}

export default OMap;