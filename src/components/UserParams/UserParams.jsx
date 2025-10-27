import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, } from 'react-router-dom'

import "./UserParams.css"


export const UserParams = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [userParams, setUserParams] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(json => setUserParams(json)
            )
    }, [id]);


    

    const goBack = () => {
        navigate(-1)
    }


    return (
        <section>
            <div className="container">
                <div className="product">
                    <div>
                        <button className="userParamsBtn" onClick={goBack}>Go Back</button>
                        <div className="prodBox">
                            <div className="prodText">
                                <h1 className="prodTitle">{userParams?.name}</h1>
                                <li>{userParams?.email}</li>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
