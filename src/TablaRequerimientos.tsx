"use client"

import * as React from "react"
import './tabla-requerimientos.css'

interface Requerimiento {
  codigo: string
  prioridad: "MEDIA" | "BAJA" | "URGENTE"
  tipo: string
  categoria: string
  fechaAlta: string
  estado: string
  asunto: string
  propietario: string
}

export default function TablaRequerimientos() {
  const [datos, setDatos] = React.useState<Requerimiento[]>([
    {
      codigo: "REH-2024-000000001",
      prioridad: "MEDIA",
      tipo: "Requerimiento de Hardware",
      categoria: "Solicitud reparación de hardware",
      fechaAlta: "12/09/2024",
      estado: "Abierto",
      asunto: "unAsunto",
      propietario: "Gutierrez Jorge",
    },
    {
      codigo: "REH-2024-000000002",
      prioridad: "MEDIA",
      tipo: "Requerimiento de Hardware",
      categoria: "Solicitud reparación de hardware",
      fechaAlta: "14/09/2024",
      estado: "Abierto",
      asunto: "unAsunto",
      propietario: "Gutierrez Jorge",
    },
    {
      codigo: "REH-2024-000000003",
      prioridad: "BAJA",
      tipo: "Requerimiento de Hardware",
      categoria: "Solicitud reparación de hardware",
      fechaAlta: "18/09/2024",
      estado: "Abierto",
      asunto: "unAsunto",
      propietario: "Gutierrez Jorge",
    },
    {
      codigo: "ERR-2024-000000004",
      prioridad: "URGENTE",
      tipo: "Errores",
      categoria: "Nueva falla",
      fechaAlta: "10/10/2024",
      estado: "Abierto",
      asunto: "unAsunto",
      propietario: "Gutierrez Jorge",
    },
    {
      codigo: "ERR-2024-000000005",
      prioridad: "URGENTE",
      tipo: "Errores",
      categoria: "Nueva falla",
      fechaAlta: "12/10/2024",
      estado: "Abierto",
      asunto: "unAsunto",
      propietario: "Gutierrez Jorge",
    },
  ])

  const [filtros, setFiltros] = React.useState({
    tipo: "",
    categoria: "",
    estado: "",
  })

  const [ordenamiento, setOrdenamiento] = React.useState({
    columna: "",
    direccion: "asc",
  })

  // Obtener valores únicos para los filtros
  const tiposUnicos = Array.from(new Set(datos.map((d) => d.tipo)))
  const categoriasUnicas = Array.from(new Set(datos.map((d) => d.categoria)))
  const estadosUnicos = Array.from(new Set(datos.map((d) => d.estado)))

  // Función para ordenar
  const ordenarPor = (columna: string) => {
    setOrdenamiento((prev) => ({
      columna,
      direccion: prev.columna === columna && prev.direccion === "asc" ? "desc" : "asc",
    }))

    setDatos((prev) =>
      [...prev].sort((a, b) => {
        const valorA = a[columna as keyof Requerimiento]
        const valorB = b[columna as keyof Requerimiento]
        
        if (ordenamiento.direccion === "asc") {
          return valorA > valorB ? 1 : -1
        } else {
          return valorA < valorB ? 1 : -1
        }
      })
    )
  }

  // Función para limpiar filtros
  const limpiarFiltros = () => {
    setFiltros({
      tipo: "",
      categoria: "",
      estado: "",
    })
  }

  // Aplicar filtros
  const datosFiltrados = datos.filter((item) => {
    return (
      (!filtros.tipo || item.tipo === filtros.tipo) &&
      (!filtros.categoria || item.categoria === filtros.categoria) &&
      (!filtros.estado || item.estado === filtros.estado)
    )
  })

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Team 5</h1>
        <button className="button">Crear requerimiento</button>
      </div>

      <div className="filters">
        <select 
          className="select"
          value={filtros.tipo} 
          onChange={(e) => setFiltros({ ...filtros, tipo: e.target.value })}
        >
          <option value="">Tipo</option>
          {tiposUnicos.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>

        <select 
          className="select"
          value={filtros.categoria} 
          onChange={(e) => setFiltros({ ...filtros, categoria: e.target.value })}
        >
          <option value="">Categoría</option>
          {categoriasUnicas.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>

        <select 
          className="select"
          value={filtros.estado} 
          onChange={(e) => setFiltros({ ...filtros, estado: e.target.value })}
        >
          <option value="">Estado</option>
          {estadosUnicos.map((estado) => (
            <option key={estado} value={estado}>
              {estado}
            </option>
          ))}
        </select>

        <button className="button clear-filters" onClick={limpiarFiltros}>
          Limpiar Filtros
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th onClick={() => ordenarPor("codigo")}>
                Código
                <br />
                {ordenamiento.columna === "codigo" && (ordenamiento.direccion === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => ordenarPor("prioridad")}>
                Prioridad
                <br />
                {ordenamiento.columna === "prioridad" && (ordenamiento.direccion === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => ordenarPor("tipo")}>
                Tipo
                <br />
                {ordenamiento.columna === "tipo" && (ordenamiento.direccion === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => ordenarPor("categoria")}>
                Categoría
                <br />
                {ordenamiento.columna === "categoria" && (ordenamiento.direccion === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => ordenarPor("fechaAlta")}>
                Fecha de Alta
                <br />
                {ordenamiento.columna === "fechaAlta" && (ordenamiento.direccion === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => ordenarPor("estado")}>
                Estado
                <br />
                {ordenamiento.columna === "estado" && (ordenamiento.direccion === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => ordenarPor("asunto")}>
                Asunto
                <br />
                {ordenamiento.columna === "asunto" && (ordenamiento.direccion === "asc" ? "▲" : "▼")}
              </th>
              <th onClick={() => ordenarPor("propietario")}>
                Propietario
                <br />
                {ordenamiento.columna === "propietario" && (ordenamiento.direccion === "asc" ? "▲" : "▼")}
              </th>
            </tr>
          </thead>
          <tbody>
            {datosFiltrados.map((requerimiento) => (
              <tr key={requerimiento.codigo}>
                <td>{requerimiento.codigo}</td>
                <td className={`priority-${requerimiento.prioridad.toLowerCase()}`}>{requerimiento.prioridad}</td>
                <td>{requerimiento.tipo}</td>
                <td>{requerimiento.categoria}</td>
                <td>{requerimiento.fechaAlta}</td>
                <td className={`estado-${requerimiento.estado.toLowerCase()}`}>{requerimiento.estado}</td>
                <td>{requerimiento.asunto}</td>
                <td>{requerimiento.propietario}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

