import { string, validate } from 'joi';

function validateGenre(genre) {
  const schema = {
    name: string().min(3).required(),
  };
  return validate(genre, schema);
}
// eslint-disable-next-line no-underscore-dangle
const _validateGenre = validateGenre;
// eslint-disable-next-line import/prefer-default-export
export { _validateGenre as validateGenre };
