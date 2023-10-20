// const mock=require('../mock.js')

it('mock function',()=>{
    const mock=jest.fn((name)=>`hello ${name}`)
    expect(mock('iman')).toBe('hello iman')
    expect(mock('m')).toBe('hello m')
    expect(mock('m')).toBe('hello m')
    expect(mock('m')).toBe('hello m')
    expect(mock).toHaveBeenCalledWith("iman");
})