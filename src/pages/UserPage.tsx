import ErrorRequest from "../components/ErrorRequest";
import LoadingRequest from "../components/LoadingRequest";
import SingleUser from "../components/SingleUser";
import useRandomUser from "../hooks/useRandomUser";

export default function UserPage() {

  const {
    error,
    isLoading,
    user,
    makeRequest
  } = useRandomUser();

  return (
    <div className='flex flex-col gap-4 items-center h-screen justify-center bg-neutral-900'>

      {isLoading && <LoadingRequest />}

      {error && <ErrorRequest errorMessage={error} />}

      {user && <SingleUser user={user} />}

      <button
        disabled={isLoading}
        onClick={() => makeRequest()}
        className="w-64"
      >
        Obtener usuario
      </button>

    </div>
  );
}