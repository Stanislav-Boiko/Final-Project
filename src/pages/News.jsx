import React from "react";

export default function News() {
  return (
    <div
      style={{
        background: "#bbdefb",
        minHeight: "60vh",
        border: "2px solid #1976d2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: "1.5rem",
      }}
    >
      Контейнер сторінки News (ширина: 100%, висота: min 60vh)
    </div>
  );
}