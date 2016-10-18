$(function() {

	var $newItem = $("#newItem");
	var $newItemForm = $("#newItemForm");

	$newItem.show();
	$newItemForm.hide();

	$("#newItemButton").on("click", function() {
		$newItem.hide();
		$newItemForm.show();
	});

	var $list = $("<ul>");
	$("#newList").append($list);
	$("#btn").on("click", function(e) {
		e.preventDefault();
		var $element = $("<li>").addClass("listItem");
		var $textArea = $("#textArea");
		var $user = $textArea.val();
		$element.append($user);
		$textArea.val("");
		$element.first().hide().fadeIn();
		$list.append($element);
		var $del = $("<a href='#' <span class='del buttonStyle icon-trash'</span></a>");
		$element.append($del);
		$element.on("mouseover", function() {
			$del.show();
		});
		$element.on("mouseout", function() {
			$del.hide();
		});
		$element.on("click", function() {
			$(this).toggleClass("complete");
		});
	
		$del.on("click", function() {
			$(this).parent().fadeOut(function() {
				$(this).remove();
				updateCount();
			});
		});

		function updateCount() {
			var items = $("li").length;
			$("small").text("elements: " + items);
			}
		updateCount();
	});

});