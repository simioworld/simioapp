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

const pendingWords = [
  { Crear: "Creando" },
  { Editar: "Editando" },
  { Eliminar: "Eliminando" },
  { Enviar: "Enviando" },
] as pendingWordProps[];

const SubmitButton = ({ className, eventType }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  const pendingWord = pendingWords.find((word) => word[eventType] as string);

  return (
    <button type="submit" className={className} aria-disabled={pending}>
      {pending ? "Enviando..." : "Enviar"} {eventType} evento
    </button>
  );
};

export default SubmitButton;
