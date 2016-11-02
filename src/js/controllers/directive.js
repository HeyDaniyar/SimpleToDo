angular.module('daniTodo').directive('toolMenu',function () {
  return{
    restrict:'A',
    replace:true,
    link:function (scope,element,attr) {
        element.on('click',function (event) {
          var pageX = event.originalEvent.pageX;
          var pageY = event.originalEvent.pageY;
          var selected = element.attr('attr-type');
          var ele = angular.element( document.querySelector( '#'+selected ) );
          ele.css({'display':'inline-block','left':pageX + 'px','top':pageY + 'px',});
        })
        var ele = $('.AmiMenu');
        ele.on('mouseleave',function () {
          ele.css('display','none');
        })

    }

  }
})
