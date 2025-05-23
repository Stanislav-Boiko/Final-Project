import React from 'react';
import AddUserButton from '../components/Button/Button';

const Profil = () => {
    return (
        <div style={{
            background: "#fab3d3",
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "1.5rem",
        }}>
            <h1>Профиль</h1>
            <AddUserButton />
        </div>
    );
};

export default Profil;