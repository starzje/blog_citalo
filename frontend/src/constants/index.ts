export const ENDPOINT =
  process.env.NEXT_PUBLIC_BASE_URL + '/api/posts?populate=*';

export const MENI = [
  {
    id: 1,
    naslov: 'Naslovnica',
    putanja: '/',
    targetSegment: 'naslovnica',
  },
  {
    id: 2,
    naslov: 'O meni',
    putanja: '/o-meni',
    targetSegment: 'omeni',
  },
  {
    id: 3,
    naslov: 'Recenzije',
    putanja: '/recenzije',
    targetSegment: 'recenzije',
  },
  {
    id: 4,
    naslov: 'Svaštara',
    putanja: '/svastara',
    targetSegment: 'svastara',
  },
  {
    id: 5,
    naslov: 'Kontakt',
    putanja: '/kontakt',
    targetSegment: 'kontakt',
  },
];
