import { TbLoader } from "react-icons/tb";

export default function LoadingRequest() {


  return (
    <div className="w-96 h-40 flex flex-col justify-center items-center gap-4 bg-neutral-800 p-8 rounded-xl absolute top-4">
      <h2>Cargando contenido...</h2>
      <small>Por favor espere</small>
      <TbLoader size={40} className="animate-spin" />
    </div>
  );
}