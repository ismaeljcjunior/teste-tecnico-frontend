import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, CardContent, Container, Grid, Typography, Box } from '@mui/material'
import { IGetDataProps } from '../../shared/interfaces/interfces'

export const Home = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsloading] = useState(Boolean)
    const [error, setError] = useState(null)
    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/countries',
        headers: {
            'X-RapidAPI-Key': '6f2ae44f3cmshbae04e2361cc544p12df67jsncfd1d44ba611',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.request(options)
                console.log(response.data.response)
                setData(response.data.response)
                setIsloading(false)
                console.log('------------------', data)
            } catch (e) {
                console.error(e)
                setIsloading(false)
            }
        }
        fetchData()
    }, [])


    return (
        <>
            <Container>
                <Box>
                    <Typography variant="h2" component="div" color='#DCDCDC'>
                        Escolha seu time
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        data.map((country: IGetDataProps) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={country.code}>
                                <Card style={{ width: '200px', height: '180', backgroundColor: '#696969' }}>
                                    <CardContent>
                                        <Typography variant="h5" component="div" color='#DCDCDC'>
                                            {country.name}
                                        </Typography>
                                        <img src={country.flag} alt={country.name + ' flag'} style={{ width: '50px', height: '50px' }} />
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    )}
                </Grid>
            </Container>
        </>
    )
}