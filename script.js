// Имеется страница с данными о температуре. Написать скрипт (можно в виде букмарклета или в виде скрипта 
// в составе предложенной страницы), выводящий информацию о самом жарком дне (его дату и соответствующую температуру).

window.onload = () => {
    let sorting = true;
    let shouldSwitch = false;
  
    const rows = document.querySelector('table').rows
    let i = 0;
    while(sorting) {
      sorting = false;
      for (i = 1; i < (rows.length - 1); i++) {
        const temp = +rows[i].getElementsByTagName("TD")[3].innerHTML;
        const nextTemp = +rows[i + 1].getElementsByTagName("TD")[3].innerHTML;
        if (temp < nextTemp) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        sorting = true;
      }
    }
   
  }