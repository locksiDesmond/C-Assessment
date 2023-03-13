import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Text,
  Flex,
  FormErrorMessage,
  FormControl,
  Select,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';

import { useCreateEmployeeMutation } from '../services/employees';
import { EmployeeCredentials } from '../utils/types';
import { addEmployeeSchema } from '../utils/validation';

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
    console.log({ values });
    if (isLoading) {
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
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md">
        <Text fontWeight="bold" fontSize="1.5rem">
          Add new Employee
        </Text>
        <Text mt="6">Add a new employee profile to your organization.</Text>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} mt="8" align="flex-start">
            <FormControl>
              <FormLabel htmlFor="fullName">Full Name</FormLabel>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.fullName}
              />
              {isError || (formik.errors?.fullName && <FormErrorMessage>{formik.errors?.fullName}</FormErrorMessage>)}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {isError || (formik.errors?.email && <FormErrorMessage>{formik.errors?.email}</FormErrorMessage>)}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="position">Position</FormLabel>
              <Select
                id="position"
                name="position"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.position}
                placeholder="Select option"
              >
                <option value="CEO">CEO</option>
                <option value="Senior Developer">Senior Developer</option>
                <option value="Principal Developer">Principal Developer</option>
                <option value="HR">HR</option>
                <option value="Technical Writer"> Technical Writer</option>
              </Select>
              {isError || (formik.errors?.position && <FormErrorMessage>{formik.errors?.position}</FormErrorMessage>)}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="dateJoined">Date Joined</FormLabel>
              <Input
                id="dateJoined"
                name="dateJoined"
                type="date"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.dateJoined}
              />
              {isError ||
                (formik.errors?.dateJoined && <FormErrorMessage>{formik.errors?.dateJoined}</FormErrorMessage>)}
            </FormControl>
            <Button type="submit" colorScheme="purple" width="full">
              Add
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default AddEmployee;
