module.exports = {
  siteTitle: 'Rafi Rasheed | Hardware Maker',
  siteDescription: 'Rafi Rasheed T C is a Hardware Maker based in Kerala, India',
  siteKeywords:
    'Rafi Rasheed, Rafi, rafi, rafitc99, arduino developer, python developer, community, cucek, cusat',
  siteUrl: 'https://rafirasheed.co',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-172376355-1',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Rafi Rasheed',
  location: 'Kerala, IN',
  email: 'mail@rafirasheed.co',
  github: 'https://github.com/rafitc',
  twitterHandle: '@rafirasheed_',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/rafitc',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/rafitc',
    },
    {
      name: 'Codepen',
      url: 'https://makergram.com/community/user/rafitc99',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/rafirasheed_',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/iamRafiRasheed',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
