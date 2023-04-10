import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });
  it('should display weak  if 5 value is passed',()=>{
    const pipe = new StrengthPipe() ; 
    expect(pipe.transform(5)).toEqual('5(weak)') ;
  })
  it('should display strong  if 10 value is passed',()=>{
    const pipe = new StrengthPipe() ; 
    expect(pipe.transform(10)).toEqual('10(strong)') ;
  })
});
