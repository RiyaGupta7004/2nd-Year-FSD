//Import EventEmitter class
const EventEmitter=require('events');
//create button class
class Button extends EventEmitter{}
//create object
const button=new Button();
//Click Event Listener
button.on('click',()=>{
    console.log("Button clicked");
});


   

//MouseOver Event Listener
button.on('mouseover',()=>{
     console.log("Mouse is over the button.");
});
//Trigger Events
button.emit('click');
button.emit('mouseover');