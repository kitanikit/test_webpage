function toggleClearIcon(inputElement) {
  const clearIcon = inputElement.nextSibling;
  if (inputElement.value.length > 0) {
    clearIcon.style.display = 'block';
  } else {
    clearIcon.style.display = 'none';
  }
}