import { useState } from "react"
import { MdSearch } from "react-icons/md";
import style from "./style.module.scss"

export const SearchForm = ({setSearch}) =>{
    const [value, setValue] = useState('')

    const submit = (e) =>{
        e.preventDefault()
        setSearch(value)
        setValue('')
    }
    return (
        <form className={style.form} onSubmit={submit}>
            <input className="input-medium" placeholder="Busque por um produto" type="text" value={value} onChange={(e)=>setValue(e.target.value)} required />
            <button className="btn" type="submit" ><MdSearch size={21} /></button>
        </form>
    )
}