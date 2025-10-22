import { useParams,useNavigate } from "react-router-dom"

export const Product = ({ post }) => {
    const { id } = useParams()
    const navigate = useNavigate()

    const prod = post.find((elm) => elm.id === +id)

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <button onClick={goBack}>Go Back</button>
        <div><img src={prod.image} alt="" /></div>
        </div>
    )
}
