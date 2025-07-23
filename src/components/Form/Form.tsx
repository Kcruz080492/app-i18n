type FormProps = {
  textos: {
    nombre: string;
    correo: string;
    enviar: string;
  };
};

export default function Form({ textos }: FormProps) {
  return (
    <form>
      <label>{textos.nombre}</label>
      <input type="text" />

      <label>{textos.correo}</label>
      <input type="email" />

      <button type="submit">{textos.enviar}</button>
    </form>
  );
}
