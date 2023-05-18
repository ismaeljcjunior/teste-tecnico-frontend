import { Container, Box, Button, TextField } from '@mui/material';



export const PageLogin = () => {

    return (
        <>
            <Container
                maxWidth="sm"
                sx={{
                    height: '50vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid black', 
                    backgroundColor: '#f5f5f5', 
                    borderRadius: '5px'
                }}
            >
                <Box
                    textAlign="center"
                    sx={{
                        width: '100%',
                        padding: '0 16px',
                    }}
                >
                    <TextField
                        label="Digite a key"
                        variant="outlined"
                        sx={{
                            marginBottom: '16px',
                            width: '100%',
                        }}
                    />
                    <Button variant="contained" color="primary">
                        Clique aqui
                    </Button>
                </Box>
            </Container>
        </>
    )

}