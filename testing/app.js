export function fetchData(userId) {
  return {
    id: userId,
    name: 'John Doe',
    roles: ['user', 'admin'],
    lastLogin: new Date('2023-01-01T12:00:00Z').toISOString(),
    preferences: {
      notifications: true,
      theme: 'dark',
    },
  };
}

// Dependency Injection
export function processOrder(data, { processPayment }) {
  // some logic

  const paymentInfo = processPayment(data.amount);
  return paymentInfo;
}

function processPayment(amount) {
  // API call to external payment gateway

  console.log(`I am original...`);
  return { id: '123', amount: amount };
}

export function greet(name) {
  return `Hello, ${name}!`;
}

export function greetInHindi(name) {
  return `नमस्ते, ${name}!`;
}
