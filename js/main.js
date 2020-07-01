// toggle drawer div
$("#bars").on('click', function () {
    $("#drawer-nav").toggleClass("active");
    $("#bars").toggleClass("close");
})
$("#up").on('click', function () {
    $("#drawer-nav").toggleClass("active");
    $("#bars").toggleClass("close");
})



/*-------------------------------*/
/* Start type writing 
/*-------------------------------*/
var area = document.getElementById('area'),
    list = [
        'App?',
        'Subscription?',
        'Design?'
    ],
    count_li = 0,
    count = 0,
    speed = 100;


function rewrite() {
    var type = list[count_li].substring(0, count);
    document.getElementById('area').textContent = type;
    count++;
    var timer = setTimeout(rewrite, speed);
    if (count > list[count_li].length) {
        count = 0;
        count_li++;
        clearTimeout(timer);
        setTimeout(rewrite, 2500);
    }

    if (count_li === list.length) {
        count_li = 0;
    }
}

rewrite();

var flag = true;

function flashing() {
    if (flag) {
        document.getElementById('cursor').style.opacity = 1;
    } else {
        document.getElementById('cursor').style.opacity = 0;
    }
    flag = !flag
    setTimeout(flashing, 500);
}

flashing();
// End type writing