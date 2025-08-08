$('.searchterm').on("click",function(){
        //$('.search_overlay').show();
        //$('#query').val($(this).html());
        var term = $(this).html();
        if (term.indexOf('&amp;') > -1)
        {
        term = term.split('&amp;').join('');
        }
        $('#txtSearch').val(term);
       
        var searchtimeout = setTimeout('gosearch(\''+term+'\')',100);
    })
    
    $('#txtSearch').on("keyup",function(e){if(e.keyCode == 13){gosearch($('#txtSearch').val())}});
    $('.bluesearchicon').on("click",function(){gosearch($('#txtSearch').val())});
    
    function gosearch(thisterm)
    {
    document.location.href='https://www.woodplc.com/search?collection=wood~sp-combined-meta&query='+thisterm+'&start_rank=1&sort=relevance';
    }
    
    $('#VideoThumb').on("click",function(){
        if (window.innerWidth < 600)
        {
        $('#VideoThumb').css('padding-top','1rem');
        }
        $('#VideoThumb').html('<div style="padding:56.25% 0 0 0;position:relative;z-index:20;background-color:#000;"><iframe src="https://player.vimeo.com/video/807473479?h=2a848fdd15&amp;badge=0&amp;autoplay=1&amp;loop=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Design the future"></iframe></div>');
        $('#VideoThumb').off();
    })