{
let template = document.querySelector('#commentTemplate');
let target = document.querySelector('#comment');



for(let i = 0; i < 3; i++){
    let contents = document.importNode(template.content, true);
    contents.querySelector('.username').innerHTML = '<span>아이디<span>' + (i+1);
    contents.querySelector('.body').innerHTML = '<span>내용</span>' + (i+1);
    target.appendChild(contents);
    }
}