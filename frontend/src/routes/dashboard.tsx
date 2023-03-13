import { Flex, Grid, GridItem, Box, Text, HStack } from '@chakra-ui/react';
import { useGetEmployeesQuery } from '../services/employees';
import { Employee } from '../utils/types';

const Dashboard = () => {
  const { data: employees } = useGetEmployeesQuery();
  const headers = [{ key: 'id' }, { key: 'full name' }, { key: 'email' }, { key: 'position' }, { key: 'date Joined' }];
  return (
    <Box bg="gray.100">
      <Box w="min(90%,90rem)" mx="auto">
        <Flex h="100vh" flexDir="column" pl="2rem" pt="3rem">
          <HStack gap="2">
            <Text fontSize="sm" fontStyle="italic">
              Dashboard
            </Text>
            <Text>/</Text>
            <Text fontSize="sm" fontStyle="italic" fontWeight="bold">
              Employee list
            </Text>
          </HStack>
          <Text mt="1rem" fontWeight="bold" fontSize="2rem">
            Employee List
          </Text>
          <Box>
            <Grid templateColumns="repeat(5, 1fr)" bg="gray.600" textColor="white">
              {headers.map((item) => (
                <GridItem rounded="sm" py="1rem" pl="1.25rem" textTransform="capitalize" key={item.key}>
                  {item.key}
                </GridItem>
              ))}
            </Grid>
            <Grid templateColumns="repeat(5, 1fr)" borderBottom="1px" borderColor="gray.200">
              {employees?.map((item) => (
                <EmployeeItem data={item} />
              ))}
            </Grid>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
const EmployeeItem = ({ data }: { data: Employee }) => {
  return (
    <>
      <GridItem rounded="sm" py="1rem" pl="1.25rem" textTransform="capitalize">
        {data.id}
      </GridItem>
      <GridItem rounded="sm" py="1rem" pl="1.25rem" textTransform="capitalize">
        {data.fullName}
      </GridItem>
      <GridItem rounded="sm" py="1rem" pl="1.25rem" textTransform="capitalize">
        {data.email}
      </GridItem>
      <GridItem rounded="sm" py="1rem" pl="1.25rem" textTransform="capitalize">
        {data.position}
      </GridItem>
      <GridItem rounded="sm" py="1rem" pl="1.25rem" textTransform="capitalize">
        {data.dateJoined}
      </GridItem>
    </>
  );
};

export default Dashboard;
