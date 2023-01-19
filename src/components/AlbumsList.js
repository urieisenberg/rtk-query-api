import { useFetchAlbumsQuery } from '../store';

export const AlbumsList = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  return <div>AlbumsList</div>;
};
