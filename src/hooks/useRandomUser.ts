import { useEffect, useState } from "react";
import { getRandomUser } from "../service/getRandomUser";
import { toast } from "react-toastify";
import type { User } from "../interfaces/User";

export default function useRandomUser() {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const makeRequest = async () => {
    setIsLoading(true);
    const [randomUser, requestError] = await getRandomUser();

    if (requestError) {
      setError(requestError)
      setIsLoading(false);
      return;
    };

    if (error) setError(null);

    toast('Usuario obtenido');
    setUser(randomUser)
    setIsLoading(false);
  }

  useEffect(() => {
    const loadInitialUser = async () => {
      const [randomUser, requestError] = await getRandomUser();

      if (requestError) {
        setError(requestError);
        setIsLoading(false);
        return;
      }

      setUser(randomUser);
      setIsLoading(false);
    }

    loadInitialUser();
  }, []);

  return {
    user,
    isLoading,
    error,
    makeRequest
  }

}