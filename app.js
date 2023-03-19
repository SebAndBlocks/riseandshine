nm = localStorage.getItem("name")
if (nm = "null") {
  location.href = "startup.html"
} else {
  const date = new Date();
  if (date.getHours > 12 && date.getHours < 6) {
    document.getElementById("greet").innerHTML = "Afternoon " + nm + ","
  } else if (date.getHours < 6) {
    document.getElementById("greet").innerHTML = "Evening " + nm + ","
  } else {
    document.getElementById("greet").innerHTML = "Morning " + nm + ","
  }
  document.getElementById("usricn").src = localStorage.getItem("img");
  fetch('salutations.json')
  .then(response => response.json())
  .then(data => {
    // Choose a random string from the list
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomSalutation = data[randomIndex];

    // Log the random salutation to the console
    console.log(randomSalutation);
    document.getElementById("minibar").innerHTML = randomSalutation;
  })
  .catch(error => console.error(error));
  const searchInput = document.getElementById('search-input');
  const itemList = document.querySelectorAll('.list-group-item');
  $('#lg').hide();

  searchInput.addEventListener('input', () => {
    $('#lg').show()
    const searchQuery = searchInput.value.toLowerCase();

    itemList.forEach(item => {
      const itemName = item.textContent.toLowerCase();

      if (itemName.includes(searchQuery)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
  $(document).click(function(event) { 
    var $target = $(event.target);
    if(!$target.closest('.input-group').length && !$target.closest('#search-input').length && !$target.closest('#lg').length && $('#lg').is(":visible")) {
      $('#lg').hide();
    }        
  });
}