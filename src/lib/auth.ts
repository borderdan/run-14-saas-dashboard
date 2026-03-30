export const mockUser = {
  id: '1',
  email: 'test@example.com',
  name: 'Test User',
};

export function getCurrentUser() {
  return mockUser;
}

export function requireAuth() {
  const user = getCurrentUser();
  if (!user) {
    throw new Error('Not authenticated');
  }
  return user;
}
