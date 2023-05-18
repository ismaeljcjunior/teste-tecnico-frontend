import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from '@mui/material'
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
                {isLoading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <ul>
                        {data.map((country: IGetDataProps) => (
                            <li key={country.code}>
                                {country.name}
                                <img src={country.flag} alt={country.name + ' flag'} />
                            </li>
                        ))}
                    </ul>
                )}
            </Container>
        </>
    )
}