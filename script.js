// Step One 

var messOne = document.getElementById('mess');

function pesan() {
    setTimeout(function() {
        messOne.style.display = 'block';
    }, 1000)

}


function login() {
    let name = document.getElementById('name').value;
    let pass = document.getElementById('pass').value;

    let one = document.getElementById('one')
    let two = document.getElementById('two')

    if(two.style.display === 'none'){
        two.style.display = 'flex'
    }else{
        two.style.display = 'none'
    }

    if(one.style.display === 'block'){
        one.style.display = 'none'
    }else{
        one.style.display = 'block'
    }

    let messTwo = document.getElementById('messtwo');
    messTwo.innerHTML = "Selamat Datang " + name;

}