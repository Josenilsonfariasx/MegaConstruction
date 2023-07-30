import style from "./style.module.scss"

export const ItemCard = ({product}) =>{
    let price = product.price
    return(
        <li  className={style.bookCard}>
            <div>
                <h3 className="title2">{product.name}</h3>
                <p className="paragraph">{product.category}</p>
            </div>
            <span className="paragraph bold">{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
        </li>
    )
}