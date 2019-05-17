$(function(){
        var documentEl = $(document),
            fadeElem = $('.fadeout');
        documentEl.on('scroll',function(){
            var currscrollPos = documentEl.scrollTop();
            fadeElem.each(function(){
                var $this = $(this),
                    elemOffsetTop = $this.offset().top;
                if (currscrollPos > elemOffsetTop) $this.css('opacity',1 -(currscrollPos-elemOffsetTop)/400);
            });
        });
    });