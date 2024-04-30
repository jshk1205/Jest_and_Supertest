const { get } = require('./todo-service');
jest.mock('./database-module', () => ({
  fetchTodos: jest.fn().mockResolvedValue([
    { id: 1, task: 'Learn Node.js', completed: false }
  ])
}));

describe('get function', () => {
  it('should return a list of todos', async () => {
    const todos = await get();
    expect(todos).toEqual([
      { id: 1, task: 'Learn Node.js', completed: false }
    ]);
  });

  it('should handle errors', async () => {
    require('./database-module').fetchTodos.mockRejectedValue(new Error('Failed to fetch'));
    await expect(get()).rejects.toThrow('Failed to fetch');
  });
});
