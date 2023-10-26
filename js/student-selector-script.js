// This function toggles the visibility of the dropdown menu.
function myFunction() {
  // Get the dropdown element.
  const dropdown = document.getElementById("myDropdown");

  // Toggle the "show" class.
  dropdown.classList.toggle("show");
}

// This function filters the dropdown menu items based on the input value.
function filterFunction() {
  // Get the input and filter values.
  const input = document.getElementById("myInput");
  const filter = input.value.toUpperCase();

  // Get the dropdown element and its items.
  const dropdown = document.getElementById("myDropdown");
  const items = dropdown.getElementsByTagName("a");

  // Loop through the items and filter them.
  for (let i = 0; i < items.length; i++) {
    // Get the item text.
    const itemText = items[i].textContent || items[i].innerText;

    // If the item text contains the filter value, show it. Otherwise, hide it.
    if (itemText.toUpperCase().indexOf(filter) > -1) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
}