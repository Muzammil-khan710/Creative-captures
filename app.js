let index = 0;
change();

function change() {
    const x = document.querySelectorAll('.slide');

    for(let i = 0; i < x.length; i++) { 
        x[i].style.display = "none"; 
    }

    index++;

    if(index > x.length) { 
        index = 1; 
    }

    x[index - 1].style.display = "block";

    setTimeout(change, 3000);
}
