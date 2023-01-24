export const ENDPOINT =
  process.env.NEXT_PUBLIC_BASE_URL + '/api/posts?populate=*';

export const MENI = [
  {
    id: 1,
    naslov: 'Naslovnica',
    putanja: '/',
  },
  {
    id: 2,
    naslov: 'O meni',
    putanja: '/o-meni',
  },
  {
    id: 3,
    naslov: 'Recenzije',
    putanja: '/recenzije',
  },
  {
    id: 4,
    naslov: 'Svaštara',
    putanja: '/svastara',
  },
  {
    id: 5,
    naslov: 'Kontakt',
    putanja: '/kontakt',
  },
];
