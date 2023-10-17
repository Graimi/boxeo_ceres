// Recogemos los días que hay clases
export const ScheduleDays = ['L', 'M', 'X', 'J', 'V'];

// Añadimos los datos del calendario
// Aquellos que tienen un + añadido es para darles una clase nueva
export const ScheduleData = [
  {
    hour: '8:00',
    classes: ['Boxeo Recreativo', '12 de Saco', 'Boxeo Recreativo', 'Functional Boxing']
  
  },
  {
    hour: '9:30',
    classes: [
      'Boxeo Recreativo+Only Woman',
      '12 de Saco',
      'Boxeo Recreativo+Only Woman',
      'Functional Boxing+Only Woman'
    ]
  },
  {
    hour: '11:00',
    classes: ['Boxeo Recreativo', '12 de Saco', 'Boxeo Recreativo', 'Functional Boxing']
  },
  {
    hour: '17:00',
    classes: ['', 'Boxeo Educativo Infantil', '', 'Boxeo Educativo Infantil']
  },
  {
    hour: '18:00',
    classes: ['12 de Saco', '', '12 de Saco', 'Iniciados+Ring']
  },
  {
    hour: '19:00',
    classes: [
      'Boxeo Avanzado y Competición',
      'Boxeo Recreativo',
      'Boxeo Avanzado y Competición',
      'Boxeo Recreativo',
      'Functional Boxing'
    ]
  },
  {
    hour: '20:15',
    classes: [
      'Boxeo Recreativo',
      'Boxeo Avanzado y Competición',
      'Boxeo Recreativo',
      'Boxeo Avanzado y Competición',
      'Avanzado y Competición+Ring'
    ]
  }
];
