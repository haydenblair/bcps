var isClosed = false;
$.ajax({
    url: 'http://cnycentral.com/resources/ftptransfer/wstm/closings/closings.htm',
    success: function(data) {
        $(data).find(".orgname").each(function() {
            var schoolName = this.innerText;
            console.log(schoolName);
            if (schoolName.indexOf("Marcellus") != -1) {
                isClosed = true;
                $('.isit').text("Marcellus is Closed!");
            }
        });
        if (isClosed != true) {
            $('.isit').text("Marcellus isn't closed... but don't give up hope!");
        }
    }
});