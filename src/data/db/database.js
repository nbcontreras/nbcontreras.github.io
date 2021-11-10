import Mock from '../mock';

const database = {
  information: {
    name: 'Nicolás Contreras',
    aboutContent:
      'Ingeniero Civil en Informática titulado en la Pontificia Universidad Católica de Valparaíso. Me gusta programar y enfrentar nuevos desafíos.',
    age: 25,
    phone: '',
    githubName: 'nbcontreras',
    nationality: 'Chile',
    language: 'Español',
    email: '',
    address: '',
    url: 'https://nbcontreras.github.io/',
    workStatus: {
      content: 'Desarrollador de Software en',
      url: 'https://sasco.cl/',
      name: 'SASCO SpA',
    },
    englishlevel: 'Medio',
    socialLinks: {
      facebook: '',
      twitter: '',
      pinterest: '',
      behance: '',
      linkedin: 'https://linkedin.com/in/nicolás-contreras-becerra',
      dribbble: '',
      github: 'https://github.com/nbcontreras',
    },
    brandImage: '/images/nicolas.jpg',
    aboutImage: '/images/nicolas.jpg',
    aboutImageLg: '/images/nicolas.jpg',
    githubImage:
      'https://github-readme-stats.vercel.app/api?username=nbcontreras&show_icons=true&count_private=false&hide_title=true&theme=cobalt',
    githubImageLg:
      'https://github-readme-stats.vercel.app/api?username=nbcontreras&show_icons=true&count_private=false&hide_title=true&theme=cobalt',
    cvfile: '/files/empty.pdf',
  },
  goals: [
    {
      title: 'Inglés',
      icon: 'library',
      details:
        'Dentro de mis metas de aprendizaje, se encuentra aprender el idioma inglés. Mi objetivo es poder comunicarme con otras personas y poder establecer de manera fluida un diálogo.',
    },
    {
      title: 'React',
      icon: 'react',
      details:
        'React es una de las bibliotecas de javascript para Frontend, que encuentro más atractivo de aprender. Es por eso que este sitio utiliza React para ir aprendiendo de a poco como se estructura.',
    },
    {
      title: 'Machine Learning',
      icon: 'code-alt',
      details:
        'Fuera del desarrollo web, el machine learning es otra de las áreas que me llama la atención. Si aparece la oportunidad de enfrentar algún desafío en esta área sería interesante tomarlo.',
    },
    {
      title: 'Portugués',
      icon: 'library',
      details: '',
    },
    {
      title: 'AWS',
      icon: 'aws',
      details: '',
    },
    {
      title: 'Nuevo lenguaje de programación',
      icon: 'code-alt',
      details: '',
    },
  ],
  reviews: [
    {
      id: 1,
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.',
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company',
      },
    },
    {
      id: 2,
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.',
      author: {
        name: 'Susan Yost',
        designation: 'Client',
      },
    },
    {
      id: 3,
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client',
      },
    },
  ],
  skills: [
    {
      title: 'Django',
      icon: 'checkmark-circle',
      value: 95,
    },
    {
      title: 'Ionic',
      icon: 'checkmark-circle',
      value: 85,
    },
    {
      title: 'Python',
      icon: 'checkmark-circle',
      value: 85,
    },
    {
      title: 'PHP',
      icon: 'checkmark-circle',
      value: 85,
    },
    {
      title: 'Javascript',
      icon: 'checkmark-circle',
      value: 70,
    },
    {
      title: 'jQuery',
      icon: 'checkmark-circle',
      value: 85,
    },
    {
      title: 'Bootstrap',
      icon: 'checkmark-circle',
      value: 85,
    },
    {
      title: 'SQL',
      icon: 'checkmark-circle',
      value: 85,
    },
  ],
  portfolios: [
    {
      id: 1,
      title: 'T-shirt Mockup',
      subtitle: 'A beautiful t-shirt mockup.',
      imageUrl: '/images/portfolio-image-1.jpg',
      largeImageUrl: ['/images/portfolio-image-1-lg.jpg'],
      url: 'https://dribbble.com',
    },
    {
      id: 2,
      title: 'Coffee Mug',
      subtitle: 'Awesome coffee mug design.',
      imageUrl: '/images/portfolio-image-4.jpg',
      largeImageUrl: [
        '/images/portfolio-image-4-lg.jpg',
        '/images/portfolio-image-4-lg2.jpg',
      ],
      url: 'https://facebook.com',
    },
    {
      id: 3,
      title: 'Tea & Coffee Mug',
      subtitle: 'Beautiful mug with logo.',
      imageUrl: '/images/portfolio-image-2.jpg',
      url: 'https://pinterest.com',
    },
    {
      id: 4,
      title: 'Pen Holder',
      subtitle: 'A pen holder with beautiful design.',
      imageUrl: '/images/portfolio-image-3.jpg',
      largeImageUrl: ['/images/portfolio-image-3-lg.jpg'],
      url: '#',
    },
    {
      id: 5,
      title: 'Mug',
      subtitle: 'Mug with awesome style',
      imageUrl: '/images/portfolio-image-5.jpg',
      largeImageUrl: ['/images/portfolio-image-5-lg.jpg'],
    },
    {
      id: 6,
      title: 'Pendrive',
      subtitle: 'Free pendrive mockup design.',
      imageUrl: '/images/portfolio-image-6.jpg',
      largeImageUrl: ['/images/portfolio-image-6-lg.jpg'],
    },
    {
      id: 7,
      title: 'Beautiful Pendrive',
      subtitle: 'Pendrive with great design & flexible.',
      imageUrl: '/images/portfolio-image-7.jpg',
      largeImageUrl: ['/images/portfolio-image-7-lg.jpg'],
      url: 'https://twitter.com',
    },
    {
      id: 8,
      title: 'Sticker',
      subtitle: 'Clip sticker mockup design.',
      imageUrl: '/images/portfolio-image-8.jpg',
      largeImageUrl: ['/images/portfolio-image-8-lg.jpg'],
    },
    {
      id: 9,
      title: 'Packet',
      subtitle: 'Beautiful packet & product design.',
      imageUrl: '/images/portfolio-image-9.jpg',
      largeImageUrl: ['/images/portfolio-image-9-lg.jpg'],
    },
    {
      id: 10,
      title: 'Pen Holder',
      subtitle: 'A pen holder with beautiful design.',
      imageUrl: '/images/portfolio-image-3.jpg',
      largeImageUrl: ['/images/portfolio-image-3-lg.jpg'],
      url: '#',
    },
    {
      id: 11,
      title: 'Coffee Mug',
      subtitle: 'Awesome coffee mug design.',
      imageUrl: '/images/portfolio-image-4.jpg',
      largeImageUrl: [
        '/images/portfolio-image-4-lg.jpg',
        '/images/portfolio-image-4-lg2.jpg',
      ],
      url: 'https://facebook.com',
    },
    {
      id: 12,
      title: 'Tea & Coffee Mug',
      subtitle: 'Beautiful mug with logo.',
      imageUrl: '/images/portfolio-image-2.jpg',
      url: 'https://pinterest.com',
    },
    {
      id: 13,
      title: 'T-shirt Mockup',
      subtitle: 'A beautiful t-shirt mockup.',
      imageUrl: '/images/portfolio-image-1.jpg',
      largeImageUrl: ['/images/portfolio-image-1-lg.jpg'],
      url: 'https://dribbble.com',
    },
    {
      id: 14,
      title: 'Mug',
      subtitle: 'Mug with awesome style',
      imageUrl: '/images/portfolio-image-5.jpg',
      largeImageUrl: ['/images/portfolio-image-5-lg.jpg'],
    },
    {
      id: 15,
      title: 'Pendrive',
      subtitle: 'Free pendrive mockup design.',
      imageUrl: '/images/portfolio-image-6.jpg',
      largeImageUrl: ['/images/portfolio-image-6-lg.jpg'],
    },
    {
      id: 16,
      title: 'Beautiful Pendrive',
      subtitle: 'Pendrive with great design & flexible.',
      imageUrl: '/images/portfolio-image-7.jpg',
      largeImageUrl: ['/images/portfolio-image-7-lg.jpg'],
      url: 'https://twitter.com',
    },
    {
      id: 17,
      title: 'Sticker',
      subtitle: 'Clip sticker mockup design.',
      imageUrl: '/images/portfolio-image-8.jpg',
      largeImageUrl: ['/images/portfolio-image-8-lg.jpg'],
    },
    {
      id: 18,
      title: 'Packet',
      subtitle: 'Beautiful packet & product design.',
      imageUrl: '/images/portfolio-image-9.jpg',
      largeImageUrl: ['/images/portfolio-image-9-lg.jpg'],
    },
    {
      id: 19,
      title: 'T-shirt Mockup',
      subtitle: 'A beautiful t-shirt mockup.',
      imageUrl: '/images/portfolio-image-1.jpg',
      largeImageUrl: ['/images/portfolio-image-1-lg.jpg'],
      url: 'https://dribbble.com',
    },
    {
      id: 20,
      title: 'Coffee Mug',
      subtitle: 'Awesome coffee mug design.',
      imageUrl: '/images/portfolio-image-4.jpg',
      largeImageUrl: [
        '/images/portfolio-image-4-lg.jpg',
        '/images/portfolio-image-4-lg2.jpg',
      ],
      url: 'https://facebook.com',
    },
    {
      id: 21,
      title: 'Tea & Coffee Mug',
      subtitle: 'Beautiful mug with logo.',
      imageUrl: '/images/portfolio-image-2.jpg',
      url: 'https://pinterest.com',
    },
    {
      id: 22,
      title: 'Pen Holder',
      subtitle: 'A pen holder with beautiful design.',
      imageUrl: '/images/portfolio-image-3.jpg',
      largeImageUrl: ['/images/portfolio-image-3-lg.jpg'],
      url: '#',
    },
    {
      id: 23,
      title: 'Mug',
      subtitle: 'Mug with awesome style',
      imageUrl: '/images/portfolio-image-5.jpg',
      largeImageUrl: ['/images/portfolio-image-5-lg.jpg'],
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: 'Enero 2019 - Febrero 2019',
        position: 'Práctica Profesional',
        company: 'BRASS Chile S.A.',
        details:
          'En mi primera práctica, realicé un sistema de evaluación de desempeño. Para esto tuve que llevar a cabo la captura de requerimientos y su respectivo desarrollo, donde utilice ' +
          'el Framework Django y SQL Server para la base de datos.',
      },
      {
        id: 2,
        year: 'Abril 2019 - Diciembre 2019',
        position: 'Desarrollor Web',
        company: 'BRASS Chile S.A.',
        details:
          'Terminada mi práctica se me brindó la oportunidad de seguir trabajando de manera remota (producto a que estudiaba en Valparaíso y la empresa es de Santiago ' +
          'por lo que no podía estar de manera presencial). ' +
          'Durante este período estuve trabajando en un sistema ERP el cual permite la gestión de diferentes tareas de la empresa. Para este proyecto utilicé PHP y SQL Server.',
      },
      {
        id: 3,
        year: 'Enero 2020 - Febrero',
        position: 'Práctica Profesional',
        company: 'BRASS Chile S.A.',
        details:
          'Durante mi segunda práctica, continué con el desarrollo del ERP. Además realicé capacitaciones sobre este sistema y sus nuevas funcionalidades.',
      },
      {
        id: 4,
        year: 'Marzo 2020 - Diciembre 2020',
        position: 'Desarrollor Web',
        company: 'BRASS Chile S.A.',
        details:
          'Nuevamente tuve la oportunidad de seguir en la empresa, donde continué con el desarrollo del sistema ERP, ya que la cantidad de requerimientos siguió creciendo. (PHP y SQL Server)',
      },
      {
        id: 5,
        year: 'Febrero 2020 - Presente',
        position: 'Desarrollor de Software',
        company: 'SASCO SpA',
        details:
          'Actualmente me encuentro trabajando en SASCO SpA, donde he trabajado en proyectos como bhexpress.cl y contafi.cl. ' +
          'He utilizado Ionic Framework para agregar nuevas funcionalidades a la aplicación de LibreDTE. (También empecé a usar Linux)',
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: '2015 - 2020',
        graduation: 'Ingeniería Civil en Informática',
        university: 'Pontificia Universidad Católica de Valparaíso',
        details: '',
      },
    ],
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource:
        '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource:
        '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: '20',
      createMonth: 'February',
      createYear: '2020',
    },
  ],
  contactInfo: {
    phoneNumbers: ['+012-3456-7891', '+012-3456-7892'],
    emailAddress: ['admin.sitename@example.com', 'info.sitename@example.com'],
    address: '121 King Street, Melbourne, Victoria 3000, Australia',
  },
};

Mock.onGet('/api/information').reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet('/api/goals').reply((config) => {
  const response = database.goals;
  return [200, response];
});

Mock.onGet('/api/reviews').reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet('/api/skills').reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet('/api/portfolios').reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet('/api/experience').reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet('/api/blog').reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet('/api/contactinfo').reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
