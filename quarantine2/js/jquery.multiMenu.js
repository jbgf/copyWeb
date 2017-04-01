+function ($) {
        'use strict';

        function multiMenu(element, options) {
          this.$body          = $(document.body)
          this.$element = $(element)
          this.options  = $.extend({}, multiMenu.DEFAULTS, options)
          this.allData = this.options.allData;
          this.stack = [];
          this.curObj = this.allData;
          this.curArr = this.curObj.sub;
          this.mainClass = this.options.class;
          this.activeClass = this.options.activeClass;
          this.ini(this.allData);

          /*this._window = "";
          this.create();  
          this.$element.on('mouseenter.bs.multiMenu', $.proxy(this.show, this))
          this.$element.on('mouseleave.bs.multiMenu', $.proxy(this.hide, this))*/
          
        }

        multiMenu.VERSION  = '1.0'

        multiMenu.DEFAULTS = {
          class:"multi-li",
          activeClass:"active"
         /* type:1,            
          offset: 10,
          position:"bottom",
          bg:"#fff",
          width:"125px",
          height:"125px"*/
        }
        

        multiMenu.prototype.ini = function () {
          var that = this;
              that.createlevel();
              that.operate_stack(0,"root");
              that.choose();
        }  

        multiMenu.prototype.choose = function () {
          var that = this;
          var index_li,index_ul;  
          var num;
              $(document).on("click",'.'+that.mainClass+'',function(){
                  if($(this).hasClass(that.activeClass)){return}
                  var uls = that.$element.find("ul");
                  var ul = $(this).parent("ul"),sameLevel;
                      index_ul = uls.index(ul);
                      index_li = ul.children("li").index($(this));
                      
                      num = that.getPopNum(ul,index_ul),
                      sameLevel = num == 0;
                      
                      that.operate_stack(num,index_li);
                      if(!sameLevel){ul.nextAll("ul").remove()} 
                      if(!that.isFinalLevel(index_li)){
                          that.createlevel();  
                      }
                      
                      $(this).addClass(that.activeClass)
                             .siblings('.'+that.mainClass+'').removeClass(that.activeClass);   
              
              })
        }

        multiMenu.prototype.isFinalLevel = function (index) {
            var that = this;
            var status ;
            
            /*console.log(that.curObj)*/
            if("sub" in that.curObj){
                status = false;
            }else{
                status = true;
            }
            return status;
        }

        multiMenu.prototype.operate_stack = function(popNum,index){
          var that = this;
          
           if(index != "root"){
              /*if(!that.isFinalLevel()){*/

                  popNum > 0 && that.stack.splice(-popNum,popNum);
                  that.curObj = that.stack[that.stack.length - 1][index];
                  that.curArr = that.curObj.sub;
                  that.stack.push(that.curArr);

              /*}*/
              
              
           }else{

              that.stack.splice(0,that.stack.length);
              that.stack.push(that.curArr);
              
           }
        }        

        multiMenu.prototype.getPopNum = function(ul,index_ul){
          var that = this;
          var data  = ul.data('bs.multiMenu'),num;
              if (!data) {
                $(ul).data('bs.multiMenu', (data = index_ul));
              }
              num = ( that.stack.length - 1 ) - index_ul;
              return num;

        }

        multiMenu.prototype.createlevel = function(){
          var that = this;
          var string = "<ul class='multi-ul'>";
          
              var arr = that.curArr;
            
              $.each(arr,function(i,e){
                  string +='<li class='+that.mainClass+'>'+e.name+'</li>'
              })
                  string +="</ul>";
                  that.$element.append(string);
          
              /*that.multiChoose();*/
          
          that.multiTag();
        }
        
        multiMenu.prototype.multiChoose = function (ele) {}
        multiMenu.prototype.multiTag = function (ele) {}

        multiMenu.prototype.reset = function (ele) {
          var that = this;
          
        }

        // multiMenu PLUGIN DEFINITION
        // ===========================

        function Plugin(option) {
          return this.each(function () {
            var $this   = $(this)
            var data    = $this.data('bs.multiMenu')
            var options = typeof option == 'object' && option

            if (!data) $this.data('bs.multiMenu', (data = new multiMenu(this, options)))
            if (typeof option == 'string') data[option]()
          })
        }

        var old = $.fn.multiMenu

        $.fn.multiMenu             = Plugin
        $.fn.multiMenu.Constructor = multiMenu


        // multiMenu NO CONFLICT
        // =====================

        $.fn.multiMenu.noConflict = function (){
          $.fn.multiMenu = old
          return this
        }

        // multiMenu DATA-API
        // ==================

        $(window).on('load.bs.multiMenu.data-api', function () {
          $('[data-hover="_window"]').each(function () {
            var $w = $(this)
            Plugin.call($w, $w.data())   /*获取data-xx属性,作为option*/
          })
        })

}(jQuery);