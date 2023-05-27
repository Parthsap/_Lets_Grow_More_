document.getElementById('dlist-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var itemInput = document.getElementById('item-input');
    var newItem = itemInput.value;
  
    if (newItem) {
      addItemToList(newItem);
      itemInput.value = '';
    }
  });
  
  function addItemToList(item) {
    var listItem = document.createElement('li');
    listItem.textContent = item;
    
    var list = document.getElementById('dlist-items');
    list.appendChild(listItem);
  }