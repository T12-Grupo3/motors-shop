import { useContext } from "react"
import Footer from "../../components/Footer"
import NavBar from "../../components/NavBar"
import ProductCardAuction from "../../components/ProductCardAuction"
import { AuthContext } from "../../Context/AuthProvider"
import EditAdvertModal from "../../modals/EditAdvertModal"
import RegisterAdvertModal from "../../modals/RegisterAdvertModal"
import { StyledAuction, StyledProductsContainer } from "../home/style"
import { ContainerNavProfile, ContainerUserProfile, StyledContainerProfile } from "./style"

const ProfileView = () =>{
    const {auctions} = useContext(AuthContext)

    return (
        <>
            <NavBar />
            <ContainerNavProfile/>
                <ContainerUserProfile>
                    <div className="imgProfile">
                        <img className="imgProfile" src="https://i.im.ge/2023/02/23/7u52PC.foto-perfil.png" alt="" />
                    </div>
                    <div className="divName">
                        <p className="profileName">Marcus Roberto</p>
                        <p className="paragraphAdvertiser">Anunciante</p>
                    </div>
                    <p className="textProfile">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis voluptatem animi molestiae quisquam nemo pariatur ipsa consequuntur quaerat? Dolorum deserunt est quaerat officiis. Deserunt doloremque, aliquid temporibus praesentium laboriosam nostrum?</p>
                    <RegisterAdvertModal />
                    <EditAdvertModal />

            </ContainerUserProfile>

            <StyledContainerProfile>
                <StyledProductsContainer>
                    <h5>Leilão</h5>
                    <StyledAuction>
                    {auctions.map(
                        ({
                        description_adverts,
                        price_adverts,
                        title_adverts,
                        user,
                        year_adverts,
                        kilometers_adverts,
                        }) => (
                        <ProductCardAuction
                            description_adverts={description_adverts}
                            kilometers_adverts={kilometers_adverts}
                            price_adverts={price_adverts}
                            title_adverts={title_adverts}
                            year_adverts={year_adverts}
                            user={user}
                        />
                        )
                    )}
                    </StyledAuction>
                </StyledProductsContainer>
            </StyledContainerProfile>
            <Footer/>
        </>
    )
}

export default ProfileView