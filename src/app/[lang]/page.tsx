import { getDictionary } from '../dictionaries/getDictionary';
import { notFound } from 'next/navigation';
import Form from '@/components/Form/Form'; // Asegúrate de tener esta ruta bien

const locales = ['en-US', 'es-ES'];

export default async function Page({ params }: { params: { lang: string } }) {
  if (!locales.includes(params.lang)) return notFound();

  const t = await getDictionary(params.lang as 'en-US' | 'es-ES');

  return (
    <main>
      <h1>{t.titulo}</h1>
      <p>{t.mensaje}</p>
      <p><em>{t.extra}</em></p>

      {/* 👇 Aquí enviamos los textos del formulario */}
      <Form textos={t.form} />
    </main>
  );
}
