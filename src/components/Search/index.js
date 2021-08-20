import { useState, useRef } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { FormContainer, SearchIcon, SearchInput, Border1, Border2 } from './styles'

export default function Search() {
  const [setBorder, setSetBorder] = useState(false);
  const inputRef = useRef()

  return (
    <div>
      <FormContainer setBorder={setBorder}>
        <Border1></Border1>
        <Border2 setBorder={setBorder}></Border2>
        <SearchInput type="text" placeholder="Pesquisar" onFocus={() => {setSetBorder(true)}} onBlur={() => {setSetBorder(false)}} ref={inputRef} />
        <SearchIcon setBorder={setBorder} onClick={() => {setSetBorder(true); inputRef.current.focus()}}> <RiSearch2Line /> </SearchIcon>
      </FormContainer>
    </div>
  )
}