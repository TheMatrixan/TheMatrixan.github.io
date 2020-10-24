export const ORIGIN = process.env.ORIGIN || '';

/**
 * Available languages in website.
 */
export const LANGUAGES = {
  ENGLISH: 'en',
  POLISH: 'pl',
} as const;

/**
 * Default language if user language is different than specified in `LANGUAGES`.
 */
export const DEFAULT_LANGUAGE = LANGUAGES.ENGLISH;

/**
 * Used as a base path for routes.
 */
export const BASE_LANGUAGE = LANGUAGES.POLISH;

/**
 * Navigation in header.
 */
export const navigation = [
  { enhance: false, name: 'navigation.home', path: './' },
  { enhance: false, name: 'navigation.portfolio', path: './portfolio' },
  { enhance: true, name: 'navigation.resume', path: './resume' },
] as const;

export const GTAToken = 'UA-155263040-1';

export const Const = {
  Email: 'mateusz.lesiak01@gmail.com',
  GithubName: 'TheMatrixan',
  GithubURI: 'https://github.com/TheMatrixan',
  HomeURI: 'https://goo.gl/maps/VyDDt1jbJPro2cpQ7',
  LinkedInName: 'mateusz-lesiak-tul',
  LinkedInURI: 'https://www.linkedin.com/in/mateusz-lesiak-tul/',
} as const;
