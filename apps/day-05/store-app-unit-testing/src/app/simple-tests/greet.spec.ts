import { greet } from './greet';

xdescribe('greet', () => {
  it('should include the name in the message', () => {
    const name = 'hari';

    const result = greet(name);

    expect(result).toContain(name);
  });
});
