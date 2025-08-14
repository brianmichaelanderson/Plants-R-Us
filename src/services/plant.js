import apiFetch from './apiFetch';

export const getPlants = () => {
  return apiFetch('GET', '/plants');
};

export const getPlantById = ({ id }) => apiFetch('GET', `/plants/${id}`);
