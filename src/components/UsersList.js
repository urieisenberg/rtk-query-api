import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store';

export const UsersList = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error</div>;

  return <></>;
};
