const list_items = document.querySelectorAll('.card__item');
const lists = document.querySelectorAll('.game__card');

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
	const item = list_items[i];

	item.addEventListener('dragstart', function () {
		draggedItem = item;
		setTimeout(function () {
			item.style.display = 'none';
		}, 0)
	});

	item.addEventListener('dragend', function () {
		setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem = null;
		}, 0);
	})

	for (let j = 0; j < lists.length; j++) {
		const list = lists[j];

		list.addEventListener('dragover', function (e) {
			e.preventDefault();
		});

		list.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
		});

		list.addEventListener('dragleave', function (e) {
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});

		list.addEventListener('drop', function (e) {
			this.append(draggedItem);
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});

	}
}


/* Try Game 
	-------------------------------------*/

$("#try").on("click", function (event) {
	event.preventDefault();
	let i = 0;

	if ($("#first .card__item").hasClass("first")) {
		$("#first").addClass("active");
		$("#f").addClass("active");
		i++;
	} else {
		$("#first").removeClass("active");
		$("#f").removeClass("active");
	}

	if ($("#second .card__item").hasClass("second")) {
		$("#second").addClass("active");
		$("#s").addClass("active");
		i++;
	} else {
		$("#second").removeClass("active");
		$("#s").removeClass("active");
	}

	if ($("#third .card__item").hasClass("third")) {
		$("#third").addClass("active");
		$("#t").addClass("active");
		i++;
	} else {
		$("#third").removeClass("active");
		$("#t").removeClass("active");
	}

	if (i == 3) {
		this.style.backgroundColor = 'rgb(151, 255, 151)';
	} else {
		this.style.backgroundColor = 'transparent';
	}

});

