import React, { useState } from "react";
import "./styles.css";

const FormularioAnalisis = () => {
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

  // Cálculos
  const calcularResultadoBromuro = () => {
    const { mlBromuro, normalidadKBrO3KBr, pesoMuestra } = datos;
    if (mlBromuro && normalidadKBrO3KBr && pesoMuestra) {
      return ((mlBromuro * normalidadKBrO3KBr * 68) / pesoMuestra).toFixed(2);
    }
    return "N/A";
  };

  const calcularRendimientoConPulpa = () => {
    const { pesoJugoConPulpa, pesoBandejaLimones } = datos;
    if (pesoJugoConPulpa && pesoBandejaLimones) {
      return ((pesoJugoConPulpa / pesoBandejaLimones) * 100).toFixed(2);
    }
    return "N/A";
  };

  const calcularRendimientoSinPulpa = () => {
    const { pesoJugoSinPulpa, pesoBandejaLimones } = datos;
    if (pesoJugoSinPulpa && pesoBandejaLimones) {
      return ((pesoJugoSinPulpa / pesoBandejaLimones) * 100).toFixed(2);
    }
    return "N/A";
  };

  const calcularAcidez = () => {
    const { volumenGastado, normalidadNaOH, pesoMuestraJugo } = datos;
    if (volumenGastado && normalidadNaOH && pesoMuestraJugo) {
      return (
        (volumenGastado * normalidadNaOH * 0.049) / pesoMuestraJugo * 100
      ).toFixed(2);
    }
    return "N/A";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos cargados:", datos);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Formulario de Análisis de Limones</h1>

      {/* Campos del Formulario */}
      <label>
        Finca o empaque:
        <input
          type="text"
          name="fincaoempaque"
          value={datos.fincaoempaque}
          onChange={handleChange}
        />
      </label>
      <label>
        Tipo de Fruta:
        <select name="tipoFruta" value={datos.tipoFruta} onChange={handleChange}>
          <option value="">Seleccione</option>
          <option value="convencional">Convencional</option>
          <option value="organica">Orgánica</option>
          <option value="AF">AF</option>
        </select>
      </label>
      <label>
        Hora de Volcado:
        <input
          type="time"
          name="horaVolcado"
          value={datos.horaVolcado}
          onChange={handleChange}
        />
      </label>
      <label>
        Hora de Muestreo:
        <input
          type="time"
          name="horaMuestreo"
          value={datos.horaMuestreo}
          onChange={handleChange}
        />
      </label>
      <label>
        Nombre del quimico:
        <input
          type="text"
          name="nombrequimico"
          value={datos.nombrequimico}
          onChange={handleChange}
        />
      </label>
      <label>
        Toneladas:
        <input
          type="number"
          name="toneladas"
          value={datos.toneladas}
          onChange={handleChange}
        />
      </label>
      <label>
        Número de Remito:
        <input
          type="text"
          name="numeroRemito"
          value={datos.numeroRemito}
          onChange={handleChange}
        />
      </label>
      <label>
        Peso de Valde:
        <input
          type="number"
          name="pesoValde"
          value={datos.pesoValde}
          onChange={handleChange}
        />
      </label>
      <label>
        Cantidad de Limones en Valde:
        <input
          type="number"
          name="cantidadLimonesEnValde"
          value={datos.cantidadLimonesEnValde}
          onChange={handleChange}
        />
      </label>
      <label>
        Cantidad de Pequeños:
        <input
          type="number"
          name="cantidadPequenos"
          value={datos.cantidadPequenos}
          onChange={handleChange}
        />
      </label>
      <label>
        Peso de Pequeños:
        <input
          type="number"
          name="pesoPequenos"
          value={datos.pesoPequenos}
          onChange={handleChange}
        />
      </label>
      <label>
        Cantidad de Podridos:
        <input
          type="number"
          name="cantidadPodridos"
          value={datos.cantidadPodridos}
          onChange={handleChange}
        />
      </label>
      <div style={{ marginTop: "20px", padding: "10px", background: "#f2f2f2", borderRadius: "5px" }}>
        <strong>Gramaje de la fruta:</strong> {datos.pesoValde && datos.cantidadLimonesEnValde ? (datos.pesoValde / datos.cantidadLimonesEnValde).toFixed(2) : "N/A"} g
      </div>
      <label>
        Peso de Muestra:
        <input
          type="number"
          name="pesoMuestra"
          value={datos.pesoMuestra}
          onChange={handleChange}
        />
      </label>
      <label>
        Normalidad de KBrO3/KBr:
        <input
          type="number"
          name="normalidadKBrO3KBr"
          value={datos.normalidadKBrO3KBr}
          onChange={handleChange}
        />
      </label>
      <label>
        ML Gastado de Bromuro/Bromato:
        <input
          type="number"
          name="mlBromuro"
          value={datos.mlBromuro}
          onChange={handleChange}
        />
      </label>

      {/* Salida del cálculo relacionado con Bromuro/Bromato */}
      <div style={{ marginTop: "20px", padding: "10px", background: "#f0f0f0", borderRadius: "5px" }}>
        <strong>Resultado Bromuro/Bromato:</strong> {calcularResultadoBromuro()}
      </div>

      <label>
        Peso de Bandeja de Limones:
        <input
          type="number"
          name="pesoBandejaLimones"
          value={datos.pesoBandejaLimones}
          onChange={handleChange}
        />
      </label>
      <label>
        Peso de Jugo con Pulpa:
        <input
          type="number"
          name="pesoJugoConPulpa"
          value={datos.pesoJugoConPulpa}
          onChange={handleChange}
        />
      </label>
      <div style={{ marginTop: "20px", padding: "10px", background: "#e6f7ff", borderRadius: "5px" }}>
        <strong>Rendimiento con Pulpa:</strong> {calcularRendimientoConPulpa()}%
      </div>

      <label>
        Peso de Jugo sin Pulpa:
        <input
          type="number"
          name="pesoJugoSinPulpa"
          value={datos.pesoJugoSinPulpa}
          onChange={handleChange}
        />
      </label>
      <div style={{ marginTop: "20px", padding: "10px", background: "#ffe6e6", borderRadius: "5px" }}>
        <strong>Rendimiento sin Pulpa:</strong> {calcularRendimientoSinPulpa()}%
      </div>
      <label>
        Brix:
        <input
          type="number"
          name="Brix"
          value={datos.brix}
          onChange={handleChange}
        />
      </label>
      <label>
        Peso de muestra de jugo:
        <input
          type="number"
          name="pesoMuestraJugo"
          value={datos.pesoMuestraJugo}
          onChange={handleChange}
        />
      </label>
      <label>
        Normalidad de NaOH:
        <input
          type="number"
          name="normalidadNaOH"
          value={datos.normalidadNaOH}
          onChange={handleChange}
        />
      </label>
      <label>
        Volumen Gastado (NaOH):
        <input
          type="number"
          name="volumenGastado"
          value={datos.volumenGastado}
          onChange={handleChange}
        />
      </label>
      <div style={{ marginTop: "20px", padding: "10px", background: "#fff8db", borderRadius: "5px" }}>
        <strong>Acidez:</strong> {calcularAcidez()}%
      </div>

      <button type="submit">Guardar Datos</button>
    </form>
  );
};

export default FormularioAnalisis