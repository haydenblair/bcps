var isClosed = false;
$.ajax({
    url: 'http://nbc25news.com/resources/ftptransfer/weyi/closings/closings.htm',
    success: function(data) {
        $(data).find(".orgname").each(function() {
            var schoolName = this.innerText;
            console.log(schoolName);
            if (schoolName.indexOf("Bay City Public Schools") != -1) {
                isClosed = true;
              $('.isit').text("YES");
                  $('.sub').text("School is Canceled.")
            }
        });
        if (isClosed != true) {
            $('.isit').text("NOPE");
           
 $('.sub').text("You have to go to school.")
        }
    }
});