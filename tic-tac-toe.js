let p1=0,p2=0,cnt=0;
let flag=true,undo_flag=false,cur=true;
let last_move;
td = document.getElementsByTagName('td')

for (let i=0;i<td.length;i++) td[i].addEventListener('click',move);

function changeName(value){
    elem=document.getElementById(value);
    let x= prompt("Enter your name:",elem.innerHTML);
    elem.innerHTML=x;
}
function rules() {
    alert('End of every round, the player who makes the first move changes!\nYes, after every round!');
}
function move(){
    if (this.innerHTML != '&nbsp;') return;
    if (flag) {
        this.innerHTML='&#10060';
        this.style.fontSize='47px';
    }
    else {
        this.innerHTML='&#9711';
        this.style.fontWeight='900';
        this.style.fontSize='58px';
    }
    cnt++;
    
    flag=!flag;
    undo_flag=true;
    last_move=this;
    check_winner();
}

function undo(){
    if (undo_flag) {
        last_move.innerHTML='&nbsp';
        undo_flag=false;
        flag=!flag;
        cnt--;
    }
}

let _11 = document.getElementById('11');
let _12 = document.getElementById('12');
let _13 = document.getElementById('13');
let _21 = document.getElementById('21');
let _22 = document.getElementById('22');
let _23 = document.getElementById('23');
let _31 = document.getElementById('31');
let _32 = document.getElementById('32');
let _33 = document.getElementById('33');

function rematch(){
    _11.innerHTML='&nbsp;';
    _12.innerHTML='&nbsp;';
    _13.innerHTML='&nbsp;';
    _21.innerHTML='&nbsp;';
    _22.innerHTML='&nbsp;';
    _23.innerHTML='&nbsp;';
    _31.innerHTML='&nbsp;';
    _32.innerHTML='&nbsp;';
    _33.innerHTML='&nbsp;';
    cur=!cur;
    flag=cur;
    cnt=0;
}

function check_winner(){
    function winner(){
        if (flag) {
            alert(document.getElementById('P2name').innerHTML+' wins!');
            p2++;
        }
        else {
            alert(document.getElementById('P1name').innerHTML+' wins!');
            p1++;
        }
        document.getElementById("P1score").innerHTML=p1;
        document.getElementById("P2score").innerHTML=p2;
        rematch();
    }
    function draw(){
        alert("Match ends up with a DRAW!")
        rematch();
    }
    let _11 =document.getElementById('11').innerHTML;
    let _12 =document.getElementById('12').innerHTML;
    let _13 =document.getElementById('13').innerHTML;
    let _21 =document.getElementById('21').innerHTML;
    let _22 =document.getElementById('22').innerHTML;
    let _23 =document.getElementById('23').innerHTML;
    let _31 =document.getElementById('31').innerHTML;
    let _32 =document.getElementById('32').innerHTML;
    let _33 =document.getElementById('33').innerHTML;
    if (_11 == _12 && _11 == _13 && _11 != '&nbsp;') setTimeout(winner,100);
    else if (_21 == _22 && _21 == _23 && _21 != '&nbsp;') setTimeout(winner,100);
    else if (_31 == _32 && _31 == _33 && _31 != '&nbsp;')  setTimeout(winner,100);
    else if (_31 == _21 && _31 == _11 && _31 != '&nbsp;') setTimeout(winner,100);
    else if (_32 == _22 && _32 == _12 && _32 != '&nbsp;') setTimeout(winner,100);
    else if (_33 == _23 && _33 == _13 && _33 != '&nbsp;')  setTimeout(winner,100);
    else if (_11 == _22 && _11 == _33 && _11 != '&nbsp;') setTimeout(winner,100);
    else if (_31 == _22 && _31 == _13 && _31 != '&nbsp;')  setTimeout(winner,100);
    else if (cnt==9) setTimeout(draw,100);
}
