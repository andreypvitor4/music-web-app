import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { search, getTrendTracks } from '../../store/fetchOptions/fetchOptions.actions';
import { homePageClickReset } from '../../store/HomePageToggle/HomePageToggle.actions';
import { RiSearch2Line } from 'react-icons/ri'
import { FormContainer, SearchIcon, SearchInput, Border1, Border2 } from './styles'

export default function Search() {
  const [input, setInput] = useState('');
  const [setBorder, setSetBorder] = useState(false);
  const inputRef = useRef()

  const dispatch = useDispatch()

  function handleHomePageClickReset() {
    dispatch(homePageClickReset())
  }

  function handleSubmit(e) {
    e.preventDefault()

    if(input.length === 0) return dispatch(getTrendTracks())
    dispatch(search(input))
  }

  return (
    <div>
      <FormContainer setBorder={setBorder} onSubmit={handleSubmit}>
        <Border1></Border1>
        <Border2 setBorder={setBorder}></Border2>
        <SearchInput 
          type="text" 
          placeholder="Pesquise por album, artista ou música" 
          onFocus={() => {setSetBorder(true)}} 
          onBlur={() => {setSetBorder(false)}} 
          ref={inputRef}
          value={input}
          onChange={e => {setInput(e.target.value)}}
          onClick={handleHomePageClickReset}
        />
        <SearchIcon setBorder={setBorder} onClick={() => {setSetBorder(true); inputRef.current.focus()}}> <RiSearch2Line /> </SearchIcon>
      </FormContainer>
    </div>
  )
}