import shortid from 'shortid';

export const generateId = () => {
  return `_${shortid()}`;
};
