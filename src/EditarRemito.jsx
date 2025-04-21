import React, { useState, useEffect } from "react";

const EditarRemito = ({ remito, onGuardar, onVolver }) => {
    // Definimos todos los datos como estado inicial
    const [datos, setDatos] = useState({
        fincaoempaque: "",
        nombrequimico: "",
        toneladas: "",
        tipoFruta: "",
        horaVolcado: "",
        horaMuestreo: "",
        numeroRemito: "",
        pesoValde: "",
        cantidadLimonesEnValde: "",
        cantidadPequenos: "",
        pesoPequenos: "",
        cantidadPodridos: "",
        pesoMuestra: "",
        mlBromuro: "",
        normalidadKBrO3KBr: "",
        normalidadNaOH: "",
        pesoBandejaLimones: "",
        pesoJugoConPulpa: "",
        pesoJugoSinPulpa: "",
        brix: "",
        pesoMuestraJugo: "",
        volumenGastado: "",
        cantidadLimones: "",
        cantLimonesChicos: "",
        cantLimonesMedianos: "",
        cantLimonesGrandes: "",
        cantManchados: "",
        cantBlandos: "",
        cantPodridos: "",
        cantAmarillos: "",
        cantAmarilloVerdozo: "",
        cantVerdes: "",
    });

    // Poblamos el formulario con los datos del remito seleccionado
    useEffect(() => {
        if (remito) {
            setDatos(remito);
        }
    }, [remito]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatos({ ...datos, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onGuardar(datos); // Envía los datos actualizados
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Editar Remito</h1>

            <button
                type="button"
                onClick={onVolver}
                style={{
                    backgroundColor: "#6c757d",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginBottom: "20px",
                }}
            >
                Volver al Listado
            </button>

            {/* Generamos campos para todos los datos, excepto el campo "id" */}
            {Object.keys(datos)
                .filter((campo) => campo !== "id") // Excluir "id" del listado
                .map((campo) => (
                    <label key={campo} style={{ display: "block", marginBottom: "10px" }}>
                        {
                            campo === "mlBromuro" && "ml gastados KBrO3KBr" ||
                            campo.replace(/([a-z])([A-Z])/g, "$1 $2") // Mejorar legibilidad
                        }:
                        <input
                            type="text"
                            name={campo}
                            value={datos[campo]}
                            onChange={handleChange}
                            style={{ width: "100%", padding: "5px", borderRadius: "5px" }}
                        />
                    </label>
                ))}

            <button type="submit" style={{ marginTop: "20px" }}>
                Guardar
            </button>
        </form>
    );
};

export default EditarRemito;