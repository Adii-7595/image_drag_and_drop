function ImagePreview({ image, onRemove }) {
  return (
    <div className="image-preview">
      <img
        src={URL.createObjectURL(image)}
        alt="Preview"
        className="preview-img"
      />
      <button 
        className="remove-button"
        onClick={onRemove}
      >
        ×
      </button>
    </div>
  );
}

export default ImagePreview;