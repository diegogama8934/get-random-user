import { TbExclamationCircle } from "react-icons/tb";

interface Props {
  errorMessage: string;
}


export default function ErrorRequest({ errorMessage }: Props) {



  return (
    <div className="w-96 h-40 flex flex-col justify-center items-center gap-4 bg-red-900 p-8 rounded-xl border border-red-500">
      <h2 className="font-bold">Ocurrió un error...</h2>
      <small>{errorMessage}</small>
      <TbExclamationCircle size={40} color="#FF0000"/>
    </div>
  );
}