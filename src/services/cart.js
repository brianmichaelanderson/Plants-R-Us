import apiFetch from './apiFetch';

export const addPlantToCart = ({ plantId, quantity, potColor }) =>
  apiFetch('POST', `/cart/plants/${plantId}`, {
    quantity,
    pot_color: potColor,
  });

export const getCart = () => apiFetch('GET', '/cart');

export const removeItemFromCart = ({ cartItemId }) => apiFetch('DELETE', `/cart/${cartItemId}`)
