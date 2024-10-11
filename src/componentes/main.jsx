import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

export default function Main() {
    return (
        <>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Página principal
                </Typography>
                <Box sx={{ mt: 4 }}>
                    <img
                        src="https://rickandmortyapi.com/icons/icon-512x512.png"
                        alt="Rick and Morty"
                        style={{ width: '200px', borderRadius: '50%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                    />
                </Box>
                <Box sx={{ mt: 4 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        component={Link}
                        to="/rym"
                        sx={{ textTransform: 'none', mt: 2 }}
                    >
                        Ir a la lista de personajes
                    </Button>
                </Box>
            </Box>
        </>
    );
}
