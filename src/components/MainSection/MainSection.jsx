import { useState } from "react"
import { ItemList } from "./ItemList/ItemList"
import { Filters } from "./Filters/Filters"
import { productsContrution } from "../../data/products"

import style from "./style.module.scss"


export const MainSection = () =>{
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("")
    const [min, setMin] = useState('')
    const [max, setMax] = useState('')

    const resultSearch = productsContrution.filter((product) =>{
        const searchFilter = search === "" ? true :
        product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
        product.category.toLocaleLowerCase().includes(search.toLocaleLowerCase())

        const categoryFilter = category === "" ? true : product.category === category

        const minFilter = min === "" ? true : product.price > Number(min)
        const maxFilter = max === "" ? true : product.price <= Number(max)
        return searchFilter && categoryFilter && minFilter && maxFilter
    })

    const cleanFilters = ()=>{
        setSearch('')
        setCategory('')
        setMin('')
        setMax('')
    }

    return (
        <section>
            <div className="container">
                <div className={style.flexBox}>
                <Filters cleanFilters={cleanFilters} setSearch={setSearch} setCategory={setCategory} min={min} setMin={setMin} max={max} setMax={setMax}/>
                <ItemList search={search} array={resultSearch}/>
                </div>
            </div>
        </section>
    )
}