var sound = new Audio("main/AUDIO/aud1.mp3");

var i1 = 0;
function change_image1() {
    var doc1 = document.getElementById("img1");
    var color1 = ["https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EJMyDiko69AFcLwMQjLVYn47uPi60JemN%25nBhHcnPWf7KP%25EGLf01SPYt1N9yxb4w3jVqko6S0bu1CWaVDuW6X2xya3jrxmqqctLD6L8T7wG2Epk6a0X%25EpnRnw7KNbdMG5VVMhhUv1szaHnLwNaIKy3EeVl9k1vmjThK8gfHP4maqihxOFmDjtJLkwR7DTyoV%25GhaeD6yQvpCYZoWfIu49vs", "https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EJMyDiko69AFcLwMQjLVYn47uPi60JemN%25nBhHcnPWf7KP%25EGLf01SPYt1N9yr24w3jVqko6S0bu1CWaVDuW6X2xya3jrxmqqctLD6L8T7wG2Epk6a0X%25EpnRnw7KNbdMG5VVMhhUv1szaHnLwNaIKy3EeVl9k1vmjThK8gfHP4maqihxOFmDjtJLkwR7DTyoV%25GhaeD6yQvpCYZoWfIu49vs", "https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EJMyDiko69AFcLwMQjLVYn47uPi60JemN%25nBhHcnPWf7KP%25EGLf01SPYt1N9y5u4w3jVqko6S0bu1CWaVDuW6X2xya3jrxmqqctLD6L8T7wG2Epk6a0X%25EpnRnw7KNbdMG5VVMhhUv1szaHnLwNaIKy3EeVl9k1vmjThK8gfHP4maqihxOFmDjtJLkwR7DTyoV%25GhaeD6yQvpCYZoWfIu49vs"];
    doc1.style.background = "url('" + color1[i1] + "')" + "no-repeat center center/cover";
    i1 = (i1 + 1) % color1.length;
}
setInterval(change_image1, 1200);

var i2 = 0;
function change_image2() {
var doc2 = document.getElementById("img2");
var color2 = ["https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EJMyDiko69AFcLwMQjLVYn47uPi60JemN%25nBXHcnPWf7KP%25EGLf01SPYtgN9yCs4w3jVqko6S0bu1CWaVDuW6X2xya3jrxmqqctLD6L8T7wG2Epk6a0X%25EpnRnw7KNbdMG5VVMhhUv1szaHnLwNaIKy3EeVl9k1vmjThK8gfHP4maqihxOFmDjtJLkwR7DTyoV%25GhaeD6yQvpCYZoWfIu49vs", "https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EJMyDiko69AFcLwMQjLVYn47uPi60JemN%25nBXHcnPWf7KP%25EGLf01SPYt1N9yIN4w3jVqko6S0bu1CWaVDuW6X2xya3jrxmqqctLD6L8T7wG2Epk6a0X%25EpnRnw7KNbdMG5VVMhhUv1szaHnLwNaIKy3EeVl9k1vmjThK8gfHP4maqihxOFmDjtJLkwR7DTyoV%25GhaeD6yQvpCYZoWfIu49vs", "https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EJMyDiko69AFcLwMQjLVYn47uPi60JemN%25nBXHcnPWf7KPbEGL91r6uEcsN9yCs4w3jVqko6S0bu1CWaVDuW6X2xya3jrxmqqctLD6L8T7wG2Epk6a0X%25EpnRnw7KNbdMG5VVMhhUv1szaHnLwNaIKy3EeVl9k1vmjThK8gfHP4maqihxOFmDjtJLkwR7DTyoV%25GhaeD6yQvpCYZoWfIu49vs"];
doc2.style.background = "url('" + color2[i2] + "')" + "no-repeat center center/cover";
i2 = (i2 + 1) % color2.length;
}
setInterval(change_image2, 1200);

var i3 = 0;
function change_image3() {
var doc3 = document.getElementById("img3");
var color3 = ["https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EJMyDiko69AFcLwMQjLVYn47uPi60JemN%25nBNHcnPWf7KP%25EGLf01SPYt1N9yvujdMtpwko6S0bu1CWaVDuW6X2xya3jrxmqqctLD6L8T7wG2Epk6a0X%25EpnRnw7KNbdMG5VVMhhUv1szaHnLwNaIKy3EeVl9k1vmjThK8gfHP4maqihxOFmDjtJLkwR7DTyoV%25GhaeD6yQvpCYZoWfIu49vs", "https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EJMyDiko69AFcLwMQjLVYn47uPi60JemN%25nBNHcnPWf7KosEGL91r6uEcsN9yCs4w3jVqko6S0bu1CWaVDuW6X2xya3jrxmqqctLD6L8T7wG2Epk6a0X%25EpnRnw7KNbdMG5VVMhhUv1szaHnLwNaIKy3EeVl9k1vmjThK8gfHP4maqihxOFmDjtJLkwR7DTyoV%25GhaeD6yQvpCYZoWfIu49vs", "https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EJMyDiko69AFcLwMQjLVYn47uPi60JemN%25nBNHcnPWf7KP%25EGLDkr6uEcsN9yCs4w3jVqko6S0bu1CWaVDuW6X2xya3jrxmqqctLD6L8T7wG2Epk6a0X%25EpnRnw7KNbdMG5VVMhhUv1szaHnLwNaIKy3EeVl9k1vmjThK8gfHP4maqihxOFmDjtJLkwR7DTyoV%25GhaeD6yQvpCYZoWfIu49vs"];
doc3.style.background = "url('" + color3[i3] + "')" + "no-repeat center center/cover";
i3 = (i3 + 1) % color3.length;
}
setInterval(change_image3, 1200);

var i4 = 0;
function change_int1() {
var doc4 = document.getElementById("int1");
var color_int1= ["https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EJMyDiko69AFcLwMQjLVYn47uPi60E8mN%25nBhHcnPWf7KosEGL91r6ux7RmVOov4w3jVqko6S0bu1CWaVDuW6X2xya3jrxmqqctLD6L8T7wG2Epk6a0X%25EpnRnw7KNbdMG5VVMhhUv1szaHnLwNaIKy3seVl9k1vmjThK8gfHP4maqihxOFmDjtJLkwR7DTyoV%25GhaeD6yQvpCYZoWfIu49vs", "https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EJMyDiko69AFcLwMQjLVYn47uPi60E8mN%25nBhHcnPWf7KosEGL91r6uxORmVOov4w3jVqko6S0bu1CWaVDuW6X2xya3jrxmqqctLD6L8T7wG2Epk6a0X%25EpnRnw7KNbdMG5VVMhhUv1szaHnLwNaIKy3seVl9k1vmjThK8gfHP4maqihxOFmDjtJLkwR7DTyoV%25GhaeD6yQvpCYZoWfIu49vs", "https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EJMyDiko69AFcLwMQjLVYn47uPi60E8mN%25nBhHcnPWf7KosEGL91r6u3QRmVOov4w3jVqko6S0bu1CWaVDuW6X2xya3jrxmqqctLD6L8T7wG2Epk6a0X%25EpnRnw7KNbdMG5VVMhhUv1szaHnLwNaIKy3seVl9k1vmjThK8gfHP4maqihxOFmDjtJLkwR7DTyoV%25GhaeD6yQvpCYZoWfIu49vs"];
doc4.style.background = "url('" + color_int1[i4] + "')" + "no-repeat center center/cover";
i4 = (i4 + 1) % color_int1.length;
}
setInterval(change_int1, 1300);

var i5 = 0;
function change_int2() {
var doc5 = document.getElementById("int2");
var color_int2 = ["https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EJMyDiko69AFcLwMQjLVYn47uPi60E8mN%25nBXHcnPWf7KosEGL4wr6uaM5N9yvujdMGJVWL%25tFXu2LFGCg4YXyvE46jj0iD2GDcmw98gfUdGXVCofUQrQ9wASWTB8ZuuBeex5%2513XhQD9SXnAYy1Iu7Pd%2556vmeAcRHhKN6Xjbe4ak62viqDd9rw2mYMuo8eXI2GYl5UtpsMFHnLNP51", "https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EJMyDiko69AFcLwMQjLVYn47uPi60E8mN%25nBXHcnPWf7KosEGL4ar6uaM5N9yvujdMGJVWL%25tFXu2LFGCg4YXyvE46jj0iD2GDcmw98gfUdGXVCofUQrQ9wASWTB8ZuuBeex5%2513XhQD9SXnAYy1Iu7Pd%2556vmeAcRHhKN6Xjbe4ak62viqDd9rw2mYMuo8eXI2GYl5UtpsMFHnLNP51", "https://pics.porsche.com/rtt/iris?COSY-EU-100-17116bXqc6eP3Hi1qwT9HcnyInrHKxJTTPE3kUWFYRpwY4EJMyDiko69AFcLwMQjLVYn47uPi60E8mN%25nBXHcnPWf7KosEGLylr6uaM5N9yvujdMGJVWL%25tFXu2LFGCg4YXyvE46jj0iD2GDcmw98gfUdGXVCofUQrQ9wASWTB8ZuuBeex5%2513XhQD9SXnAYy1Iu7Pd%2556vmeAcRHhKN6Xjbe4ak62viqDd9rw2mYMuo8eXI2GYl5UtpsMFHnLNP51"];
doc5.style.background = "url('" + color_int2[i5] + "')" + "no-repeat center center/cover";
i5 = (i5 + 1) % color_int2.length;
}
setInterval(change_int2, 1300);

function playAudio(){    
    sound.play(); 
    document.getElementById("aud_pause").style.visibility="hidden";  
    document.getElementById("aud_play").style.visibility="visible";  
}

function pauseAudio(){
    sound.pause();
    document.getElementById("aud_pause").style.visibility="visible";  
    document.getElementById("aud_play").style.visibility="hidden";  
}
