import { Button } from './Button';
import { ExpandablePanel } from './ExpandablePanel';

export const AlbumListItem = ({ album }) => {
  return (
    <ExpandablePanel key={album.id} header={album.title}>
      list of photos
    </ExpandablePanel>
  );
};
