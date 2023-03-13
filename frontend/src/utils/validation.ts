import { object, string, date } from 'yup';

const email = string().email('Invalid email');
const position = string()
  .oneOf(['CEO', 'Senior Developer', 'Principal Developer'])
  .required('Required')
  .typeError('Required');

export const addEmployeeSchema = object().shape({
  email: email.required('Required'),
  fullName: string().required(),
  position,
  dateJoined: date().required(),
});
