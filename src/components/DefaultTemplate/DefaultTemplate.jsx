import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"

export const DefaultTemplate = ({children}) =>{
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}