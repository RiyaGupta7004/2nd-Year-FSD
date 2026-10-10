const EventEmitter = require('events');
class  Element extends EventEmitter{
    constructor(name,parent=null){
        super();
        this.name=name;
        this.parent=parent;
    }
    addEventListener(type,handler){
        this.on(type,handler);
    }
    removeEventListener(type,handler){
        this.off(type,handler);
    }
    dispatchEvent(type,data){
        const event={
            type:type,
            target:this,
            currentTarget:this,
            data:data,
            stopped:false,
            stopPropagation(){
             this.stopped=true;
            }
        };
        let current=this;
        while(current && !event.stopped){
            event.currentTarget=current;
            current.emit(type,event);
            current=current.parent;
        }
    }
}
const document=new Element('document');
const form=new Element('form',document);
const button=new Element('button',form);
// button.addEventListener('click',(event) =>{
//     console.log(`Button:Target=${event.target.name},currentTarget=${event.currentTarget.name}`

//     );
//});
const buttonClickHandler = (event) =>{
    console.log(`Button:Target=${event.target.name},currentTarget=${event.currentTarget.name}`);
}
button.addEventListener('click',buttonClickHandler);
button.removeEventListener('click',buttonClickHandler);
form.addEventListener('click',(event)=>{
    console.log(`Form:Target=${event.target.name},currentTarget=${event.currentTarget.name}`
    );
    event.stopPropagation();
});
document.addEventListener('click',(event)=>{
    console.log(`Document:Target=${event.target.name},currentTarget=${event.currentTarget.name}`

    );
});
button.dispatchEvent('click');

