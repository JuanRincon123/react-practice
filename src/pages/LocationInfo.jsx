import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import LocationCard from '../components/Home/Contact/Portfolio/Location/LocationCard'

const LocationInfo = () => {
  const baseUrl = 'https://rickandmortyapi.com/api'

  const [infoApi,getApi ] = useFetch(baseUrl)

  const { id } = useParams()

  useEffect(() => {
    getApi(`/location/${id}`)
  }, [id])

  console.log(infoApi)

  return (


    <div>
      <LocationCard  infoApi={infoApi} />
    </div>
  )
}

export default LocationInfo