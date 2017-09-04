
$(document).ready(function () {
  var index = 1;

  function initActiveLi(i) {
    $('.slider-wrapper .navgation li').each(function () {
      $(this).removeClass('active');
      if ($(this).index() == i-1) {
        $(this).addClass('active')
      }
    })
  }
  

  
  // 初始化菜单
  var $nav = $('#nav');
  var $newNav = $('<ul></ul>');
  $newNav.append($nav.find('#nav-list').html());
  $('#nav-mobile').append($newNav);

  $('.nav-mobile').click(function () {
    if ($('#nav-mobile').css('display') == 'none') {
      $('#nav-mobile').slideDown();
      $('body,html').css('overflow','hidden');
      $(this).find('i').html('&#xe622;')
    } else {
      $('#nav-mobile').slideUp();
      $('body,html').css('overflow','auto');
      $(this).find('i').html('&#xe8cc;')
    }

  })


  // 菜单显示隐藏
  $('#nav .sub-li').on('mouseenter',function () {
    $(this).find('.sub-menu').stop(false, true).slideDown(200)
  }).on('mouseleave',function () {
    $(this).find('.sub-menu').stop(false, true).slideUp(200)
  });

  // 倒计时下面的按钮效果
  $('.rec').on('mouseenter',function () {
    var txt;
    switch ($(this).index()) {
      case 0:
        txt = '&#xe673;';
        break;
      case 1:
        txt = '&#xe663;';
        break;
      case 2:
        txt = '&#xe698;';
        break;
      case 3:
        txt = '&#xe671;';
        break;

    }
    $(this).find('i').html(txt)
  })
    .on('mouseleave', function () {
      var txt;
      switch ($(this).index()) {
        case 0:
          txt = '&#xe672;';
          break;
        case 1:
          txt = '&#xe662;';
          break;
        case 2:
          txt = '&#xe699;';
          break;
        case 3:
          txt = '&#xe670;';
          break;

      }
      $(this).find('i').html(txt)
    });

  // keynote轮播
  initActiveLi(index);
  $('.slider-wrapper .arrow-r').click(function () {

    var $sliderDiv = $(this).prev('.slider-body').find('.slider-div');
    var $length = $sliderDiv.find('.slider-box').length;

    if (index > $length-2){
      $sliderDiv.stop(true,true).animate({left:0},100);
      index = 1;
      initActiveLi(index);
    }else{
      $sliderDiv.stop(true,true).animate({left: -($sliderDiv.find('.slider-box').width()+20)*index + 'px'},100);
      index++;
      initActiveLi(index);
    }
  });
  $('.slider-wrapper .arrow-l').click(function () {
    var $sliderDiv = $(this).next('.slider-body').find('.slider-div');

    if (index == 1){
      $sliderDiv.stop(true,true).animate({left: -($sliderDiv.find('.slider-box').width()+20)*2 + 'px'},100);
      index = 3;
      initActiveLi(index);
    }else{
      initActiveLi(index-1);
      index--;
      $sliderDiv.stop(true,true).animate({left: -($sliderDiv.find('.slider-box').width()+20)*(index-1)+ 'px'},100);
    }
  });

  $('.slider-wrapper .navgation li').click(function () {
    var $sliderDiv = $(this).parents().find('.slider-div');
    index = $(this).index()+1;
    initActiveLi($(this).index()+1);
    $sliderDiv.stop(true,true).animate({left: -($sliderDiv.find('.slider-box').width()+20)*(index-1) + 'px'},100);
  })

  // 底部图片滑动
  var flowWp = $('.flow-wrapper'),
      flowSc = flowWp.find('.flow-scroll'),
      flowContainer = flowSc.find('.flow-container');
  if (flowContainer.width() > flowWp.width()) {
    flowContainer.after(flowContainer.clone());
  } else {
    flowContainer.after(flowContainer.clone()).after(flowContainer.clone()).after(flowContainer.clone())
  }

  var timer = setInterval(function () {
    if (flowWp.scrollLeft() >= flowContainer.width()) {
      flowWp.scrollLeft(0)
    } else {
      flowWp.scrollLeft(flowWp.scrollLeft()+1)
    }
  },10);

  $('.flow-wrapper').on('mouseenter', function () {
    clearInterval(timer);
  }).on('mouseleave', function () {
    timer = setInterval(function () {
      if (flowWp.scrollLeft() >= flowContainer.width()) {
        flowWp.scrollLeft(0)
      } else {
        flowWp.scrollLeft(flowWp.scrollLeft()+1)
      }
    },10);
  })

  // countdown下滑
  $('.countdown')
    .on('mouseenter',function () {
    $('.deadline-wrapper').stop(true,true).slideDown()
  })
    .on('mouseleave',function () {
    $('.deadline-wrapper').stop(true,true).slideUp()
  })

  // 上升箭头
  /*$(document).scroll(function () {
    if ($(this).scrollTop()>=300){
      console.log('show')
      $('#top').fadeIn(200);
    }else {
      $('#top').fadeOut(200);
    }
  })*/
  var timer2 = setInterval(function () {
    if ($(document).scrollTop()>=300){
      $('#top').fadeIn(200);
    }else {
      $('#top').fadeOut(200);
    }
  },20)

  $('#top a').click(function (e) {
    e.preventDefault();
    $('html,body').animate({scrollTop:0},200)
  })

})