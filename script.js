setInterval(()=>{
     d = new Date();
     hours=d.getHours();
     minutes=d.getMinutes();
     seconds=d.getSeconds();
     hour_hand=30*hours+minutes/2;
     minute_hand=6*minutes+seconds/10;
     second_hand=6*seconds;
    hour.style.transform=`rotate(${hour_hand}deg)`; 
    minute.style.transform=`rotate(${minute_hand}deg)`; 
    second.style.transform=`rotate(${second_hand}deg)`; 
}, 1000);
