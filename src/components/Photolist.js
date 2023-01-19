import { useFetchPhotosQuery, useAddPhotoMutation } from '../store';
import { Button } from './Button';
import { Skeleton } from './Skeleton';
import { PhotoListitem } from './PhotoListitem';

export const Photolist = ({ album }) => {
  const { data: photos, isFetching, isError } = useFetchPhotosQuery(album);
  const [addPhoto, { isLoading: isAdding }] = useAddPhotoMutation();

  const onAddPhoto = () => addPhoto(album);

  let content;
  if (isFetching) content = <Skeleton className="h-8 w-8" times={2} />;
  else if (isError) content = <div>Something went wrong</div>;
  else if (photos.length === 0) content = <div>No photos</div>;
  else
    content = photos.map((photo) => (
      <PhotoListitem key={photo.id} photo={photo} />
    ));

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos in {album.title}</h3>
        <Button onClick={onAddPhoto} loading={isAdding}>
          Add Photo
        </Button>
      </div>
      <div className="mx-8 flex flex-row flex-wrap justify-centerd">
        {content}
      </div>
    </div>
  );
};
