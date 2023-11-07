document.querySelector('select[name="dice-type"]').addEventListener('change', function onDiceSidesChange() {
  const customDiceContainer = document.querySelector('div[id="custom-dice-container"]')
  const customDiceInput = customDiceContainer.querySelector('input[name="custom-dice"]')

  if (this.value === 'custom') {
    customDiceContainer.classList.remove('hidden')
    customDiceInput.setAttribute('required', 'true')
    customDiceInput.removeAttribute('hidden')
    customDiceInput.removeAttribute('disabled')
  } else {
    customDiceContainer.classList.add('hidden')
    customDiceInput.removeAttribute('required')
    customDiceInput.setAttribute('hidden', 'true')
    customDiceInput.setAttribute('disabled', 'true')
  }
})
