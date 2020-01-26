interface NavigationItems {
  path: string;
  name: string;
  enhance?: boolean;
}

const navigation: NavigationItems[] = [
  { path: '/about', name: 'navigation.aboutMe' },
  { path: '/portfolio', name: 'navigation.portfolio' },
  { path: '/contact', name: 'navigation.contact' },
  { path: '/resume', name: 'navigation.resume', enhance: true },
];

export { navigation };
