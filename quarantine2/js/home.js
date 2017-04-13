+function ($) {
        'use strict';
        // hover_window CLASS DEFINITION
        // ==========================

        function hover_window(element, options) {
          this.$body          = $(document.body)
          this.$element = $(element)
          this.options  = $.extend({}, hover_window.DEFAULTS, options)
          this._window = "";
          this.create();  
          this.$element.on('mouseenter.bs.hover_window', $.proxy(this.show, this))
          this.$element.on('mouseleave.bs.hover_window', $.proxy(this.hide, this))
          
        }

        hover_window.VERSION  = '1.0'

        hover_window.DEFAULTS = {
          type:1,            /*2为tips*/
          offset: 10,
          position:"bottom",
          bg:"#fff",
          width:"125px",
          height:"125px"
        }
        
        hover_window.prototype.template = function(){
          this._window = $('<div style="position:absolute;box-sizing:border-box;display:none;">'/**/
                                  +'<div class="inner" style="position:relative;height:100%;width:100%;"></div>'
                            +'</div>'); 
        }

        hover_window.prototype.create = function(){
          var that = this;
          var content = this.reset($(this.options.content)) ;
              this.template();

          var parent = this.$element.parent();
          
          var arr = ["top","right","bottom","left"];

              this._window.find(".inner").html(content);
              this.$element.css({position:"relative"});
              this._window.appendTo(parent).css({
                  width:that.options.width,
                  height:that.options.height,
                  padding:"5px",
                  background:that.options.bg,
                  "box-shadow":"0 0 10px gray",
                  border: "1px solid #ddd",
                  "box-sizing":"border-box",
                  "z-index":"99"
              });

          this.getPosition(this.$element);
              
        }

        hover_window.prototype.getPosition = function (ele) {
          var _self = this;
          var fixleft,fixtop,posFixObj;
          
            ele.find("img").load(function(){
                ele.addClass("loaded");
                call_f();
            })
            
            ele.hasClass("loaded")?"":call_f();
            function call_f(){
                var pos = ele.position(),ma,posFix;
                    ma = _self.$element.css("margin").split(" ").map(function(cv,index){
                            return parseInt(cv);
                    });
                    if( ma.length > 1 ){
                          pos.top += ma[0];
                          pos.left += ma[3];
                    }

                  if(_self.options.position == "bottom"){
                      pos.top += _self.options.offset;

                      fixleft = -(_self._window.outerWidth()/2 - ele.outerWidth()/2);
                      fixtop = ele.outerHeight();
                  }
                  if(_self.options.position == "left"){
                      pos.left -= _self.options.offset;
                      fixleft = -(_self._window.outerWidth());
                      fixtop = -(_self._window.outerHeight()/2 - ele.outerHeight()/2);  
                  }
                  if(_self.options.position == "right"){
                      var caret = _self.caret("right")  ;

                      pos.left += _self.options.offset;
                      fixleft = 0;
                      fixtop = -(_self._window.outerHeight()/2 - ele.outerHeight()/2);
                      _self._window.find(".inner").append(caret);  
                  }
                 
                  _self._window.css({
                      left: pos.left + fixleft,
                      top:pos.top + fixtop
                  })
            }

          
        }
        hover_window.prototype.reset = function(content){
          var css_config = {}
          if(this.options.type == 1){
             $.extend(css_config,{
                  "margin":"0px",
                  width:"100%",
                  height:"100%"
             })
          }
          if(this.options.type == 0){
             $.extend(css_config,{
                  width:"200px",
                  'white-space': 'normal',
                  'word-wrap': 'break-word',
                  'line-height': '20px'
             })  
          }
          $.extend(css_config,{
                  display:"block"
          })
          content.css(css_config)
          return content;
        }

        hover_window.prototype.show = function () {
          
          this._window.show().addClass("on");
        }

        hover_window.prototype.hide = function () {
          this._window.hide().removeClass("on");
        }
        hover_window.prototype.caret = function(pos){
          var caret = $('<div class="caret-'+pos+'" style="position:absolute"></div>');
          var css_fig = {};
          if(this.options.position == "right"){
            $.extend(css_fig,{
                  left:"-13px",
                  top:"50%",
                  transform:"translateY(-50%)"
            });
            caret.css(css_fig);
          }
          return caret;
        }

        // hover_window PLUGIN DEFINITION
        // ===========================

        function Plugin(option) {
          return this.each(function () {
            var $this   = $(this)
            var data    = $this.data('bs.hover_window')
            var options = typeof option == 'object' && option

            if (!data) $this.data('bs.hover_window', (data = new hover_window(this, options)))
            if (typeof option == 'string') data[option]()
          })
        }

        var old = $.fn.hover_window

        $.fn.hover_window             = Plugin
        $.fn.hover_window.Constructor = hover_window


        // hover_window NO CONFLICT
        // =====================

        $.fn.hover_window.noConflict = function (){
          $.fn.hover_window = old
          return this
        }

        // hover_window DATA-API
        // ==================

        $(window).on('load.bs.hover_window.data-api', function () {
          $('[data-hover="_window"]').each(function () {
            var $w = $(this)
            Plugin.call($w, $w.data())   /*获取data-xx属性,作为option*/
          })
        })

}(jQuery);


jQuery.validator.addMethod("isTel", function(value,element) {   
                      
    var length = value.length;   
    var mobile = /^1(3[0-9]|4[57]|5[0-35-9]|8[0-9]|70)\d{8}$/;   
     
    return this.optional(element) || (length==11 && mobile.test(value));   
}, "请正确填写您的联系方式");

function uploadBtn(btns){
    btns.each(function(i,e){
        var input = $(e).parents(".form-row").find(".baseInput").attr("readonly","readonly"),name;
            name = input.attr("data-name") || false;
            isrequired = input.attr("data-required") || false;
        $(e).wrap("<label></label>");
        var fileBtn = $("<input type='file' class='hide' name="+name+" required="+isrequired+">"),objUrl;
            if(name){
                fileBtn.insertAfter($(e)).change(function(){
                  objUrl = getObjectURL(this.files[0]);
                  if(input.is("input")){
                      input.val(this.files[0].name)
                  }else{
                      input.html(this.files[0].name)  
                  }
                  input.next(".tips_p").remove();
                });
            }
    });
}

function submitCheck($form){

}

function print(url){
  if($("#printIframe").length>0){$("#printIframe").remove()};
  var iframe = $('<iframe style="display:none" id="printIframe" src='+url+'></iframe>');
  $("body").append(iframe);
  
  doPrint();
  function doPrint(){
      $("#printIframe")[0].contentWindow.print();
  }
}

function isGoBack(){
  /*html*/
  /*<input type="hidden" id="refreshed" value="no">*/
  
  
      var e = document.getElementById("refreshed");  
      if(e){
          if(e.value=="no"){
            e.value="yes";
            return false;  
          }
          else{
            e.value="no";
            return true;  /*location.reload();*/
          }  
      }
   
}

function getObjectURL(file){
      var url = null ; 
      if (window.createObjectURL!=undefined){ // basic
          url = window.createObjectURL(file) ;
      } else if (window.URL!=undefined) { // mozilla(firefox)
          url = window.URL.createObjectURL(file) ;
      } else if (window.webkitURL!=undefined) { // webkit or chrome
          url = window.webkitURL.createObjectURL(file) ;
      }
      
      return url ;
}




