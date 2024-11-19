// src/index.js
import './style.css'

import { calculateSquare, getExampleVariable } from './pythonDataToJS'

calculateSquare(354)
console.log(
  `We can change exampleVariable in the function and return it here:`,
  getExampleVariable()
)

const dropdown1 = document.querySelector('#dropdown1')

const revealDropdown = function (dropdown) {
  dropdown.addEventListener('mouseover', function () {
    dropdown.children[1].style.display = ''
  })

  dropdown.addEventListener('mouseout', function () {
    dropdown.children[1].style.display = 'none'
  })
}

revealDropdown(dropdown1)

revealDropdown(document.querySelector('#dropdown2'))
