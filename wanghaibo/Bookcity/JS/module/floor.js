define(function(){
    // 楼层的效果
    class Floor{
        constructor(options){
            // btn这个属性保存的值，是在下拉菜单中获取，返回并传进来的
            this.btn = options.btns;
            this.f = options.floor;
            this.data = "这是楼层的数据";

            this.addEvent()
        }
        addEvent(){
            var that = this;
            this.btn.on("click","li",function(){
                var index = $(this).index();
                var t = that.f.eq(index);
                // console.log(t.offset().top);
                
                // $(document).scrollTop(t.offset().top);

                $("html").stop().animate({
                    scrollTop:t.offset().top
                })
            })
        }
    }

    return Floor;
})