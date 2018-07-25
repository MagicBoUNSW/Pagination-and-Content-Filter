$(document).ready(function() {
	var numStudents = 10;
	var $s = $(".student-item");

	function addLink(Page,$studentFound){
		var Links = ""
		var numPages = Math.ceil($studentFound.length / numStudents);
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
        $(".pagination").on("click", "a", function(event) {
            event.preventDefault();
            display($(event.target).data("page"), $studentFound);
            window.scrollTo(0, 0);
        });
	}

	function display(numPage, $studentFound) {
		$s.hide();
		var offset = (numPage -1) *numStudents;
		$studentFound = $studentFound || $s;
        $studentFound.slice(offset, offset + numStudents).show();

        addLink(numPage, $studentFound);
	}

	var $searchField = $(".search-field");
    $searchField.html(
        '<input placeholder="Search Student" /> <button>Search</button>'
    );
    $searchField.on("click", "button", function() {
        searchList();
    });
    $searchField.on("keyup", "input", function() {
        searchList();
    });

	function searchList() {
        var search = $("input", $searchField).val().toLowerCase();
        var $studentFound = $s.filter(function() {
            return $(".email", this).text().indexOf(search) >= 0;
        });
        if ($studentFound.length === 0) {
            $(".no-students").text("No students match that query. Try again.");
        } else {
            $(".no-students").text("");
        }
        display(1, $studentFound);
    }

    display(1);

    $(".page-header").sticky({
        topSpacing: 0,
        getWidthFrom: ".sticky-wrapper",
        responsiveWidth: true
    });
});