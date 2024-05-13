export const GuardarEnStorage = (clave, elemento) => {
  // Get LocalStorage
  let elementos = JSON.parse(localStorage.getItem(clave));

  // Check if is an array
  if (Array.isArray(elementos)) {
    // Add a new element
    elementos.push(elemento);
  } else {
    // Create an array with the new element
    elementos = [elemento];
  }

  // Save in the LocalStorage
  localStorage.setItem(clave, JSON.stringify(elementos));
  // Return object saved
  return elemento;
}