(function () {
    const pro_img = document.getElementById("pro_img");
    const pro_lis = pro_img.getElementsByTagName("li");
    // const circle_lis = bannerList.getElementsByTagName("li");
    const pro_leftbtn = document.getElementById("slideshow-leftbtn");
    const pro_rightbtn = document.getElementById("slideshow-rightbtn");
    // const clone_li = pro_img.firstElementChild.cloneNode(true);
    // pro_img.appendChild(clone_li);
    pro_img.innerHTML += pro_img.innerHTML;

    pro_rightbtn.onclick = rightMove;
    pro_leftbtn.onclick = leftMove;

    let idx = 0;
    let lock = true;

    function rightMove() {
        if (!lock) return;
        lock = false;
        idx++;
        pro_img.style.transition = "transform .5s ease 0s";
        pro_img.style.transform = "translateX(" + idx * -154 + "px)";
        if (idx >9) {            
            setTimeout(() => {
                pro_img.style.transition = "none";
                pro_img.style.transform = "none";
                idx = 0;
            }, 500);
        }
        setTimeout(() => {
            lock = true;
        }, 500);
    }

    function leftMove() {
        if (!lock) return;
        lock = false;

        if (idx == 0) {
            pro_img.style.transition = "none";
            pro_img.style.transform = "translateX(" + -154 * 10 + "px)";
            idx = 9;
            setInterval(function () {
                pro_img.style.transition = "transform .5s ease 0s";
                pro_img.style.transform = "translateX(" + idx * -154 + "px)";
            }, 0);
        } else {
            idx--;
            pro_img.style.transform = "translateX(" + idx * -154 + "px)";
        }

        setTimeout(() => {
            lock = true;
        }, 500);
    }
})();