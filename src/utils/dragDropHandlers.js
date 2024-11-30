export const handleDragOver = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

export const handleDrop = (e) => {
  e.preventDefault();
  e.stopPropagation();
  
  const files = [];
  if (e.dataTransfer.items) {
    [...e.dataTransfer.items].forEach((item) => {
      if (item.kind === 'file' && item.type.startsWith('image/')) {
        const file = item.getAsFile();
        files.push(file);
      }
    });
  } else {
    [...e.dataTransfer.files].forEach((file) => {
      if (file.type.startsWith('image/')) {
        files.push(file);
      }
    });
  }
  
  return files;
};