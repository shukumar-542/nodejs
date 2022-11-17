const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('ringing',({first, second})=>{
      console.log(`we need to run! beacuse ${first} , ${second}`);
})

setTimeout(()=>{
      emitter.emit('ringing',{
            first : 'first period Done',
            second: 'second Period comming soon.'
      })
},2000)