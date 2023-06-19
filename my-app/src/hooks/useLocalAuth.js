import { useState, useEffect } from "react";

const useAuth = (url, value) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loginSignUpWithUrl = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        });
        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    loginSignUpWithUrl();
  }, [url]);

  return { data, isLoading, error };
};

export default useAuth;
