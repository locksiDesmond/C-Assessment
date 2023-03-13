import { Button, FormErrorMessage, FormControl, Select, FormLabel, Input, VStack } from '@chakra-ui/react';
import { FormikProps } from 'formik';
import { EmployeeCredentials } from '../utils/types';

const EmployeeForm = ({
  formik,
  info: { isError },
}: {
  formik: FormikProps<EmployeeCredentials>;
  info: { isError: boolean };
}) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <VStack spacing={4} mt="8" align="flex-start">
        <FormControl>
          <FormLabel htmlFor="fullName">Full Name</FormLabel>
          <Input
            id="fullName"
            name="fullName"
            required
            type="text"
            variant="outline"
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
            variant="outline"
            required
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
            variant="outline"
            onChange={formik.handleChange}
            value={formik.values.position}
            required
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
            required
            type="date"
            variant="outline"
            onChange={formik.handleChange}
            value={formik.values.dateJoined}
          />
          {isError || (formik.errors?.dateJoined && <FormErrorMessage>{formik.errors?.dateJoined}</FormErrorMessage>)}
        </FormControl>
        <Button mt="2rem" type="submit" colorScheme="green" width="full">
          Submit
        </Button>
      </VStack>
    </form>
  );
};

export default EmployeeForm;
