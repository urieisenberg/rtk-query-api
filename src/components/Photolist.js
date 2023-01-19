import { useFetchPhotosQuery, useAddPhotoMutation } from '../store';
import { Button } from './Button';

export const Photolist = ({ album }) => {
  const { data: photos, isLoading } = useFetchPhotosQuery(album);
  const [addPhoto, { isLoading: isAdding }] = useAddPhotoMutation();

  const onAddPhoto = () => addPhoto(album);

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos in {album.title}</h3>
        <Button onClick={onAddPhoto} loading={isAdding}>
          Add Photo
        </Button>
      </div>
    </div>
  );
};
