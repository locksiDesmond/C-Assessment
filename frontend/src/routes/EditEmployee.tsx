import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Text, Flex } from '@chakra-ui/react';

import { useGetEmployeeQuery, useUpdateEmployeeMutation } from '../services/employees';
import { EmployeeCredentials } from '../utils/types';
import { addEmployeeSchema } from '../utils/validation';
import EmployeeForm from '../components/EmployeeForm';

const initialValues = {
  dateJoined: '',
  email: '',
  fullName: '',
  position: '',
};

const EditEmployee = () => {
  const navigate = useNavigate();
  const { employeeId } = useParams();

  const { data: employee, isSuccess } = useGetEmployeeQuery(employeeId as string);
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validateOnBlur: true,
    validationSchema: addEmployeeSchema,
  });

  const [editEmployee, { isError, isLoading }] = useUpdateEmployeeMutation();

  useEffect(() => {
    if (isSuccess) {
      const { fullName, email, dateJoined, position } = employee;
      formik.setValues({
        fullName,
        email,
        dateJoined,
        position,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  async function onSubmit(values: EmployeeCredentials) {
    if (isLoading) {
      return;
    }
    await editEmployee({ body: values, id: employeeId as string }).unwrap();

    navigate('/');
  }
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" w={{ lg: '50%' }} p={6} rounded="md">
        <Text fontWeight="bold" fontSize="1.5rem">
          Edit Employee Details
        </Text>
        <Text mt="6">Edit your organization employee profile.</Text>
        <EmployeeForm formik={formik} info={{ isError }} />
      </Box>
    </Flex>
  );
};

export default EditEmployee;
