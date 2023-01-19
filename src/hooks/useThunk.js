import { useState } from 'react';

export function useThunk(thunk) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const runThunk = () => {
    setIsLoading(true);
    return thunk()
      .unwrap() // Unwrap the promise to get the actual data from the fulfilled action payload
      .catch((error) => setError(error.message)) // Catch the error from the rejected action payload
      .finally(() => setIsLoading(false)); // This will run regardless of the promise being fulfilled or rejected
  };

  return { isLoading, error, runThunk };
}

