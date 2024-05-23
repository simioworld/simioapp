"use client";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  className?: string;
  eventType: string;
}
interface pendingWordProps {
  key: string;
  value: string;
}

const pendingWords: pendingWordProps[] = [
  { key: "Crear", value: "Creando" },
  { key: "Editar", value: "Editando" },
  { key: "Eliminar", value: "Eliminando" },
  { key: "Enviar", value: "Enviando" },
];

const SubmitButton = ({ className, eventType }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  const pendingWord = pendingWords.find(
    (word) => word.key === eventType
  )?.value;

  return (
    <button type="submit" className={className} aria-disabled={pending}>
      {pending ? `${pendingWord}...` : eventType} evento
    </button>
  );
};

export default SubmitButton;
