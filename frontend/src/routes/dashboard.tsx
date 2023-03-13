import {
  Flex,
  Grid,
  GridItem,
  Box,
  Text,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

import { useDeleteEmployeeMutation, useGetEmployeesQuery } from '../services/employees';
import { Employee } from '../utils/types';
import Option from '../assets/option.svg';

const Dashboard = () => {
  const { data: employees } = useGetEmployeesQuery();
  const headers = [{ key: 'id' }, { key: 'full name' }, { key: 'email' }, { key: 'position' }, { key: 'date Joined' }];
  const navigate = useNavigate();
  return (
    <Box bg="gray.100">
      <Box w="min(90%,90rem)" mx="auto">
        <Flex overflow="hidden" minH="100vh" flexDir="column" pl={{ base: '1rem', md: '2rem' }} pt="3rem">
          <HStack gap="2">
            <Text fontSize="sm" fontStyle="italic">
              Dashboard
            </Text>
            <Text>/</Text>
            <Text fontSize="sm" fontStyle="italic" fontWeight="bold">
              Employee list
            </Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text mt="1rem" mb="1.5rem" fontWeight="bold" fontSize="2rem">
              Employee List
            </Text>
            <Button
              colorScheme="green"
              size="lg"
              onClick={() => {
                navigate('/add-employee');
              }}
            >
              Add
            </Button>
          </HStack>
          <Box bg="gray.50" overflow={{ base: 'scroll', lg: 'hidden' }}>
            <Grid templateColumns="repeat(6, 1fr)" bg="gray.200" textColor="black" rounded="sm">
              {headers.map((item) => (
                <GridItem
                  minWidth="5rem"
                  fontWeight="semibold"
                  py="1rem"
                  pl="1.25rem"
                  textTransform="capitalize"
                  key={item.key}
                >
                  {item.key}
                </GridItem>
              ))}
              <GridItem py="1rem" pl="1.25rem">
                <img src={Option} alt="option" />
              </GridItem>
            </Grid>
            {employees?.map((item) => (
              <EmployeeItem data={item} />
            ))}
            {(!employees || (employees && employees.length <= 0)) && (
              <Flex flexDir="column" mt="5rem" justifyContent="center" alignItems="center">
                <Text textAlign="center" fontWeight="semibold" fontSize="1.25rem">
                  No Employee
                </Text>
                <Text mt="1rem" color="blue.400">
                  <Link to="/add-employee">Add Employee</Link>
                </Text>
              </Flex>
            )}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
const EmployeeItem = ({ data }: { data: Employee }) => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" borderBottom="1px" borderColor="gray.200">
      <GridItem
        display="flex"
        fontWeight="semibold"
        alignItems="center"
        py="1rem"
        pl="1.25rem"
        textTransform="capitalize"
      >
        {data.id}
      </GridItem>
      <GridItem display="flex" alignItems="center" py="1rem" pl="1.25rem" textTransform="capitalize">
        {data.fullName}
      </GridItem>
      <GridItem py="1rem" pl="1.25rem" display="flex" alignItems="center" textTransform="capitalize">
        {data.email}
      </GridItem>
      <GridItem py="1rem" pl="1.25rem" textTransform="capitalize" display="flex" alignItems="center">
        {data.position}
      </GridItem>
      <GridItem py="1rem" pl="1.25rem" textTransform="capitalize" display="flex" alignItems="center">
        {data.dateJoined}
      </GridItem>
      <GridItem py="1rem" pl="0.25rem" display="flex" alignItems="center">
        <EmployeeActions id={data.id} />
      </GridItem>
    </Grid>
  );
};
const EmployeeActions = ({ id }: { id: string }) => {
  const navigate = useNavigate();
  const [deleteEmployee] = useDeleteEmployeeMutation();

  const handleDelete = async () => {
    const shouldDelete = window.confirm('Do you really want to delete this employee');
    if (shouldDelete) {
      await deleteEmployee(id).unwrap();
    }
  };
  return (
    <Menu>
      <MenuButton bg="gray.50" as={Button}>
        <img src={Option} alt="option" />
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() => {
            navigate(`/edit-employee/${id}`);
          }}
        >
          Edit
        </MenuItem>
        <MenuItem onClick={handleDelete} color="red.400">
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Dashboard;
