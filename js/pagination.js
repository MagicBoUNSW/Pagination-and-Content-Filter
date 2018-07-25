$(document).ready(function() {
	var numStudents = 10;
	var $s = $(".student-item");

	function addLink(Page,$Totalstudents){
		var Links = ""
		var numPages = Math.ceil($Totalstudents.length / numStudents);
		if (numPages === 1) {
            $(".pagination").html("");
            return;
        }
		for (var j = 1; j <= numPages; j++) {
			Links += '<li>';
			Links += '<a ';
			Links += 'class="';
			Links += (Page === j ? "active" : "");
			Links += '" data-page="';
			Links += j;
			Links += '">';
			Links += j;
			Links += "</a>";
        }
        $(".pagination").html("<ul>" + Links + "</ul>");
        $(".pagination").on("click", "a", function(e) {
            display($(e.target).data("page"), $studentFound);
        });
	}

	function display(numPage) {
		$s.hide();
		var offset = (numPage -1) * numStudents;
        $s.slice(offset, offset + numStudents).show();

        addLink(numPage, $s);
	}

    display(1);

});