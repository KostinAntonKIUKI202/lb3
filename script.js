// Имеется страница с данными о температуре. Написать скрипт (можно в виде букмарклета или в виде скрипта 
// в составе предложенной страницы), выводящий информацию о самом жарком дне (его дату и соответствующую температуру).

// window.onload = () => {
//     let sorting = true;
//     let shouldSwitch = false;
  
//     const rows = document.querySelector('table').rows
//     let i = 0;
//     while(sorting) {
//       sorting = false;
//       for (i = 1; i < (rows.length - 1); i++) {
//         const temp = +rows[i].getElementsByTagName("TD")[3].innerHTML;
//         const nextTemp = +rows[i + 1].getElementsByTagName("TD")[3].innerHTML;
//         if (temp < nextTemp) {
//           shouldSwitch = true;
//           break;
//         }
//       }
//       if (shouldSwitch) {
//         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//         sorting = true;
//       }
//     }
//   }
let MaxTemp = 0;
  let tablePartOfMax;
  console.log(111, tablePartOfMax)
  let rows = document.querySelector('table').rows;
  console.log(222, rows)
  for (let i = 1; i < rows.length - 1; i++){
    
      let temp = rows[i].getElementsByTagName("td")[3].innerHTML;
      if (+temp > MaxTemp) {
        MaxTemp = temp;
        tablePartOfMax = i;
      }
    
      
    }

  let test = rows[tablePartOfMax];
  console.log(333, test.cells.length)
  let kek
  for(let i = 1; i < test.cells.length - 1; i++) {
    console.log(test.cells[i].innerHTML)
    kek = test.cells[i].innerHTML
  }

  console.log(123, kek)

  console.log(444, test.children[0].innerHTML)
  document.getElementById("testik").innerHTML = test.innerHTML;  // document.getElementById("IdDeath").value = rows[tablePartOfMax];