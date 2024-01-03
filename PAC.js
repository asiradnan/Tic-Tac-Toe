let p1=0,p2=0,cnt=0;
let flag=true,undo_flag=false,cur=true;
let last_move;
function clickable(){
    td = document.getElementById('board').getElementsByTagName('td');
    for (let i=0;i<td.length;i++) td[i].addEventListener('click',move);
}
clickable();
function changeName(){
    elem=document.getElementById("P1name");
    let x= prompt("Enter your name:",elem.innerHTML);
    elem.innerHTML=x;
}
function rules() {
    alert('End of EVERY round, the player who makes the first move changes!');
}
function move(){
    if (this.innerHTML != '&nbsp;' || undo_flag) return;
    this.innerHTML='&#10060';
    this.style.fontSize='47px';
    this.classList.add('char');
    cnt++;
    undo_flag=true;
    last_move=this;
    
}
function undo(){
    if (undo_flag) {
        last_move.innerHTML='&nbsp';
        last_move.classList.remove('char');
        undo_flag=false;
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

function confirm(){
    check_winner_first();
    flag=!flag;
    undo_flag=false;
}   
function go_on(){
    let ans;
    if (_11.innerHTML == _12.innerHTML && _11.innerHTML == '◯' && _13.innerHTML== '&nbsp;') ans=_13;
    else if (_11.innerHTML == _13.innerHTML && _11.innerHTML == '◯' && _12.innerHTML== '&nbsp;') ans=_12;
    else if (_12.innerHTML == _13.innerHTML && _12.innerHTML == '◯' && _11.innerHTML== '&nbsp;') ans=_11;
    else if (_21.innerHTML == _22.innerHTML && _21.innerHTML == '◯' && _23.innerHTML== '&nbsp;') ans=_23;
    else if (_21.innerHTML == _23.innerHTML && _21.innerHTML == '◯' && _22.innerHTML== '&nbsp;') ans=_22;
    else if (_22.innerHTML == _23.innerHTML && _22.innerHTML == '◯' && _21.innerHTML== '&nbsp;') ans=_21;
    else if (_31.innerHTML == _32.innerHTML && _31.innerHTML == '◯' && _33.innerHTML== '&nbsp;') ans=_33;
    else if (_31.innerHTML == _33.innerHTML && _31.innerHTML == '◯' && _32.innerHTML== '&nbsp;') ans=_32;
    else if (_32.innerHTML == _33.innerHTML && _32.innerHTML == '◯' && _31.innerHTML== '&nbsp;') ans=_31;
    else if (_11.innerHTML == _21.innerHTML && _11.innerHTML == '◯' && _31.innerHTML== '&nbsp;') ans=_31;
    else if (_11.innerHTML == _31.innerHTML && _11.innerHTML == '◯' && _21.innerHTML== '&nbsp;') ans=_21;
    else if (_21.innerHTML == _31.innerHTML && _21.innerHTML == '◯' && _11.innerHTML== '&nbsp;') ans=_11;
    else if (_12.innerHTML == _22.innerHTML && _12.innerHTML == '◯' && _32.innerHTML== '&nbsp;') ans=_32;
    else if (_12.innerHTML == _32.innerHTML && _12.innerHTML == '◯' && _22.innerHTML== '&nbsp;') ans=_22;
    else if (_22.innerHTML == _32.innerHTML && _22.innerHTML == '◯' && _12.innerHTML== '&nbsp;') ans=_12;
    else if (_13.innerHTML == _23.innerHTML && _13.innerHTML == '◯' && _33.innerHTML== '&nbsp;') ans=_33;
    else if (_13.innerHTML == _33.innerHTML && _13.innerHTML == '◯' && _23.innerHTML== '&nbsp;') ans=_23;
    else if (_23.innerHTML == _33.innerHTML && _23.innerHTML == '◯' && _13.innerHTML== '&nbsp;') ans=_13;
    else if (_11.innerHTML == _22.innerHTML && _11.innerHTML == '◯' && _33.innerHTML== '&nbsp;') ans=_33;
    else if (_11.innerHTML == _33.innerHTML && _11.innerHTML == '◯' && _22.innerHTML== '&nbsp;') ans=_22;
    else if (_22.innerHTML == _33.innerHTML && _22.innerHTML == '◯' && _11.innerHTML== '&nbsp;') ans=_11;
    else if (_13.innerHTML == _22.innerHTML && _13.innerHTML == '◯' && _31.innerHTML== '&nbsp;') ans=_31;
    else if (_13.innerHTML == _31.innerHTML && _13.innerHTML == '◯' && _22.innerHTML== '&nbsp;') ans=_22;
    else if (_22.innerHTML == _31.innerHTML && _22.innerHTML == '◯' && _13.innerHTML== '&nbsp;') ans=_13;
    else if (_11.innerHTML == _12.innerHTML && _11.innerHTML != '&nbsp;' && _13.innerHTML== '&nbsp;') ans=_13;
    else if (_11.innerHTML == _13.innerHTML && _11.innerHTML != '&nbsp;' && _12.innerHTML== '&nbsp;') ans=_12;
    else if (_12.innerHTML == _13.innerHTML && _12.innerHTML != '&nbsp;' && _11.innerHTML== '&nbsp;') ans=_11;
    else if (_21.innerHTML == _22.innerHTML && _21.innerHTML != '&nbsp;' && _23.innerHTML== '&nbsp;') ans=_23;
    else if (_21.innerHTML == _23.innerHTML && _21.innerHTML != '&nbsp;' && _22.innerHTML== '&nbsp;') ans=_22;
    else if (_22.innerHTML == _23.innerHTML && _22.innerHTML != '&nbsp;' && _21.innerHTML== '&nbsp;') ans=_21;
    else if (_31.innerHTML == _32.innerHTML && _31.innerHTML != '&nbsp;' && _33.innerHTML== '&nbsp;') ans=_33;
    else if (_31.innerHTML == _33.innerHTML && _31.innerHTML != '&nbsp;' && _32.innerHTML== '&nbsp;') ans=_32;
    else if (_32.innerHTML == _33.innerHTML && _32.innerHTML != '&nbsp;' && _31.innerHTML== '&nbsp;') ans=_31;
    else if (_11.innerHTML == _21.innerHTML && _11.innerHTML != '&nbsp;' && _31.innerHTML== '&nbsp;') ans=_31;
    else if (_11.innerHTML == _31.innerHTML && _11.innerHTML != '&nbsp;' && _21.innerHTML== '&nbsp;') ans=_21;
    else if (_21.innerHTML == _31.innerHTML && _21.innerHTML != '&nbsp;' && _11.innerHTML== '&nbsp;') ans=_11;
    else if (_12.innerHTML == _22.innerHTML && _12.innerHTML != '&nbsp;' && _32.innerHTML== '&nbsp;') ans=_32;
    else if (_12.innerHTML == _32.innerHTML && _12.innerHTML != '&nbsp;' && _22.innerHTML== '&nbsp;') ans=_22;
    else if (_22.innerHTML == _32.innerHTML && _22.innerHTML != '&nbsp;' && _12.innerHTML== '&nbsp;') ans=_12;
    else if (_13.innerHTML == _23.innerHTML && _13.innerHTML != '&nbsp;' && _33.innerHTML== '&nbsp;') ans=_33;
    else if (_13.innerHTML == _33.innerHTML && _13.innerHTML != '&nbsp;' && _23.innerHTML== '&nbsp;') ans=_23;
    else if (_23.innerHTML == _33.innerHTML && _23.innerHTML != '&nbsp;' && _13.innerHTML== '&nbsp;') ans=_13;
    else if (_11.innerHTML == _22.innerHTML && _11.innerHTML != '&nbsp;' && _33.innerHTML== '&nbsp;') ans=_33;
    else if (_11.innerHTML == _33.innerHTML && _11.innerHTML != '&nbsp;' && _22.innerHTML== '&nbsp;') ans=_22;
    else if (_22.innerHTML == _33.innerHTML && _22.innerHTML != '&nbsp;' && _11.innerHTML== '&nbsp;') ans=_11;
    else if (_13.innerHTML == _22.innerHTML && _13.innerHTML != '&nbsp;' && _31.innerHTML== '&nbsp;') ans=_31;
    else if (_13.innerHTML == _31.innerHTML && _13.innerHTML != '&nbsp;' && _22.innerHTML== '&nbsp;') ans=_22;
    else if (_22.innerHTML == _31.innerHTML && _22.innerHTML != '&nbsp;' && _13.innerHTML== '&nbsp;') ans=_13;
    else if (_11.innerHTML == _22.innerHTML && _22.innerHTML == '&nbsp;' && _33.innerHTML== '◯') ans=_11;
    else if (_33.innerHTML == _22.innerHTML && _22.innerHTML == '&nbsp;' && _11.innerHTML== '◯') ans=_33;
    else if (_13.innerHTML == _22.innerHTML && _22.innerHTML == '&nbsp;' && _31.innerHTML== '◯') ans=_13;
    else if (_31.innerHTML == _22.innerHTML && _22.innerHTML == '&nbsp;' && _13.innerHTML== '◯') ans=_31;
    else if (_11.innerHTML == _12.innerHTML && _12.innerHTML == '&nbsp;' && _13.innerHTML== '◯') ans=_11;
    else if (_13.innerHTML == _12.innerHTML && _12.innerHTML == '&nbsp;' && _33.innerHTML== '◯') ans=_13;
    else if (_31.innerHTML == _32.innerHTML && _32.innerHTML == '&nbsp;' && _33.innerHTML== '◯') ans=_31;
    else if (_33.innerHTML == _32.innerHTML && _33.innerHTML == '&nbsp;' && _31.innerHTML== '◯') ans=_33;
    else if (_31.innerHTML == _21.innerHTML && _21.innerHTML == '&nbsp;' && _11.innerHTML== '◯') ans=_31;
    else if (_11.innerHTML == _21.innerHTML && _21.innerHTML == '&nbsp;' && _31.innerHTML== '◯') ans=_11;
    else if (_33.innerHTML == _23.innerHTML && _23.innerHTML == '&nbsp;' && _13.innerHTML== '◯') ans=_33;
    else if (_13.innerHTML == _23.innerHTML && _23.innerHTML == '&nbsp;' && _33.innerHTML== '◯') ans=_13;
    else if (_13.innerHTML == _22.innerHTML && _22.innerHTML == '&nbsp;' && _31.innerHTML== '❌') ans=_13;
    else if (_31.innerHTML == _22.innerHTML && _22.innerHTML == '&nbsp;' && _13.innerHTML== '❌') ans=_31;
    else if (_11.innerHTML == _22.innerHTML && _22.innerHTML == '&nbsp;' && _33.innerHTML== '❌') ans=_11;
    else if (_33.innerHTML == _22.innerHTML && _22.innerHTML == '&nbsp;' && _11.innerHTML== '❌') ans=_33;
    else if (_11.innerHTML == '&nbsp;') ans=_11;
    else if (_13.innerHTML == '&nbsp;') ans=_13;
    else if (_31.innerHTML == '&nbsp;') ans=_31;
    else if (_33.innerHTML == '&nbsp;') ans=_33;
    else if (_22.innerHTML == '&nbsp;') ans=_22;
    else if (_12.innerHTML == '&nbsp;') ans=_12;
    else if (_32.innerHTML == '&nbsp;') ans=_32;
    else if (_21.innerHTML == '&nbsp;') ans=_21;
    else if (_23.innerHTML == '&nbsp;') ans=_23;
    console.log(_11.innerHTML, _12.innerHTML, _13.innerHTML);
console.log(_21.innerHTML, _22.innerHTML, _23.innerHTML);
console.log(_31.innerHTML, _32.innerHTML, _33.innerHTML);

    ans.innerHTML='&#9711;';
    ans.style.fontWeight='900';
    ans.style.fontSize='58px';
    ans.classList.add('char');
    cnt++;
    flag=!flag;
    check_winner();
}  
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
    if(cur==false) go_on();
}

function check_winner(){
    function winner(){
        if (flag) {
            alert('Computer won!');
            p2++;
        }
        else {
            alert(document.getElementById('P1name').innerHTML+' won!');
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
function check_winner_first(){
    function winner(){
        if (flag) {
            alert('Computer won!');
            p2++;
        }
        else {
            alert(document.getElementById('P1name').innerHTML+' won!');
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
    else go_on();
}
