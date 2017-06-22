var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points) {


        var revealPoints = function(index) {
            points[index].style.opacity = 1;
            points[index].style.transform = "scaleX(1) translateY(0)";
            points[index].style.msTransform = "scaleX(1) translateY(0)";
            points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
        }
        var hero = document.getElementsByClassName('hero-title');

        var revealTitleText = function() {
            hero[0].style.transform = "scaleX(1) translateY(-50%)";
            hero[0].style.msTransform = "scaleX(1) translateY(-50%)";
            hero[0].style.WebkitTransform = "scaleX(1) translateY(-50%)";
        }
                for (var i = 0; i < points.length; i++) {
            revealPoints(i);
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