import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useCreateEmployeeMutation } from '../services/employees';
import { EmployeeCredentials } from '../utils/types';
import { addEmployeeSchema } from '../utils/validation';

const initialValues = {
  dateJoined: '',
  email: '',
  position: '',
};
const AddEmployee = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validateOnBlur: true,
    validationSchema: addEmployeeSchema,
  });

  const [addEmployee, info] = useCreateEmployeeMutation();
  async function onSubmit(values: EmployeeCredentials) {
    if (info.isLoading) {
      return;
    }
    try {
      const response = await addEmployee(values).unwrap();
      console.log({ response });
      navigate('/dashboard');
    } catch (err: any) {
      console.log({ err });
    }
  }

  return <div>addEmployee</div>;
};

export default AddEmployee;
