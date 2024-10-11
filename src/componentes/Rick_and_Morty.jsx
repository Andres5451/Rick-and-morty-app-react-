import { useEffect, useState } from "react";
import { getAllCharacters } from "../componentes/servicios/rymService";
import { Modal, Box, Typography } from '@mui/material';

const CharacterModal = ({ character, open, onClose }) => {
    if (!character) return null;

    const boxProps = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={boxProps}>
                <Typography variant="h4" component="h2">
                    {character.name}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    Status: {character.status}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    Origin: {character.origin.name} {}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    Location: {character.location.name} {}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    species: {character.species}
                </Typography>
                <img
                    src={character.image}
                    alt={character.name}
                    style={{ width: '100%', marginTop: '2rem' }}
                />
            </Box>
        </Modal>
    );
};

export default function RickAndMorty() {
    const [data, setData] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const apiURL = "https://rickandmortyapi.com/api";

    useEffect(() => {
        async function fetchData() {
            const url = apiURL + '/character';
            let response = await getAllCharacters(url);
            console.log(response);
            setData(response.results);
        }
        fetchData();
    }, []);

    const handleOpenModal = (character) => {
        setSelectedCharacter(character);
    };

    const handleCloseModal = () => {
        setSelectedCharacter(null);
    };

    return (
        <div>
            <h1>Lista de personajes</h1>
            <ul>
                {data.map((element) => (
                    <li key={element.id}>
                        <h2>{element.name}</h2>
                        <p>name: {element.name}</p>
                        <p>Species: {element.species}</p>
                        <p>Status: {element.status}</p>
                        <p>Origin: {element.origin.name}</p> { }
                        <p>Location: {element.location.name}</p> { }
                        <img
                            src={element.image}
                            alt={element.name}
                            onClick={() => handleOpenModal(element)}
                            style={{ cursor: 'pointer' }}
                        />
                    </li>
                ))}
            </ul>
            <CharacterModal
                character={selectedCharacter}
                open={!!selectedCharacter}
                onClose={handleCloseModal}
            />
        </div>
    );
}


