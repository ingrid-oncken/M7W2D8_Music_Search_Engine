import { useEffect, useState } from 'react'
import { Component } from 'react'
import { Button, Form, FormControl, Jumbotron } from 'react-bootstrap'

interface FunctionalComponentProps {
  title: string
 
}

interface Book {
  title: string
  // description: string
  // imageUrl: string
  // id: number
}

const SearchandSongs = () => {


  return (
    <main>
      <section>
        {/* JUMBOTRON SEARCH */}
        <Jumbotron className="text-center mt-5">
          <h1>Search for a song!</h1>
          {/* <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p> */}

          <Form>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button
              onClick={() => this.setState({})}
              size="lg"
              variant="outline-success"
              className="mt-3"
            >
              Search
            </Button>
          </Form>
        </Jumbotron>
      </section>
    </main>
  )
}

export default SearchandSongs
