const container = document.getElementById('container');
let count = 32;
container.style.gridTemplateColumns='repeat('+count+' 1fr);';

for(let i=1;i<=count*count;i++) {
    let square = document.createElement('div');
    square.className='square';
    square.addEventListener('mouseover',()=>{
        square.className='colored';
    });
    container.appendChild(square);
}
const clear = document.getElementById('clear');
clear.addEventListener('click',()=>{
    const squares=document.getElementsByClassName('colored');
    for(let i = squares.length-1;i>=0;i--){
        squares.item(i).className='square';
    };
});
