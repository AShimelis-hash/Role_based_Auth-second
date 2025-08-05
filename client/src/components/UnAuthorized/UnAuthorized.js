import { useNavigate }  from  "react-router-dom";
import React from 'react';

const UnAuthorized = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <section className="unauthorized">
            <h2>Unauthorized Access</h2>
            <p>You do not have permission to view this page.</p>
            <button onClick={goBack}>Go Back</button>
        </section>
    );
}

export default UnAuthorized;