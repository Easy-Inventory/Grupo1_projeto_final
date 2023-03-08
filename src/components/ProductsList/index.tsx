import { StyledProductsListContainer } from "./style"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import { ProductCard } from "../ProductCard"
import { useContext } from "react"
import { ProductsContext } from "../../provides/ProductsContext"

export const ProductsList = () => {

    const {} = useContext(ProductsContext)

    return (
        <StyledProductsListContainer>
            <div className="pagination">
                <button> <AiOutlineArrowLeft /> </button>
                <p>Nº</p>
                <button> <AiOutlineArrowRight /> </button>
            </div>

            <ul className="productList">
                {false ? (
                    <h2>Nenhum produto foi cadastrado</h2>
                ) : (
                    <>
                        {}
                    </>
                )}

            </ul>

        </StyledProductsListContainer>
    )
}