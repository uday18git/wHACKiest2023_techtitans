import { Image } from 'react-grid-gallery'

export const navData = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Service',
    link: '/service',
  },
  {
    title: 'Contact',
    link: '/contact',
  },

  {
    title: 'Pages',
    link: '/',
    submenu: [
      {
        title: 'pag1',
        link: '/',
      },
      {
        title: 'pag1',
        link: '/',
      },
      {
        title: 'pag1',
        link: '/',
      },
    ],
  },
]

export const images = [
  {
    src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
    width: 520,
    height: 174,
    tags: [
      { value: 'Nature', title: 'Nature' },
      { value: 'Flora', title: 'Flora' },
    ],
    caption: 'After Rain (Jeshu John - designerspics.com)',
  },
  {
    src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
    width: 520,
    height: 212,
    caption: 'Boats (Jeshu John - designerspics.com)',
  },
  {
    src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
    width: 520,
    height: 212,
    caption: 'Color Pencils (Jeshu John - designerspics.com)',
  },
  {
    src: 'https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg',
    width: 520,
    height: 213,
    caption: 'Red Apples with other Red Fruit (foodiesfeed.com)',
  },
  {
    src: 'https://c6.staticflickr.com/9/8890/28897154101_a8f55be225_b.jpg',
    width: 520,
    height: 183,
    caption: '37H (gratispgraphy.com)',
  },
  {
    src: 'https://c5.staticflickr.com/9/8768/28941110956_b05ab588c1_b.jpg',
    width: 440,
    height: 320,
    tags: [{ value: 'Nature', title: 'Nature' }],
    caption: '8H (gratisography.com)',
  },
  
 
  
]


export const replies = [
  {
    message: `Hi! I'm Mr. Chatbot 😎 Nice to meet you! 👋. How can I help you?`,
    options: [
      { id: '01', option: 'Tell me services' },
      { id: '02', option: 'Which Material you use?' },
      { id: '03', option: 'Tell me pricing' },
    ],
  },
  {
    message: `We make gold and diamond jwellery design, wax printing and more.`,
    replyTo: '01',
    options: [
      { id: '04', option: 'Ok, thank you.' },
      { id: '05', option: `I'd like to know more.` },
    ],
  },
  {
    message: `We use gold, diamond or any custom stone according to the request. `,
    replyTo: '02',
    options: [
      { id: '04', option: 'Ok, thank you.' },
      { id: '05', option: `I'd like to know more.` },
    ],
  },
  {
    message: `The pricing would be around 3k-4k USD and more, this will be calculated according to the design and the materials used.`,
    replyTo: '03',
    options: [
      { id: '04', option: 'Ok, thank you.' },
      { id: '05', option: `I'd like to know more.` },
    ],
  },
  {
    message: `You're most welcomed! If you want to know more details, contact us via our WhatsApp. The Link is below 👇.`,
    whatsapp: true,
    replyTo: '04',
    options: [
      { id: '01', option: 'Tell me services' },
      { id: '02', option: 'Which Material you use?' },
      { id: '03', option: 'Tell me pricing' },
    ],
  },
  {
    message: `If you want to know more details, contact us via our WhatsApp. The Link is below 👇.`,
    whatsapp: true,
    replyTo: '05',
    options: [
      { id: '01', option: 'Tell me services' },
      { id: '02', option: 'Which Material you use?' },
      { id: '03', option: 'Tell me pricing' },
    ],
  },
]