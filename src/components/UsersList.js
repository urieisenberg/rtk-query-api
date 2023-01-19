import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../store';

export const UsersList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <></>;
};
