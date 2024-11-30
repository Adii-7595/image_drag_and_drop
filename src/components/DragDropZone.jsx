import { useState } from 'react';
import { handleDragOver, handleDrop } from '../utils/dragDropHandlers';
import ImagePreview from './ImagePreview';

function DragDropZone() {
  const [images, setImages] = useState([]);

  const onDrop = (e) => {
    const newImages = handleDrop(e);
    setImages(prev => [...prev, ...newImages]);
  };

  return (
    <div 
      className="drag-drop-zone"
      onDragOver={handleDragOver}
      onDrop={onDrop}
    >
      {images.length === 0 ? (
        <div className="upload-prompt">
          <p>Drag and drop images here</p>
          <p>or</p>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => {
              const files = Array.from(e.target.files);
              setImages(prev => [...prev, ...files]);
            }}
          />
        </div>
      ) : (
        <div className="image-grid">
          {images.map((image, index) => (
            <ImagePreview 
              key={index} 
              image={image} 
              onRemove={() => {
                setImages(images.filter((_, i) => i !== index));
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default DragDropZone;