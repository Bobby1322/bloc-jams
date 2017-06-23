var pointsArray = document.getElementsByClassName('point');

var revealPoints = function(point) {
    point.style.opacity = 1;
    point.style.transform = "scaleX(1) translateY(0)";
    point.style.msTransform = "scaleX(1) translateY(0)";
    point.style.WebkitTransform = "scaleX(1) translateY(0)";
}

var animatePoints = function(points) {
    forEach(points, revealPoints);    
    var hero = document.getElementsByClassName('hero-title');

    var revealTitleText = function() {
        hero[0].style.transform = "scaleX(1) translateY(-50%)";
        hero[0].style.msTransform = "scaleX(1) translateY(-50%)";
        hero[0].style.WebkitTransform = "scaleX(1) translateY(-50%)";
    }
    revealTitleText();
};

window.onload = function() {

    if (window.innerHeight > 700) {
        animatePoints(pointsArray);
    }

    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 5;

    window.addEventListener('scroll', function(event) {
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
            animatePoints(pointsArray);   
        }
    });
}