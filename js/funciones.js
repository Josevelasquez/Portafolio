let heroContainer = document.getElementById('heroContainer');
let writing = str => {
    let arrFromtStr = str.split('');
    let i = 0;
    let printStr = setInterval(function(){
        heroContainer.style.color = 'white';
        heroContainer.style.fontSize = '48px';
        heroContainer.style.fontWeight= 'bold';
        heroContainer.style.textAlign = 'center';
        heroContainer.style.fontFamily = 'Montserrat, sans-serif';
        heroContainer.innerHTML += arrFromtStr[i];

        i++;
        if( i === arrFromtStr.length){
            clearInterval(printStr);
        }
    },200);
};

writing('Me gustaría crear tu solución.');
