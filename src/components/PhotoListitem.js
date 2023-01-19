import { GoTrashcan } from 'react-icons/go';
import { useDeletePhotoMutation } from '../store';

export const PhotoListitem = ({ photo }) => {
  const [deletePhoto] = useDeletePhotoMutation();

  const onDeletePhoto = () => deletePhoto(photo);

  return (
    <div onClick={onDeletePhoto} className="realtive m-2 cursor-pointer">
      <img className="h-2 w-20" src={photo.url} alt="random-faker-pic" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity 0 hover:opacity-80">
        <GoTrashcan className="text-2xl" />
      </div>
    </div>
  );
};
