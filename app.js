const hoursDeg = 360 / 12;
const minutesDeg = 360 / 60;
document.querySelector('.form_clock').addEventListener('submit', e=>{
    e.preventDefault();
    let hours = document.getElementById('hours').value;
    let minutes = document.getElementById('minutes').value;
    let hoursChange = document.querySelector('.hours');
    let minutesChange = document.querySelector('.minutes');
    if(minutes == ''){
        minutes = 0;
    }
    minutesChange.style.rotate = (minutes*minutesDeg-90)+'deg';
    if(hours == ''){
        hours = 0;
    }
    else{
        if(hours >= 12){
            hours -= 12;
        }
    }
    hoursChange.style.rotate = (hours*hoursDeg-90+hoursDeg/60*minutes)+'deg';

    let insideAngle = (hours*hoursDeg+hoursDeg/60*minutes) - (minutes*minutesDeg);
    if(insideAngle < 0){
        insideAngle *= -1;
    }
    if(insideAngle > 180) {
        insideAngle -= 360;
        insideAngle *= -1;
    }
    document.querySelector('.insideAngle').innerHTML = insideAngle + ' degrees';
    let outsideAngle = 360 - insideAngle;
    document.querySelector('.outsideAngle').innerHTML = outsideAngle + ' degrees';
});