<?php include './common/head.html' ?>

<!--9.5.4 企业会员-发布新闻 -->

<!-- 多级联动js -->        
        <script type="text/javascript" src="js/jquery.cxselect.js"></script>
<!-- validate start -->
        <script type="text/javascript" src="js/jquery.validate.js"></script>
<!-- webupload start -->
        <link rel="stylesheet" type="text/css" href="css/webuploader.css">
        <script type="text/javascript" src="js/webuploader.min.js"></script>
<!-- ueditor.js start-->       
        <script type="text/javascript" charset="utf-8" src="editor/ueditor.config.js"></script>
        <script type="text/javascript" charset="utf-8" src="editor/ueditor.all.min.js"> </script>
        <script type="text/javascript" charset="utf-8" src="editor/lang/zh-cn/zh-cn.js"></script>
        <script type="text/javascript" src="js/editor.js"></script>    
<!-- ueditor.js  end-->
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->    	
    	
<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
        <div class="p_banner middleTable" style="background:url(img/member_banner.png) center center">
            <div class="middleRow">
                <div class="banner_inner">
                        <div class="avatarWrapper white">
                            <div class="avatar01 mar-center">
                                <img class="full circle" src="img/icon27.png">
                                <div class="member abs">
                                    <img src="img/icon26.png">
                                </div>
                            </div>
                            <p class="name align-center bigSize font-weight">华为科技有限公司</p>
                            <p class="intro mar-center align-left">企业会员，痛客平台在与痛客进行充分沟通后， 根据痛客平台专业操作，对痛点进行分解和定义的文档。</p>
                        </div>
                </div>    
            </div>
        </div>
        <div class="member_url align-center">
            <div class="row mediumSize">
                <div class="row-block">
                    <div class="inner"><a class="t">完善资料</a></div>
                </div>
                <div class="row-block ">
                    <div class="inner"><a class="t">修改密码</a></div>
                </div>
                <div class="row-block on">
                    <div class="inner"><a class="t">发布企业产品</a></div>
                </div>
                <div class="row-block ">
                    <div class="inner"><a class="t">发布痛点</a></div>
                </div>
                <div class="row-block ">
                    <div class="inner"><a class="t">发布创业项目</a></div>
                </div>
                <div class="row-block ">
                    <div class="inner"><a class="t">用户认证</a></div>
                </div>
            </div>
        </div>
        <div class="middle_part ">
            <div class="contentWrapper">
               <div class="bg-cyan">
                   <div class="container1200">
                     <div class="container_margin">
                     <div class="solution_tab float-l">
                         <div class="row">
                                <ul>
                                    <li class="row-block">
                                        <a class="inner " href="">发布的产品(<span class="num">0</span>)</a>
                                    </li>
                                    <li class="row-block ">
                                        <a class="inner on new" href="">发布的新闻(<span class="num">1</span>)</a>
                                    </li>
                                   
                                </ul>    
                         </div>
                         
                     </div>
                     <div class="clear"></div>   
                     <div class="s_container bg-white">
                         

                         <form class="solution_form clear">
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span>新闻名称：</span>
                                 </div>
                                 <div class="un-block-2">
                                 <input class="baseInput" placeholder="请输入新闻名称" name="cname" type="text" required></input>
                                
                                 </div>
                                 
                             </div>
                            
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span>新闻缩略图：</span>
                                 </div>
                                 <div class="un-block-2 attached">
                                    <div class="img_attached "><img class="full" src="img/icon36.png"></div>
                                    <button class="picker" >点击上传</button>


                                 </div>
                                 <div class="un-block-3 smallSize gray">
                                     <p >
                                     1、支持格式为jpg，jpeg，png；大小不要超过5M  </p>
                                     <p>2、建议尺寸：188*132像素</p>
                                     
                                 </div>

                             </div>
                             
                             <div class="form-row ">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span>序号：</span>
                                 </div>
                                 <div class="un-block-2">
                                    <input class="baseInput" placeholder="请输入序号" name="license" type="text"  required></input>
                                 
                                    
                                 </div>
                             </div>
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span>简介：</span>
                                 </div>
                                 <div class="un-block-2">
                                 <textarea class="baseInput mediumSize" placeholder="请输入简介" name="ainfo" type="text" ></textarea>
                                 </div>
                                 
                             </div>
                             
                             
                             <div class="form-row height-auto">
                                 <div class="un-block-1 align-right mediumSize">
                                     <span>内容：</span>
                                 </div>
                                 <div class="un-block-3 relative editorZone">
                                    <script id="editor" class="abs" type="text/plain" style=""></script>
                                   
                                    
                                 </div>
                             </div>
                             <div class="form-row submit-row">
                                 <div class="un-block-1"></div>
                                 <div class="un-block-2 ">
                                    <input class="baseInput bg-orange white font-weight cursor" type="submit" value="发&nbsp;&nbsp;布"></input>
                                 </div>
                                 <div class="un-block-3 "></div>
                             </div>
                             <script type="text/javascript">
                                    
                                    var maxSingleSize = 5,
                                       /* maxNum = 2,*/
                                        uploadedNum = 0,
                                        minUploadNum = $(".picker").length;

                                    var uploader = WebUploader.create({
                                        /*auto: true,*/
                                        swf: 'common/Uploader.swf',
                                        server: 'php/fileupload.php',
                                        pick: '.picker',
                                        resize: false,
                                        accept: {
                                            extensions: 'jpg,jpeg,png,gif'
                                        },
                                       /* fileNumLimit:maxNum,*/
                                        fileVal:'test',
                                        fileSingleSizeLimit:maxSingleSize*1024*1024,
                                        duplicate:true
                                    });
                                    
                                    
                                    uploader.on('fileQueued', function( file ) {
                                        
                                        uploader.makeThumb( file, function( error, ret ){
                                            
                                            var ruid = file.source.ruid,
                                                upId = '#rt_'+ruid;
                                            var picker = $(upId).parents(".picker");
                                            var lastFileId = picker.data("fileId");
                                                if(lastFileId){
                                                    uploader.removeFile(lastFileId,true);
                                                }

                                                picker.data("fileId",file.id);
                                            var thumb,p_thumb,thumbImg ;
                                                if(picker.hasClass("p_thumb")){
                                                    p_thumb = picker;
                                                    thumbImg = p_thumb.find(".thumbImg");

                                                    p_thumb.length>0 && thumbImg.length == 0 
                                                    ? $('<img class="thumbImg absCenter full" src='+ret+'>').appendTo(p_thumb).on("click",function(){picker.find("label").click()})
                                                    :thumbImg.attr(src,ret);

                                                }else{
                                                    thumb = picker.prevAll(".img_attached").find("img");
                                                
                                                    thumb.length>0 && thumb.attr({
                                                        src: ret
                                                    });
                                                }
                                                
                                                
                                        });
                                        uploadedNum += 1;
                                      
                                    });
                                    
                                    uploader.on("error",function (type){
                                        if (type=="Q_TYPE_DENIED"){
                                            showMessage("请上传jpg，jpeg，gif，png格式文件");
                                        }else if(type=="F_EXCEED_SIZE"){
                                            showMessage("文件大小不能超过"+maxSingleSize+"M");
                                        }else if(type=="Q_EXCEED_NUM_LIMIT"){
                                            showMessage("文件总数不能超过"+maxNum+"个");
                                        }

                                    });

                                    
                                    
                                    $(function(){
                                        var inputs = $(".solution_form input[type=text]");
                                        var flag = false,
                                            complete = false;
                                        inputs.on("input propertychange",function(){
                                                
                                        });

                                         $(".solution_form").validate({
                                             rules:{
                                                county:{
                                                    required: function(){
                                                        return $(".county option").length > 0;
                                                }}
                                             },
                                             success:function(label,element){
                                                $(element).data("validate",true);
                                         }
                                         });
                                         $(".solution_form").submit(function(event) {

                                                if(!complete)event.preventDefault();
                                                if(uploadedNum < minUploadNum){
                                                    
                                                    showMessage("请上传文件！")
                                                    
                                                    return false;
                                                }else{
                                                   
                                                    if(!flag && (function(){
                                                        inputs.each(function(i,e){

                                                            if(!$(e).data("validate")){return false}
                                                        });
                                                        
                                                        return flag = true;
                                                    })()){uploader.upload();}
                                                    
                                                }
                                         });

                                         uploader.on("uploadSuccess",function(file,response ){
                                            complete = true;
                                            
                                            $(".solution_form").submit();
                                         })
                                    });
                             </script>
                         </form>
                        
                     </div> 
                     </div> 
                   </div>
               </div>
            </div>
        </div>

<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

<?php include './common/foot.html' ?>