import { useEffect, useState } from 'react'
import { Component } from 'react'
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Jumbotron,
  Row,
} from 'react-bootstrap'

interface SearchandSongsProps {
  title: string
}

interface Song {
  title: string
  description: string
  price: string
  imageUrl: string
  id: number
}

const SearchandSongs = ({ title }: SearchandSongsProps) => {
  const [data, setData] = useState<Song[]>([])
  console.log('this is clg of data', data)

  useEffect(() => {
    const fetchData = async () => {
      // let's say we're doing a fetch...
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/search?q=queen'
      )
      let songs = await response.json()
      songs = songs.data //this is returning an array of songs
      setData(songs)
      console.log('this is  jason response songs', songs)
    }
    fetchData()
  }, [])

  return (
    <main>
      <section>
        <Jumbotron className="text-center mt-5">
          <h1>Search for a song!</h1>
          <Form>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            {/* <Button
              onClick={() => setName('Stefano')}
              size="lg"
              variant="outline-success"
              className="mt-3"
            >
              Search
            </Button> */}
          </Form>
        </Jumbotron>
      </section>
      <Container>
        <Row>
          {/* {
            {data.map( s => (
              <>
              <Col className="col-md-4">
                <h4>{s.title}</h4>
              </Col>
              </>
            ))
            }            
          } */}
        </Row>
      </Container>
    </main>
  )
}

export default SearchandSongs
