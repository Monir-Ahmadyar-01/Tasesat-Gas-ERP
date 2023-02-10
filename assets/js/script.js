// fix menu after scolling
function menuscroll() {
  var $navmenu = $('.bottom-nav');
  if ($(window).scrollTop() > 150) {
    $navmenu.addClass('NavFix');
  } else if ($(window).scrollTop() < 15) {
    $navmenu.removeClass("NavFix");
  }
}
menuscroll();
$(window).on('scroll', function () {
  menuscroll();
});

//  Back top

$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $('.go-top').fadeIn(200);
  } else {
    $('.go-top').fadeOut(200);
  }
});
// Animate the scroll to top
$('.go-top').click(function (event) {
  event.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, 300);
});
// search filter
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

});

$(document).ready(()=>{
  $('#date-man').datepicker({
       changeMonth: true,
       changeYear: true
   });
  $('#date-man-2').datepicker({
       changeMonth: true,
       changeYear: true
   });
});
function changeborder(id){
  $("#"+id).css({"border":"2px solid green"});
}
// styles for home.html
function logout() {
  if (confirm("آیا میخواهید خارج شوید؟") == true)
    window.location.href = "index.html";
  else return false;
}
$(()=>{
  $('.close-dialog').on('click',()=>{
   $('.bg-black').hide();
    $('.new-user-modal').hide();
  });
});
function passShow() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function viewPass() {
  var z = document.getElementById('password2');
  if (z.type === "password") {
    z.type = "text";
  } else {
    z.type = "password";
  }
}
// user info
$('.setting-modal').draggable();
$('.modal-box').draggable();
// $('.new-user-modal').draggable();
$(".passShow").on("click", () => {
  $(".passShow").toggleClass("fa-eye-slash", "fa-eye");
});
$(".showPass").on("click", () => {
  $(".showPass").toggleClass("fa-eye-slash", "fa-eye");
});
// for making tooltip for every link menu
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});


var screen_height = $(window).height();
var screen_height_without_nav = screen_height - 60;
document.getElementById('iframe').style.height = screen_height_without_nav + "px";
$(window).on('resize',()=>{
// alert('window is resized');
var screen_height2 = $(window).height();
var screen_height_without_nav2 = screen_height2 - 60;
// var sidebar = $('#right-menu').css("height");
document.getElementById("right_menu").style.height = screen_height_without_nav2 + "px";
document.getElementById('iframe').style.height = screen_height_without_nav + "px";
});
$(function () {
$('[data-toggle="tooltip"]').tooltip();
});
$(()=>{

  $("li#setting-menu").click(()=>{
    $('.user-poup-menu').hide();
  });
$("#user-pic").on("click", () => {
  $('.bg-black').fadeIn();
  $("#user-poup-menu").toggle();
  $('.noification_div').hide();
  });
  $('.bg-black').click(()=>{ 
  $("#user-poup-menu").hide(); 
  $('.bg-black').hide();
  });
});

function setlocalStoage(){
  var dollor = $("#dollor").val();
  var yoro = $("#yoro").val();
  var kaldar = $("#kaldar").val();
  var toman = $("#toman").val();

  if(dollor == ""){

  }else{
    localStorage.setItem(1,dollor);
  }
  if(yoro == ""){

  }else{
    localStorage.setItem(2,yoro);
  }
  if(kaldar == ""){

  }else{
    localStorage.setItem(3,kaldar);
  }
  if(toman == ""){

  }else{
    localStorage.setItem(4,toman);
  }
  
}
  
$(()=>{
  $('.btnCr').click(()=>{
    $('body').append('  <div class="alert alert-success  alert-dismissible fade show" role="alert"> '+ '<h3 style="text-align: center; font-size: 20px;">نرخ اسعار با موفقیت ذخیره شد</h3> '+
     '<button type="button" class="close" style="position: absolute; left: 1px !important;" '+ 'data-dismiss="alert" aria-label="Close">'+
     '   <span aria-hidden="true">&times;</span>' +
      '</button> '+
    ' </div>');
    $('.bg-black').fadeOut(2200);
    $('.exchange_currency_div').animate({
      right: '-80%',
    },200);
    $('.alert-success').show().fadeOut(2200);
    // $('.bg-black').fadeOut(3800);
    });
  });

  $(document).ready(()=>{
    $(function() {
    $('#date_man').datepicker({
         changeMonth: true,
         changeYear: true
     });
  });
});



function setlocalStoage(){
var owner_name = $("#owner_name").val();
var owner_detail1 = $("#owner_detail1").val();
var owner_detail2 = $("#owner_detail2").val();
localStorage.setItem(5,owner_name);
localStorage.setItem(6,owner_detail1);
localStorage.setItem(7,owner_detail2);

}
$('#owner_name').val(localStorage.getItem(5));
$('#owner_detail1').val(localStorage.getItem(6));
$('#owner_detail2').val(localStorage.getItem(7));
// alert(localStorage.getItem(7));
$('#total-show').val();
$('#quantity-show').on('keyup',()=>{
    $('#total-show').val($('#quantity-show').val()-$('#reciept-show').val()); 
});
$('#reciept-show').on('keyup',()=>{
    $('#total-show').val($('#quantity-show').val()-$('#reciept-show').val()); 
});

// alert('hello')
      //owl carousel
      $(document).ready(function() {
          $("#owl-demo").owlCarousel({
              navigation : true,
              slideSpeed : 300,
              paginationSpeed : 400,
              singleItem : true

          });
      });
      //custom select box
      $(function(){
          $('select.styled').customSelect();
      });

      var count = 1;
      $("#item-search").on("search",function(){
          
           var html_code = "<tr id='row_id_"+count+"'>";

                html_code+=
                '<td>'+count+'</td>';
                html_code+=
                '<td><input type="text" name="item" class="form-control item" id="item"></td>';
                html_code+=
                '<td><input type="number" name="quantity"  class="form-control quantity" id="quantity_'+count+'"></td>';
                html_code+=
                '<td><input type="number" name="price" class="form-control price" id="price_'+count+'"></td>';
                html_code+=
                '<td><input type="number" name="total" readonly class="form-control total" id="total_'+count+'"></td>';
                html_code+=
                '<td class="print"><span class="delete-img print"  id="'+count+'" ><img width="25px" style="cursor: pointer;" src="assets/img/mawadkham/trash.svg" alt=""></span></td>';
                html_code += "</tr>";
                
                $("#tbody").append(html_code);
                count++;
      });
      $(()=>{
        price.on('keyup',()=>{

      total.val(price.val() + quantity.val());
        });
        quantity.on('keyup',()=>{
          
            total.val(price.val() + quantity.val());
        });
      });
      $(document).on('click','.delete-img',function(){
          var row_id = $(this).attr("id");
          $("#row_id_"+row_id).remove();
      });
      $(document).on('keyup','.quantity',function(){
        total_cal(count);
      });
       function total_cal(count){
        var total_price =0;
        for(var x=1;x<=count;x++){
            var row_id_quantity = $('#quantity_'+x).val();
            if(row_id_quantity > 0){    
                var row_id_price = $('#price_'+x).val();
                var actual_amount = row_id_quantity*row_id_price;
                
                $('#total_'+x).val(actual_amount);
            }
        }
       }
      $(document).on('keyup','.price',function(){
                    total_cal(count);
                  });
$(()=>{
  $('.btn_logout').click(() => {
    // alert('hello');
    window.location.href = 'index.html';
  });
});
    $(document).ready(function(){
      $('.Messenger').click(function(){
        $('.budget_message').hide()
      })
    $('.noification').click(function() {
      $('.budget').hide();
        $('.bg-black').show();
        $('.noification_div').toggle();
        $('.user-poup-menu').hide();
    });
    $('.bg-black').click(function(){
        $('.noification_div').hide();
    });
    $('.item').click(function(){
      
    });
  });
$(function(){
  $('.d-btn').click(function(e){
		if($(this).attr('data-open') == 'open'){
			$('.sub-sub').slideUp();
			$(this).next().slideDown();
			$('.d-btn').attr('data-open','open');
			$(this).attr('data-open','close');
		} else {
			$(this).next().slideUp();
			$('.d-btn').attr('data-open','open');
		}
  })
  
    $('#sidebar .sub-menu > a').click(function () {
      $('.sub-sub').hide();
        var last = $('.sub-menu.open', $('#sidebar'));
        last.removeClass("open");
        $('.arrow', last).removeClass("open");
        $('.sub', last).slideUp(200);
        var sub = $(this).next();
        if (sub.is(":visible")) {
            $('.arrow', $(this)).removeClass("open");
            $(this).parent().removeClass("open");
            sub.slideUp(200);
        } else {
            $('.arrow', $(this)).addClass("open");
            $(this).parent().addClass("open");
            sub.slideDown(200);
        }
        var o = ($(this).offset());
        diff = 200 - o.top;
        if(diff>0)
            $("#sidebar").scrollTo("-="+Math.abs(diff),500);
        else
            $("#sidebar").scrollTo("+="+Math.abs(diff),500);
            
        e.preventDefault();
        e.stopPropagation();
    });
    
//    sidebar toggle


    $(function() {
        function responsiveView() {
            var wSize = $(window).width();
            if (wSize <= 768) {
                $('#container').addClass('sidebar-close');
                $('#sidebar > ul').hide();
            }

            if (wSize > 768) {
                $('#container').removeClass('sidebar-close');
                $('#sidebar > ul').show();
            }
        }
        $(window).on('load', responsiveView);
        $(window).on('resize', responsiveView);
    });

    $('.icon-reorder').click(function (e) {
        if ($('#sidebar > ul').is(":visible") === true) {
            $('#iframe').css({
                'right': 0
            });
            $('#sidebar').css({
                'width': '50px !important'
            });
            $('#sidebar > ul ').hide();
            $('span.text ').hide();
            $("#container").addClass("sidebar-closed");
        } else {
          $('span.text ').show();
            $('#iframe').css({
                'right': 100
            });
            $('#sidebar > ul').show();
            $('#sidebar').css({
                'width': '50px !important'
            });
            $("#container").removeClass("sidebar-closed");
        }
    });
});

// making a style for a buttons click effect
const buttoncs = document.querySelectorAll('button');
buttoncs.forEach((btn)=>{
  btn.onclick = function(e){
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientX - e.target.offsetTop;
    
    ripple.style.left = x + 'px';
    ripple.style.Top = y + 'px';
    let ripple = document.createElement("rip");
  }
});