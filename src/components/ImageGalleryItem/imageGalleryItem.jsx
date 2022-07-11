export const ImageGalleryItem = ({ src, tags }) => {
  return (
    <li className="gallery-item">
      <img src={src} alt={tags} />
    </li>
  );
};
