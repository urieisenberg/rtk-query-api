import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export function useThunk(thunk) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback((arg) => {
    setIsLoading(true);
    dispatch(
      thunk(arg)
        .unwrap() // Unwrap the promise to get the actual data from the fulfilled action payload
        .catch((error) => setError(error.message)) // Catch the error from the rejected action payload
        .finally(() => setIsLoading(false))
    ); // This will run regardless of the promise being fulfilled or rejected
  }, [thunk, dispatch]);

  return { isLoading, error, runThunk };
}
