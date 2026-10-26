use HCE_Antioquia_AE2

// Consulta 1. Hospitalizaciones por diagnóstico 
db.hospitalizaciones.find(
  { "diagnosticos.codigo": "J18.9" },
  { _id: 0, id_hospitalizacion: 1, "paciente.id_paciente": 1, "paciente.nombre": 1, diagnosticos: 1, "admision.estado": 1 }
).pretty()

// Consulta 2. Evolución cronológica de un paciente
db.hospitalizaciones.aggregate([
  { $match: { "paciente.id_paciente": "P001" } },
  { $unwind: "$evoluciones" },
  { $sort: { "evoluciones.fecha": 1 } },
  { $project: { _id: 0, paciente: "$paciente.id_paciente", fecha: "$evoluciones.fecha", profesional: "$evoluciones.profesional", nota: "$evoluciones.nota" } }
])

// Consulta 3. Medicamentos activos asignados
db.hospitalizaciones.aggregate([
  { $unwind: "$ordenes_medicamentos" },
  { $match: { "ordenes_medicamentos.estado": "Activa" } },
  { $project: { _id: 0, id_hospitalizacion: 1, paciente: "$paciente.id_paciente", nombre: "$paciente.nombre", medicamento: "$ordenes_medicamentos.medicamento", dosis: "$ordenes_medicamentos.dosis", frecuencia: "$ordenes_medicamentos.frecuencia", estado: "$ordenes_medicamentos.estado" } }
])

// Consulta 4. Admisiones ordenadas de la más reciente a la más antigua
db.hospitalizaciones.find(
  {},
  { _id: 0, id_hospitalizacion: 1, "paciente.id_paciente": 1, "admision.fecha_ingreso": 1, "admision.servicio": 1, "admision.estado": 1 }
).sort({ "admision.fecha_ingreso": -1 })

// Consulta 5. Resumen de conteo por estado de hospitalización
db.hospitalizaciones.aggregate([
  { $group: { _id: "$admision.estado", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
])

// Consulta 6. Signos vitales de un paciente
db.hospitalizaciones.find(
  { "paciente.id_paciente": "P001" },
  { _id: 0, "paciente.id_paciente": 1, signos_vitales: 1 }
).pretty()

// Validación final: debe devolver 5
db.hospitalizaciones.countDocuments({})