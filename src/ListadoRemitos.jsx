import React from "react";
import jsPDF from "jspdf";

const ListadoRemitos = ({ remitos, onAgregar, onEditar, onBorrar }) => {
  // Función para generar el PDF con cada remito separado por su número de remito como título
  const generarPDFConTitulos = () => {
    // Crear el documento PDF
    const doc = new jsPDF();

    // Título general del documento
    doc.setFontSize(18);
    doc.text("Listado de Remitos", 14, 20);

    // Iniciar posición vertical
    let y = 40;

    // Iterar sobre los remitos para agregar sus datos
    remitos.forEach((remito, index) => {
      // Título del remito
      doc.setFontSize(14);
      doc.text(`Número de Remito: ${remito.numeroRemito || "N/A"}`, 14, y);
      y += 5;

      // Datos del remito
      doc.setFontSize(12);
      doc.text(`Finca o Empaque: ${remito.fincaoempaque || "N/A"}`, 14, y);
      doc.text(`Químico: ${remito.nombrequimico || "N/A"}`, 100, y);
      y += 4;
      doc.text(`Toneladas: ${remito.toneladas || "N/A"}`, 14, y);
      doc.text(`Tipo de Fruta: ${remito.tipoFruta || "N/A"}`, 100, y);
      y += 4;
      doc.text(`Hora de Volcado: ${remito.horaVolcado || "N/A"}`, 14, y);
      doc.text(`Hora de Muestreo: ${remito.horaMuestreo || "N/A"}`, 100, y);
      y += 4;
      doc.text(`Peso de Valde: ${remito.pesoValde || "N/A"}`, 14, y);
      doc.text(`Cantidad de fruta: ${remito.cantidadLimonesEnValde || "N/A"}`, 100, y);
      y += 4;
      doc.text(`frutas chicas: ${remito.cantidadPequenos || "N/A"}`, 14, y);
      doc.text(`peso de frutas chicas: ${remito.pesoPequenos || "N/A"}`, 100, y);
      y += 4;
      doc.text(`podridos: ${remito.cantidadPodridos || "N/A"}`, 14, y);
      doc.text(`peso de muestra: ${remito.pesoMuestra || "N/A"}`, 100, y);
      y += 4;
      doc.text(`ml gastados: ${remito.mlBromuro || "N/A"}`, 14, y);
      doc.text(`normalidad KBrO3KBr: ${remito.normalidadKBrO3KBr || "N/A"}`, 100, y);
      y += 4;
      doc.text(`normalidad NaOH: ${remito.normalidadNaOH || "N/A"}`, 14, y);
      doc.text(`peso bandeja de limones: ${remito.pesoBandejaLimones || "N/A"}`, 100, y);
      y += 4;
      doc.text(`peso jugo c/p: ${remito.pesoJugoConPulpa || "N/A"}`, 14, y);
      doc.text(`peso jugo s/p: ${remito.pesoJugoSinPulpa || "N/A"}`, 100, y);
      y += 4;
      doc.text(`brix: ${remito.brix || "N/A"}`, 14, y);
      doc.text(`peso muestra de jugo: ${remito.pesoMuestraJugo || "N/A"}`, 100, y);
      y += 4;
      doc.text(`volumen gastado: ${remito.volumenGastado || "N/A"}`, 14, y);
      doc.text(`cantidad de limones(jugo): ${remito.cantidadLimones || "N/A"}`, 100, y);
      y += 4;
      doc.text(`limones chicos: ${remito.cantLimonesChicos || "N/A"}`, 14, y);
      doc.text(`limones medianos: ${remito.cantLimonesMedianos || "N/A"}`, 100, y);
      y += 4;
      doc.text(`limones grandes: ${remito.cantLimonesGrandes || "N/A"}`, 14, y);
      doc.text(`limones macnchados: ${remito.cantManchados || "N/A"}`, 100, y);
      y += 4;
      doc.text(`limones blandos: ${remito.cantBlandos || "N/A"}`, 14, y);
      doc.text(`limones podridos: ${remito.cantPodridos || "N/A"}`, 100, y);
      y += 4;
      doc.text(`limones amarillos: ${remito.cantAmarillos || "N/A"}`, 14, y);
      doc.text(`limones amarilloverdozos: ${remito.cantAmarilloVerdozo || "N/A"}`, 100, y);
      y += 4;
      doc.text(`limones verdes: ${remito.cantVerdes || "N/A"}`, 14, y);
      doc.text(`gramaje: ${(remito.pesoValde / remito.cantidadLimonesEnValde).toFixed(2) || "N/A"}`, 100, y);
      y += 4;
      doc.text(`%Aceite: %${((remito.mlBromuro * remito.normalidadKBrO3KBr * 68) / remito.pesoMuestra).toFixed(2) || "N/A"}`, 14, y);
      doc.text(`%Acidez: %${((remito.volumenGastado * remito.normalidadNaOH * 0.049) / remito.pesoMuestraJugo * 100).toFixed(2) || "N/A"}`, 100, y);
      y += 4;
      doc.text(`%Rendimiento jugo c/p: %${((remito.pesoJugoConPulpa / remito.pesoBandejaLimones) * 100).toFixed(2) || "N/A"}`, 14, y);
      doc.text(`%Rendimiento jugo s/p: %${((remito.pesoJugoSinPulpa / remito.pesoBandejaLimones) * 100).toFixed(2) || "N/A"}`, 100, y);
      y += 10; // Separación entre remitos

      // Salto de página si es necesario
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
    });

    // Guardar el documento PDF
    doc.save("listado_remitos.pdf");
  };

  return (
    <div>
      <h1>Listado de Remitos</h1>

      {/* Botón para exportar a PDF */}
      <button
        onClick={() => generarPDFConTitulos(remitos)}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Exportar a PDF
      </button>

      {/* Botón para agregar nuevo remito */}
      <button
        onClick={onAgregar}
        style={{
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Agregar Remito
      </button>

      {/* Lista de remitos */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {remitos.map((remito) => (
          <li
            key={remito.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              background: "#f9f9f9",
            }}
          >
            <span style={{ flex: 1 }}>
              {remito.fincaoempaque} - {remito.tipoFruta}
            </span>
            <button
              onClick={() => onEditar(remito)}
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Editar
            </button>
            <button
              onClick={() => onBorrar(remito.id)}
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Borrar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListadoRemitos;