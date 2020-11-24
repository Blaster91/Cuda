
// Sticky nav bar
window.onscroll = function() {stickyFunction()};

var navbar = document.getElementById("nav_menu_stiky");
var navBarFix = document.getElementById("nav_menu");
var contentElt = document.getElementsByTagName("footer");
var sticky = navBarFix.offsetTop;
console.log("navbar" + navBarFix.offsetTop);
console.log("page" + window.pageYOffset);

function stickyFunction() {
  if (window.pageYOffset >= sticky+10) {
    navbar.classList.add("sticky_view");
    navbar.classList.remove("sticky_hidden");
  } else {
    navbar.classList.remove("sticky_view");
    navbar.classList.add("sticky_hidden");
  }
}

stickyFunction(); //load start

// Open Curtain Menu 
function openNav() {
    document.getElementById("nav_menu_stiky").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("nav_menu_stiky").style.height = "0%";
  }





function view_all_items(){
    let allElt = document.querySelectorAll(".items_portfolio");
    allElt.forEach(element => {
        element.classList.remove("animation_delete_items_portfolio");
    });
};

function hidde_apps_icons(){
    let allElt = document.querySelectorAll(".items_portfolio");
    allElt.forEach(element => {
        element.classList.remove("animation_delete_items_portfolio");
    });
    allElt = document.querySelectorAll("#ui_item, #blog_item");
    allElt.forEach(element => {
        element.classList.add("animation_delete_items_portfolio");
    });
}
function hidde_mock_up_icons(){
    let allElt = document.querySelectorAll(".items_portfolio");
    allElt.forEach(element => {
        element.classList.remove("animation_delete_items_portfolio");
    });
    allElt = document.querySelectorAll("#mock-up_item, #blog_item");
    allElt.forEach(element => {
        element.classList.add("animation_delete_items_portfolio");
    });
}

function hidde_mock_up_app_ui(){
    let allElt = document.querySelectorAll(".items_portfolio");
    allElt.forEach(element => {
        element.classList.remove("animation_delete_items_portfolio");
    });
    allElt = document.querySelectorAll("#mock-up_item, #app_item, #ui_item");
    allElt.forEach(element => {
        element.classList.add("animation_delete_items_portfolio");
    });
}

function focusInput(id){
    let labelElt = document.getElementById("lb_" + id);
    let inputNameElt = document.getElementById(id);
    labelElt.classList.remove("lb_animation_down");
    labelElt.classList.add("lb_animation_up");
}

function onblurInput(id){
    let labelElt = document.getElementById("lb_" + id);
    let inputNameElt = document.getElementById(id);
    if(inputNameElt.value == ""){
        labelElt.classList.remove("lb_animation_up");
        labelElt.classList.add("lb_animation_down");
    }
}

(function($){

    $('input.round').wrap('<div class="round" />').each(function(){
       
        var $input = $(this);
        var $div = $input.parent();
        var min = $input.data('min');
        var max = $input.data('max');
        var ratio = ($input.val() - min) / (max - min);
        var color = $input.data('color') ? $input.data('color') : "#91c2ff";
        var $val_default = $input.val();
        var $start_val = 0;
        $input.val(0);

        var $circle = $('<canvas width="200px" height="200px"/>');
        var $color = $('<canvas width="200px" height="200px"/>');
        $div.append($circle);
        $div.append($color);
        var ctx = $circle[0].getContext('2d');

        ctx.beginPath();
        ctx.arc(100,100,85,0,2*Math.PI);
        ctx.lineWidth = 15;
        ctx.strokeStyle = "#dfe8ed";
        ctx.shadowOffsetX = 2;
        ctx.shadowBlur = 5;
        ctx.shadowColor="rgba(0,0,0,0)";
        ctx.stroke();

        var ctx = $color[0].getContext('2d');
        ctx.beginPath();
        ctx.arc(100,100,85,-1/2 * Math.PI, ratio*2*Math.PI - 1/2 * Math.PI);
        ctx.lineWidth = 15;
        ctx.strokeStyle = color;
        ctx.stroke();

        setInterval(function(){
            if($start_val <= $val_default){
                $nbr_val = $start_val;
                $input.val($nbr_val + "%");
                $start_val++;
                ratio = $start_val/100;
                ctx.clearRect(0,0,200,200);
                ctx.beginPath();
                ctx.arc(100,100,85,-1/2 * Math.PI, ratio*2*Math.PI - 1/2 * Math.PI);
                ctx.lineWidth = 15;
                ctx.strokeStyle = color;
                ctx.stroke();
            }
            else{
                return false;
            }
        }, 50)
        
        $div.mousedown(function(event){
            event.preventDefault();
            $div.bind('mousemove', function(event){
                var x = event.pageX - $div.offset().left - $div.width()/2;
                var y = event.pageY - $div.offset().top - $div.height()/2;
                var a = Math.atan2(x, -y) / (2*Math.PI);
                if(a < 0){a+=1}
                ctx.clearRect(0,0,200,200);
                ctx.beginPath();
                ctx.arc(100,100,85,-1/2 * Math.PI, a*2*Math.PI - 1/2 * Math.PI);
                ctx.lineWidth = 15;
                ctx.strokeStyle = color;
                ctx.stroke();
                $input.val(Math.round(a * (max - min) + min) + "%");
            })
        }).mouseup(function(event){
            event.preventDefault();
            $div.unbind('mousemove');
        })
    })
})(jQuery);