import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store';
import { Skeleton } from './Skeleton';

export const UsersList = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) return <Skeleton times={7} />;

  if (error) return <div>Error</div>;

  return <></>;
};
