// convert it to snake case
const input = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  isEmployed: true,
};

const convertToSnakeCase = (str) => {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase();
};

const snakeCaseObj = Object.entries(input).reduce((acc, curr) => {
  const snakeCaseKey = convertToSnakeCase(curr[0]);
  acc[snakeCaseKey] = curr[1];
  return acc;
}, {});

console.log(snakeCaseObj);
