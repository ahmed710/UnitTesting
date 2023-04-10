import { LoggerService } from "./logger.service";

describe('loggerService',()=>{
let service :LoggerService; 
beforeEach(()=>{
service = new LoggerService() ; 
})


it('should not have any messages at starting',()=>{
//arrange & act 
const service = new LoggerService(); 
//act 
let count = service.messages.length; 
//assert 
expect(count).toBe(0); 
}) ; 

it('should add the message when log is called',()=>{
//arrange 
const service = new LoggerService();
//act 
service.log('message') ; 
//asset
expect(service.messages.length).toBe(1) ; 
})

it('should clear all the messages when clear is called',()=>{
//arrange 
const service = new LoggerService();
service.log('message') ;
//act
service.clear();
//assert 
expect(service.messages.length).toBe(0) ; 
})

})