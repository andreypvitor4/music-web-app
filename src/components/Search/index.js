import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { RiSearch2Line } from 'react-icons/ri'
import { searchOption, getTrendTracksOption } from '../../store/fetchOptions/fetchOptions.actions';
import { FormContainer, SearchIcon, SearchInput, Border1, Border2 } from './styles'

export default function Search() {
  const [searchInput, setSearchInput] = useState('');
  const [changeBorderColor, setChangeBorderColor] = useState(false);
  const inputRef = useRef()

  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()

    if(searchInput.length === 0) return dispatch(getTrendTracksOption())
    dispatch(searchOption(searchInput))
  }

  function handleSearchIconClick() {
    setChangeBorderColor(true)
    inputRef.current.focus()
  }

  return (
    <div>
      <FormContainer setBorder={changeBorderColor} onSubmit={handleSubmit}>
        <Border1></Border1>
        <Border2 setBorder={changeBorderColor}></Border2>
        <SearchInput 
          type="text" 
          placeholder="Pesquise por album, artista ou música" 
          onFocus={() => {setChangeBorderColor(true)}} 
          onBlur={() => {setChangeBorderColor(false)}} 
          ref={inputRef}
          value={searchInput}
          onChange={e => {setSearchInput(e.target.value)}}
        />
        <SearchIcon setBorder={changeBorderColor} onClick={handleSearchIconClick}> <RiSearch2Line /> </SearchIcon>
      </FormContainer>
    </div>
  )
}