import { ImageGalleryItem } from '../ImageGalleryItem/imageGalleryItem';

export const ImageGallery = ({ items }) => {
  return (
    <ul className="gallery">
      {items.map(item => {
        return (
          <ImageGalleryItem
            key={item.id}
            src={item.webformatURL}
            tags={item.tags}
          />
        );
      })}
    </ul>
  );
};
