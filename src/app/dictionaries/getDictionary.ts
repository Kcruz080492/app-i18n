type Locale = 'en-US' | 'es-ES';

export const getDictionary = async (locale: Locale) => {
  const dictionary = await import(`../dictionaries/${locale}.json`);
  return dictionary.default;
};
