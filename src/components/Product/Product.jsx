import { useParams, useNavigate } from "react-router-dom"

import "./Product.css"

export const Product = ({ post }) => {
    const { id } = useParams()
    const navigate = useNavigate()

    const prod = post.find((elm) => elm.id === +id)

    const goBack = () => {
        navigate(-1)
    }

    return (

        <section>
            <div className="container">
                <div className="product">
                    <div>
                        <button className="prodBtn" onClick={goBack}>Go Back</button>
                        <div className="prodBox">
                            <img className="prodImg" src={prod.image} alt="" />
                            <div className="prodText">
                                <h1 className="prodTitle">{prod.title}</h1>
                                <li>{prod.description}</li>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>




    )
}
