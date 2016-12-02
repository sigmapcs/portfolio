$(()=>{
  const toggleMenu =  $('#toggle-menu'),
        aside = $('#aside'),
        main = $('#main'),
        windosWidth = $(window).width();
  let show = false;
  toggleMenu.on('click',(e)=>{
    e.preventDefault();
    if (windosWidth<1024) {
      if (!show) {
        aside.animate({
          left: "0"
        }, 300);
        main.animate({
          left: "150px"
        }, 300);
        show = true
      } else {
        aside.animate({
          left: "-150px"
        }, 300);
        main.animate({
          left: "0"
        }, 300);
        show = false;
      }
    }
  })
});
$(()=>{
  const galleryNav = $('#nav-gallery'),
        galleryItem = $('.gallery__item'),
        galleryArray = jQuery.makeArray(galleryItem);

  console.log(galleryArray);
  galleryNav.on('click','a',function (e) {
    let _t = $(this),
        show = _t.attr('data-nav');
    e.preventDefault();
    _t.parents().find('a').removeClass('nav-selected');
    _t.addClass('nav-selected');
    var i;
    for (i = 0;i<galleryArray.length;i++){
      if (_t.attr('data-nav')=='all'){
        $(galleryArray[i]).fadeIn();
      }else if (_t.attr('data-nav')=='coding'){
        if ($(galleryArray[i]).attr('data-gallery')=='coding') {
          $(galleryArray[i]).fadeIn();
        }else{
          $(galleryArray[i]).fadeOut();
        }
      }else if (_t.attr('data-nav')=='design') {
        if ($(galleryArray[i]).attr('data-gallery') == 'design') {
          $(galleryArray[i]).fadeIn();
        } else {
          $(galleryArray[i]).fadeOut();
        }
      }else if (_t.attr('data-nav')=='logo') {
        if ($(galleryArray[i]).attr('data-gallery') == 'logo') {
          $(galleryArray[i]).fadeIn();
        } else {
          $(galleryArray[i]).fadeOut();
        }
      }
    }
  })
});
/// $(galleryArray[i]).css('display','none');
