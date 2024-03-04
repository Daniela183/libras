import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import Segunda from "../../img/palavras/segunda.png";
import Terca from "../../img/palavras/terca.png";
import Quarta from "../../img/palavras/quarta.png";
import Quinta from "../../img/palavras/quinta.png";
import Sexta from "../../img/palavras/sexta.png";
import Sabado from "../../img/palavras/sabado.png";
import Domingo from "../../img/palavras/domingo.png"

import Segundag from "../../img/gif/segunda.gif";
import Tercag from "../../img/gif/terca.gif";
import Quartag from "../../img/gif/quarta.gif";
import Quintag from "../../img/gif/quinta.gif";
import Sextag from "../../img/gif/sexta 2.gif";
import Sabadog from "../../img/gif/sabado.gif";
import Domingog from "../../img/gif/domingo.gif"


function Calendario() {
    const navigate = useNavigate();

    // Definir um array de objetos com as informações de cada imagem
    const images = [
        { id: 1, src: Segunda, gifSrc: Segundag },
        { id: 2, src: Terca, gifSrc: Tercag },
        { id: 3, src: Quarta, gifSrc: Quartag },
        { id: 4, src: Quinta, gifSrc: Quintag },
        { id: 5, src: Sexta, gifSrc: Sextag },
        { id: 6, src: Sabado, gifSrc: Sabadog },
        { id: 7, src: Domingo, gifSrc: Domingog },
    ];

    const [currentImage, setCurrentImage] = useState(images[0].src); // Inicializar com a primeira imagem

    const handleClick = (rota) => {
        navigate(rota);
    };

    const handleImageClick = (image) => {
        if (currentImage === image.src) {
            setCurrentImage(image.gifSrc);
        } else {
            setCurrentImage(image.src);
        }
    };

    return (
        <Box style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#aee2ff', minHeight: '100vh' }}>
            <Box style={{ display: 'dblock', width: 700, padding: 30 }}>
                <Typography style={{ borderRadius: '10px ', backgroundColor: '#8dc1ff', textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }} variant="body1" gutterBottom>Calendário</Typography>
                <Carousel interval={null} >
                    {images.map(image => (
                        <Carousel.Item key={image.id}>
                            <img
                                className="d-block w-100"
                                src={currentImage === image.src ? image.src : image.gifSrc}
                                alt="Image"
                                onClick={() => handleImageClick(image)}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Box>
            <Box style={{ display: 'flex', flexDirection: 'column', width: '250px', marginTop: '90px', rowGap: '8px' }}>
                <Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', columnGap: '5px', marginTop: '15px' }}>
                    <Button onClick={() => handleClick('/nivel-basico')} variant="contained" color="primary" >Voltar para nível básico</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Calendario;
