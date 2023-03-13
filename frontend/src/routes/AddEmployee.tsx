import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Box, Text, Flex } from '@chakra-ui/react';

import { useCreateEmployeeMutation } from '../services/employees';
import { EmployeeCredentials } from '../utils/types';
import { addEmployeeSchema } from '../utils/validation';
import EmployeeForm from '../components/EmployeeForm';

const initialValues = {
  dateJoined: '',
  email: '',
  fullName: '',
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

  const [addEmployee, { isError, isLoading }] = useCreateEmployeeMutation();

  async function onSubmit(values: EmployeeCredentials) {
    if (isLoading) {
      return;
    }
    try {
      await addEmployee(values).unwrap();
      navigate('/');
    } catch (err: any) {
      console.log({ err });
    }
  }
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box w={{ lg: '50%' }} bg="white" p={6} rounded="md">
        <Text fontWeight="bold" fontSize="1.75rem">
          Add New Employee
        </Text>
        <Text mt="6">Add a new employee profile to your organization.</Text>
        <EmployeeForm formik={formik} info={{ isError }} />
      </Box>
    </Flex>
  );
};

export default AddEmployee;
