import { DefaultTemplate } from "../../components/DefaultTemplate/DefaultTemplate"
import { MainSection } from "../../components/MainSection/MainSection"
import { SectionTitle } from "../../components/SectionTitle/SectionTitle"

export const HomePage = () =>{
    return (
        <DefaultTemplate>
            <SectionTitle />
            <MainSection />
        </DefaultTemplate>
    )
}