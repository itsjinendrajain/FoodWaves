import React, { Fragment } from 'react'
import ListAlphabet from './ListAlphabet'
import ListCountry from './ListCountry'
// import RandomMeal from './RandomMeal'
import SearchButton from './SearchButton'

const Index = () => {
  return (
    <Fragment>
      <SearchButton />
      <ListCountry />
      <ListAlphabet />
    </Fragment>
  )
}

export default Index