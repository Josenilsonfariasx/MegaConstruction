import { productsContrution } from "../../../data/products"
import { ItemCard } from "./ItemCard/ItemCard"

import styles from "./style.module.scss"

export const ItemList = ({search, array}) =>{
    return (
        <div className={styles.booksListBox}>
            <span className="paragraph bold">Produtos listados: {array.length}</span>
            {search ? <p className="paragraph bold">Resultados de busca por: {search}</p> : null}
            {array.length > 0 ?(
                <ul className={styles.booksList}>
                    {array.map(product =>(
                        <ItemCard key={product.id} product={product}/> 
                        ))}
                </ul>
            ): (
                <p className="paragraph bold">Nenhum Resultado na busca</p>
            )}
        </div>
    )
}