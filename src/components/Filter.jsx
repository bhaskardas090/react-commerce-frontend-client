import React from 'react'
import styled from 'styled-components'
const Filter = ({setFilters, setSort, filters}) => {
  const handleFilter = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    })
  } 

  const handleSort = (e) => {
    setSort(e.target.value);
  }

  const handleClick = (e) => {
    e.target[0].disabled = true;

  }

  return (
    <FilterContainer>
      <FilterPart>
        <Title>Filter Products:</Title>
        <Choice name="colors" onChange={handleFilter} onClick={handleClick}>
          <Select>Color</Select>
          <Select value="yellow">Yellow</Select>
          <Select value="red">Red</Select>
          <Select value="orange">Orange</Select>
        </Choice>
        <Choice name="size" onChange={handleFilter} onClick={handleClick}>
          <Select>Size</Select>
          <Select value="m">M</Select>
          <Select value="l">L</Select>
          <Select value="xl">XL</Select>
        </Choice>
      </FilterPart>
      <SortPart>
        <Title>Sort Products:</Title>
        <Choice name="sort" onChange={handleSort} onClick={handleClick}>
          <Select >Sort</Select>
          <Select value="newest">Newest</Select>
          <Select value="asc">Price(asc)</Select>
          <Select value="desc">Price(desc)</Select>
        </Choice>
      </SortPart>
    </FilterContainer>
  )
}

export default Filter

const FilterContainer = styled.div`
  display: flex;
  justify-content : space-between ;
  margin: 20px;
`
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 900;
`
const Choice = styled.select`
  width: 120px;
  height: 4.5 rem;
  padding: 1rem;
  padding-right: 1rem;
  font-size: 1.4rem;
`
const Select = styled.option`
  font-size: 1.6rem;
`



// TODO FilterPart Style
const FilterPart = styled.div`
  display: flex;
  align-items: center;
  gap:20px;
`


// TODO SortPart Style
const SortPart = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`