import HelloWorld from '../utils/HelloWorld';

it ("Should return 'Hello Alison'", ()=>{
    const result = HelloWorld();
    expect(result).toBe("Hello Alison");
});

