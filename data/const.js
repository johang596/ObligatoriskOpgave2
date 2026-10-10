// Standard-kategorier, som appen starter med første gang den åbnes
export const INITIAL_CATEGORIES = [
  { id: 'skole', name: 'Skole' },
  { id: 'arbejde', name: 'Arbejde' },
  { id: 'privat', name: 'Privat' },
];

// Standard-opgaver, som appen starter med første gang den åbnes.
// Derefter hentes opgaverne fra AsyncStorage.
export const INITIAL_TASKS = [
  { id: '1', title: 'Læs opgavebeskrivelsen', completed: true, categoryId: 'skole' },
  { id: '2', title: 'Byg opgaveliste-appen', completed: false, categoryId: 'skole' },
  { id: '3', title: 'Lav brugerinterviews', completed: false, categoryId: 'skole' },
  { id: '4', title: 'Køb ind til weekenden', completed: false, categoryId: 'privat' },
];
