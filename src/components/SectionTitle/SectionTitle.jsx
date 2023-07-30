import style from "./style.module.scss";
export const SectionTitle = () =>{
    return (
        <section className={style.titleSection}>
            <div className="container">
                <h1 className="title1 white">Tudo para sua Construção</h1>
            </div>
        </section>
    )
}