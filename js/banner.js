(function () {
  const bannerList = document.getElementById("banner-list");
  const banner = document.getElementById("banner");
  // alert(bannerList);
  const circle_lis = bannerList.getElementsByTagName("li");
  const Clone_li = bannerList.firstElementChild.cloneNode(true);
  const circle_ol = document.getElementById("circle_dot");
  const circle_dots = circle_ol.getElementsByTagName("li");

  bannerList.appendChild(Clone_li);

  let idx = 0;
  let lock = true;

  // btn.onclick= circleRight

  function circleRight() {
    if (!lock) return;
    lock = false;
    bannerList.style.transition = "transform .5s ease 0s";
    idx++;
    bannerList.style.transform = "translateX(" + idx * -25 + "%)";
    circleDot(idx);

    if (idx > 2) {
      setTimeout(function () {
        bannerList.style.transition = "none";
        bannerList.style.transform = "none";
        idx = 0;
      }, 500);
    }
    setTimeout(function () {
      lock = true;
    }, 500);
  }

  function circleDot(n) {
    for (let i = 0; i < 3; i++) {
      circle_dots[i].className = "";
    }
    circle_dots[n % 3].className = "current"; 
  }

  circle_ol.onclick=function(e){
    if (e.target.tagName.toLowerCase() == 'li') {
        idx=Number(e.target.getAttribute("data-n")) 
        bannerList.style.transform = "translateX(" + idx * -25 + "%)";
        circleDot(idx);
     }

  }

  let timer = setInterval(circleRight, 2000);
  banner.onmouseenter = function () {
    clearInterval(timer);
  };
  banner.onmouseleave = function () {
    clearInterval(timer);
    timer = setInterval(circleRight, 2000);
  };
})();
