(function($) {
  $.fn.extend({
    doubleviewer: function(options) {
      var defaults = {
        lineColor: '#F60',
        lineWidth: 2,
        width: 600,
        height: 400,
        startPosition: .5,
        cursorProperty: 'move',
        img_before: 'images/is1_3_lg.jpg',
        img_after: 'images/is1_3b_lg.jpg',
        cursorVisible: true,
        noClick: false,
        stopClick: false,
        cursor: {
          color: '#f80',
          size: 10,
          gap: 6,
          lineColor: '#fff',
          lineH: 40,
          lineW: 4
        }
      };
      options = $.extend(defaults, options);
      var rand = Math.round(Math.random() * 999999);
      return this.each(function() {
        var o = options;
        o.lineWidth = o.lineWidth / 2;
        var obj = $(this);
        $(obj).width(o.width).height(o.height).css({
          'overflow': 'hidden',
          'position': 'relative',
          'padding': '0',
          'height': o.height
        });
        $(obj).prepend('<div id="before' + rand + '"><img width="' + o.width + '" height="' + o.height + '" src="' + o.img_before + '" /></div>');
        $(obj).prepend('<div id="after' + rand + '"><img width="' + o.width + '" height="' + o.height + '" src="' + o.img_after + '" /></div>');
        $('#after' + rand).css({
          'height': o.height,
          'width': (o.width * o.startPosition),
          'position': 'absolute',
          'overflow': 'hidden',
          'left': '0px',
          'z-index': '1'
        });
        $(obj).prepend('<div id="drag' + rand + '"><div id="line' + rand + '"></div></div>');
        if (o.cursorVisible) {
          $('#drag' + rand).prepend('<div id="cur' + rand + '">' + '<div id="cur_l' + rand + '"></div>' + '<div id="cur_r' + rand + '"></div>' + '<div id="rect' + rand + '"></div>' + '<div id="region' + rand + '"></div>' + '</div>')
        }
        $('#cur_l' + rand).css({
          'position': 'absolute',
          'overflow': 'hidden',
          'width': 0,
          'height': 0,
          'margin-left': -o.cursor.gap / 2 + 'px',
          'border-top': o.cursor.size + 'px solid transparent',
          'border-right': o.cursor.size + 'px solid ' + o.cursor.color,
          'border-bottom': o.cursor.size + 'px solid transparent'
        });
        $('#cur_r' + rand).css({
          'position': 'absolute',
          'overflow': 'hidden',
          'width': 0,
          'height': 0,
          'margin-left': o.cursor.gap / 2 + o.cursor.size + 'px',
          'border-top': o.cursor.size + 'px solid transparent',
          'border-left': o.cursor.size + 'px solid ' + o.cursor.color,
          'border-bottom': o.cursor.size + 'px solid transparent'
        });
        $('#rect' + rand).css({
          'position': 'absolute',
          'overflow': 'hidden',
          'width': o.cursor.lineW + 'px',
          'height': o.cursor.lineH + 'px',
          'margin-left': -o.cursor.lineW / 2 + o.cursor.size + 'px',
          'margin-top': -o.cursor.lineH / 2 + o.cursor.size + 'px',
          'background': o.cursor.lineColor
        });
        $('#region' + rand).css({
          'position': 'absolute',
          'overflow': 'hidden',
          'width': o.cursor.size * 2 + o.cursor.gap + 'px',
          'height': o.cursor.lineH + 'px',
          'margin-left': -o.cursor.gap / 2 + 'px',
          'margin-top': -o.cursor.lineH / 2 + o.cursor.size + 'px'
        });
        $(obj).prepend('<div id="loading' + rand + '" style="background:#ffffff; width: ' + o.width + 'px; height: ' + o.height + 'px; position: absolute; z-index: 9999">' + '<img id="loading_' + rand + '" width="16" height="11" src="data:image/gif;base64,R0lGODlhEAALAPQAAP///wAAANra2tDQ0Orq6gYGBgAAAC4uLoKCgmBgYLq6uiIiIkpKSoqKimRkZL6+viYmJgQEBE5OTubm5tjY2PT09Dg4ONzc3PLy8ra2tqCgoMrKyu7u7gAAAAAAAAAAACH+GkNyZWF0ZWQgd2l0aCBhamF4bG9hZC5pbmZvACH5BAALAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAEAALAAAFLSAgjmRpnqSgCuLKAq5AEIM4zDVw03ve27ifDgfkEYe04kDIDC5zrtYKRa2WQgAh+QQACwABACwAAAAAEAALAAAFJGBhGAVgnqhpHIeRvsDawqns0qeN5+y967tYLyicBYE7EYkYAgAh+QQACwACACwAAAAAEAALAAAFNiAgjothLOOIJAkiGgxjpGKiKMkbz7SN6zIawJcDwIK9W/HISxGBzdHTuBNOmcJVCyoUlk7CEAAh+QQACwADACwAAAAAEAALAAAFNSAgjqQIRRFUAo3jNGIkSdHqPI8Tz3V55zuaDacDyIQ+YrBH+hWPzJFzOQQaeavWi7oqnVIhACH5BAALAAQALAAAAAAQAAsAAAUyICCOZGme1rJY5kRRk7hI0mJSVUXJtF3iOl7tltsBZsNfUegjAY3I5sgFY55KqdX1GgIAIfkEAAsABQAsAAAAABAACwAABTcgII5kaZ4kcV2EqLJipmnZhWGXaOOitm2aXQ4g7P2Ct2ER4AMul00kj5g0Al8tADY2y6C+4FIIACH5BAALAAYALAAAAAAQAAsAAAUvICCOZGme5ERRk6iy7qpyHCVStA3gNa/7txxwlwv2isSacYUc+l4tADQGQ1mvpBAAIfkEAAsABwAsAAAAABAACwAABS8gII5kaZ7kRFGTqLLuqnIcJVK0DeA1r/u3HHCXC/aKxJpxhRz6Xi0ANAZDWa+kEAA7AAAAAAAAAAAA" />' + '</div>');
        $('#loading_' + rand).css({
          'position': 'absolute',
          'overflow': 'hidden',
          'top': '50%',
          'left': '50%',
          'margin-left': '-8px',
          'margin-top': '-5px'
        });
        $('#loading' + rand).css({
          'opacity': .95
        });
        var o_left = $(obj).offset().left,
          o_top = $(obj).offset().top;
        $('#cur' + rand).css({
          'opacity': 1,
          'position': 'absolute',
          'padding': '0',
          'left': (o.width * o.startPosition) - o.cursor.size + 'px',
          'top': o.height / 2 + o_top - $(obj).position().top - o.cursor.size,
          'z-index': '3'
        });
        $('#line' + rand).css({
          'border': +o.lineWidth + 'px solid ' + o.lineColor,
          'position': 'absolute',
          'padding': '0',
          'vertical-align': 'middle',
          'left': (o.width * o.startPosition) - o.lineWidth + 'px',
          'z-index': '2'
        }).height(o.height);
        $('#drag' + rand).css('cursor', o.cursorProperty);
        var numImgs = $(obj).find('img').length;
        var i = 0;
        $(obj).find('img').bind('load', function() {
          i++;
          if (i == numImgs) {
            $('#loading' + rand).animate({
              opacity: 0
            }, 200, function() {
              $('#loading' + rand).remove()
            })
          }
        });
        var timer;
        var mcl = false;
        var noClick = true;

        function newPos(pX, pY, dur) {
          dur = dur == undefined ? 0 : dur;
          var scrollTop = document.documentElement.scrollTop || document.body && document.body.scrollTop || 0;
          var scrollLeft = document.documentElement.scrollLeft || document.body && document.body.scrollLeft || 0;
          scrollTop -= document.documentElement.clientTop;
          scrollLeft -= document.documentElement.clientLeft;
          if (mcl || noClick) {
            if (edge) {
              if (o.cursorVisible) {
                $('#cur' + rand).stop().animate({
                  'top': (pY - $(obj).position().top - o.cursor.size) + 'px',
                  'left': (pX - o.cursor.size) + 'px'
                }, {
                  queue: false,
                  duration: dur
                })
              }
              $('#line' + rand).stop().animate({
                'left': (pX - o.lineWidth) + 'px'
              }, {
                queue: false,
                duration: dur
              });
              $('#after' + rand).stop().animate({
                'width': (pX) + 'px'
              }, {
                queue: false,
                duration: dur
              })
            } else {
              if (o.cursorVisible) {
                $('#cur' + rand).stop().css({
                  'top': (pY - $(obj).position().top - o.cursor.size + scrollTop) + 'px',
                  'left': (pX - o.cursor.size + scrollLeft) + 'px'
                })
              }
              $('#line' + rand).stop().css({
                'left': (pX - o.lineWidth + scrollLeft) + 'px'
              });
              $('#after' + rand).stop().css({
                'width': (pX + scrollLeft) + 'px'
              })
            }
          }
          if (m_out && o.cursorVisible) {
            $('#cur' + rand).stop().animate({
              'top': (pY - $(obj).position().top - o.cursor.size) + 'px'
            }, {
              queue: false,
              duration: dur
            });
            m_out = false
          }
        }
        var leave = false;
        var eClientX;
        var eClientY;
        var posXY = 0;
        var cur_p;
        var edge = false;
        var m_out = false;
        $(document).bind('mouseup touchend', function(e) {
          var evt = e || event;
          (evt.preventDefault) ? evt.preventDefault() : evt.returnValue = false;
          eClientX = e.type == 'touchend' ? (event.changedTouches[0].clientX || event.touches[0].clientX) : e.clientX;
          eClientY = e.type == 'touchend' ? (event.changedTouches[0].clientY || event.touches[0].clientY) : e.clientY;
          if (!o.stopClick && !leave && (Math.abs(posXY - (eClientX - o_left)) < 1)) {
            edge = true;
            if (cur_p) {
              newPos(0, eClientY, 200)
            } else {
              newPos(o.width, eClientY, 200)
            }
          }
          edge = false;
          mcl = false;
          timer = setTimeout(function() {
            m_out = true;
            if (e.type == 'touchend') {
              if (cur_p) {
                newPos(0, o.height / 2 + o_top, 1000)
              } else {
                newPos(o.width, o.height / 2 + o_top, 1000)
              }
            }
          }, 1000)
        });
        $(obj).bind('mouseleave', function(e) {
          eClientX = e.type == 'touchend' ? (event.changedTouches[0].clientX || event.touches[0].clientX) : e.clientX;
          eClientY = e.type == 'touchend' ? (event.changedTouches[0].clientY || event.touches[0].clientY) : e.clientY;
          if (eClientX < o_left) {
            newPos(0, eClientY)
          } else if (eClientX > o.width + o_left) {
            newPos(o.width, eClientY)
          }
          timer = setTimeout(function() {
            m_out = true;
            newPos(eClientX - o_left, o.height / 2 + o_top, 1000)
          }, 100);
          mcl = false;
          noClick = mcl;
          leave = true
        }).bind('mousemove touchmove', function(e) {
          var evt = e || event;
          (evt.preventDefault) ? evt.preventDefault() : evt.returnValue = false;
          noClick = o.noClick;
          eClientX = e.type == 'mousemove' ? e.clientX : (event.changedTouches[0].clientX || event.touches[0].clientX);
          eClientY = e.type == 'mousemove' ? e.clientY : (event.changedTouches[0].clientY || event.touches[0].clientY);
          if (timer) {
            m_out = false;
            window.clearTimeout(timer);
            timer = 0
          }
          var scrollTop = document.documentElement.scrollTop || document.body && document.body.scrollTop || 0;
          var scrollLeft = document.documentElement.scrollLeft || document.body && document.body.scrollLeft || 0;
          scrollTop -= document.documentElement.clientTop;
          scrollLeft -= document.documentElement.scrollLeft;
          if ((eClientX - o_left + scrollLeft > 0 && eClientX - o_left + scrollLeft < o.width) && (eClientY - o_top + scrollTop > 0 && eClientY - o_top + scrollTop < o.height)) {
            newPos(eClientX - o_left, eClientY)
          }
        }).bind('mousedown touchstart', function(e) {
          var evt = e || event;
          (evt.preventDefault) ? evt.preventDefault() : evt.returnValue = false;
          var scrollTop = document.documentElement.scrollTop || document.body && document.body.scrollTop || 0;
          var scrollLeft = document.documentElement.scrollLeft || document.body && document.body.scrollLeft || 0;
          scrollTop -= document.documentElement.clientTop;
          scrollLeft -= document.documentElement.scrollLeft;
          eClientX = e.clientX || (event.touches[0].clientX || event.changedTouches[0].clientX);
          if (eClientX - o_left + scrollLeft < $('#line' + rand).position().left + $('#line' + rand).width() / 2) {
            cur_p = true
          } else {
            cur_p = false
          }
          o_left = $(obj).offset().left;
          o_top = $(obj).offset().top;
          mcl = true;
          leave = false;
          if (timer) {
            m_out = false;
            window.clearTimeout(timer);
            timer = 0
          }
          posXY = eClientX - o_left;
          if (o.stopClick) {
            mcl = true;
            edge = true;
            newPos(eClientX - o_left, eClientY, 100)
          }
        })
      })
    }
  })
})(jQuery);

$('#DoubleViewer').doubleviewer();