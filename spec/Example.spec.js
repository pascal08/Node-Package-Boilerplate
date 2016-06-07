import Example from '../src/Example/Example';

describe('Example', () => {
    it('says hello', () => {
        expect(Example.sayHello()).toBe('Hello!');
    });
});