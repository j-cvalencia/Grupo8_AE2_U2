// AE2 Unidad 2 - Historia Clínica Electrónica Básica
db = db.getSiblingDB("HCE_Antioquia_AE2");

db.hospitalizaciones.deleteMany({});

db.hospitalizaciones.insertMany([
  {
    id_hospitalizacion: "HOSP001",
    paciente: { id_paciente: "P001", tipo_documento: "CC", documento_prueba: "TEST-001", nombre: "Paciente Ficticio 1", edad: 45, sexo: "F" },
    admision: { fecha_ingreso: ISODate("2026-10-10T09:00:00Z"), servicio: "Medicina interna", habitacion: "201", estado: "Hospitalizado" },
    diagnosticos: [{ codigo: "J18.9", descripcion: "Neumonía no especificada", principal: true, fecha: ISODate("2026-10-10T10:00:00Z") }],
    evoluciones: [
      { fecha: ISODate("2026-10-10T12:00:00Z"), profesional: "MED-001", nota: "Paciente estable, continúa observación." },
      { fecha: ISODate("2026-10-11T08:00:00Z"), profesional: "MED-001", nota: "Mejoría clínica; reevaluar respuesta al tratamiento." }
    ],
    signos_vitales: [
      { fecha: ISODate("2026-10-10T12:00:00Z"), temperatura_c: 37.2, frecuencia_cardiaca: 82, frecuencia_respiratoria: 18, presion_arterial: "120/80", saturacion_o2: 96 }
    ],
    notas_enfermeria: [{ fecha: ISODate("2026-10-10T13:00:00Z"), turno: "Día", nota: "Se brinda cuidado general y se verifica comodidad." }],
    ordenes_medicamentos: [{ medicamento: "Medicamento ficticio A", dosis: "según orden simulada", via: "oral", frecuencia: "cada 12 horas", estado: "Activa" }],
    alta: null
  },
  {
    id_hospitalizacion: "HOSP002",
    paciente: { id_paciente: "P002", tipo_documento: "CC", documento_prueba: "TEST-002", nombre: "Paciente Ficticio 2", edad: 61, sexo: "M" },
    admision: { fecha_ingreso: ISODate("2026-10-12T14:30:00Z"), servicio: "Medicina interna", habitacion: "202", estado: "Hospitalizado" },
    diagnosticos: [{ codigo: "E11.9", descripcion: "Diabetes mellitus tipo 2", principal: true, fecha: ISODate("2026-10-12T15:00:00Z") }],
    evoluciones: [
      { fecha: ISODate("2026-10-12T17:00:00Z"), profesional: "MED-002", nota: "Se revisa control metabólico en escenario simulado." },
      { fecha: ISODate("2026-10-13T08:30:00Z"), profesional: "MED-002", nota: "Se continúa seguimiento y educación al paciente." }
    ],
    signos_vitales: [{ fecha: ISODate("2026-10-12T17:00:00Z"), temperatura_c: 36.8, frecuencia_cardiaca: 78, frecuencia_respiratoria: 17, presion_arterial: "130/82", saturacion_o2: 98 }],
    notas_enfermeria: [{ fecha: ISODate("2026-10-12T18:00:00Z"), turno: "Tarde", nota: "Se registra seguimiento general." }],
    ordenes_medicamentos: [{ medicamento: "Medicamento ficticio B", dosis: "según orden simulada", via: "oral", frecuencia: "diaria", estado: "Activa" }],
    alta: null
  },
  {
    id_hospitalizacion: "HOSP003",
    paciente: { id_paciente: "P003", tipo_documento: "CC", documento_prueba: "TEST-003", nombre: "Paciente Ficticio 3", edad: 29, sexo: "F" },
    admision: { fecha_ingreso: ISODate("2026-10-14T07:15:00Z"), servicio: "Urgencias - observación", habitacion: "203", estado: "Hospitalizado" },
    diagnosticos: [{ codigo: "A09", descripcion: "Gastroenteritis de presunto origen infeccioso", principal: true, fecha: ISODate("2026-10-14T08:00:00Z") }],
    evoluciones: [{ fecha: ISODate("2026-10-14T11:00:00Z"), profesional: "MED-003", nota: "Se documenta evolución en observación; continuar vigilancia." }],
    signos_vitales: [{ fecha: ISODate("2026-10-14T11:00:00Z"), temperatura_c: 37.0, frecuencia_cardiaca: 88, frecuencia_respiratoria: 18, presion_arterial: "112/74", saturacion_o2: 97 }],
    notas_enfermeria: [{ fecha: ISODate("2026-10-14T12:00:00Z"), turno: "Día", nota: "Se realiza control general y registro de observaciones." }],
    ordenes_medicamentos: [{ medicamento: "Solución de rehidratación ficticia", dosis: "según orden simulada", via: "oral", frecuencia: "según tolerancia", estado: "Activa" }],
    alta: null
  },
  {
    id_hospitalizacion: "HOSP004",
    paciente: { id_paciente: "P004", tipo_documento: "CC", documento_prueba: "TEST-004", nombre: "Paciente Ficticio 4", edad: 72, sexo: "M" },
    admision: { fecha_ingreso: ISODate("2026-10-15T16:00:00Z"), servicio: "Medicina interna", habitacion: "204", estado: "Alta" },
    diagnosticos: [{ codigo: "I10", descripcion: "Hipertensión esencial (primaria)", principal: true, fecha: ISODate("2026-10-15T17:00:00Z") }],
    evoluciones: [
      { fecha: ISODate("2026-10-15T18:00:00Z"), profesional: "MED-004", nota: "Registro de observación inicial." },
      { fecha: ISODate("2026-10-16T08:00:00Z"), profesional: "MED-004", nota: "Condición estable en el escenario de prueba." }
    ],
    signos_vitales: [{ fecha: ISODate("2026-10-15T18:00:00Z"), temperatura_c: 36.7, frecuencia_cardiaca: 76, frecuencia_respiratoria: 16, presion_arterial: "138/86", saturacion_o2: 98 }],
    notas_enfermeria: [{ fecha: ISODate("2026-10-16T09:00:00Z"), turno: "Día", nota: "Se documenta educación general para el egreso simulado." }],
    ordenes_medicamentos: [{ medicamento: "Medicamento ficticio C", dosis: "según orden simulada", via: "oral", frecuencia: "según orden", estado: "Finalizada" }],
    alta: { fecha: ISODate("2026-10-16T12:00:00Z"), resumen: "Egreso simulado con recomendaciones generales.", responsable: "MED-004" }
  },
  {
    id_hospitalizacion: "HOSP005",
    paciente: { id_paciente: "P005", tipo_documento: "CC", documento_prueba: "TEST-005", nombre: "Paciente Ficticio 5", edad: 54, sexo: "F" },
    admision: { fecha_ingreso: ISODate("2026-10-18T10:20:00Z"), servicio: "Medicina interna", habitacion: "205", estado: "Hospitalizado" },
    diagnosticos: [{ codigo: "J18.9", descripcion: "Neumonía no especificada", principal: true, fecha: ISODate("2026-10-18T11:00:00Z") }],
    evoluciones: [{ fecha: ISODate("2026-10-18T14:00:00Z"), profesional: "MED-005", nota: "Se registra evolución inicial y plan de observación." }],
    signos_vitales: [{ fecha: ISODate("2026-10-18T14:00:00Z"), temperatura_c: 37.4, frecuencia_cardiaca: 90, frecuencia_respiratoria: 20, presion_arterial: "124/78", saturacion_o2: 95 }],
    notas_enfermeria: [{ fecha: ISODate("2026-10-18T15:00:00Z"), turno: "Día", nota: "Se registran observaciones del turno." }],
    ordenes_medicamentos: [{ medicamento: "Medicamento ficticio A", dosis: "según orden simulada", via: "oral", frecuencia: "cada 12 horas", estado: "Activa" }],
    alta: null
  }
]);

db.hospitalizaciones.createIndex({ "paciente.id_paciente": 1 });
db.hospitalizaciones.createIndex({ "diagnosticos.codigo": 1 });
db.hospitalizaciones.createIndex({ "admision.fecha_ingreso": -1 });
db.hospitalizaciones.createIndex({ "ordenes_medicamentos.medicamento": 1 });

print("Carga completada. Documentos insertados: " + db.hospitalizaciones.countDocuments({}));
print("Índices creados. Base de datos: " + db.getName());