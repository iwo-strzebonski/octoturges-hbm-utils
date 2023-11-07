import { getRandomInt } from '../random.mjs'

document.getElementById('roll-for-initiative').addEventListener('submit', function submitForm(event) {
  event.preventDefault()

  const diceType = this.querySelector('select[name="dice-type"]').value
  const customDice = this.querySelector('input[name="custom-dice"]').value
  const diceSides = diceType === 'custom' ? customDice : diceType
  const diceAmount = this.querySelector('input[name="dice-amount"]').value
  const initiativeBonus = this.querySelector('input[name="initiative-bonus"]').value

  const results = []

  for (let i = 0; i < diceAmount; i++) {
    results.push(getRandomInt(1, diceSides))
  }

  // TODO: Optional sorting
  results.sort((a, b) => b - a)

  const diceResults = results.map((result, i) => {
    let color

    console.debug(result, diceSides)

    if (result === 1) {
      color = 'red-500'
    } else if (result === Number(diceSides)) {
      color = 'green-500'
    } else {
      color = 'zinc-500'
    }

    const resultContainer = document.createElement('div')
    resultContainer.className = `dice-result-container relative min-w-[2.5rem] min-h-[2.5rem] p-2 border border-2 border-${color} text-${color}`

    const resultText = document.createElement('span')
    resultText.innerText = result + Number(initiativeBonus)

    resultContainer.setAttribute('data-tooltip-target', `tooltip-animation_${i}`)

    resultContainer.addEventListener('mouseover', function resultMouseOver() {
      const tooltip = document.getElementById(`tooltip-animation_${i}`)
      const tooltipArrow = tooltip.querySelector('.tooltip-arrow')

      tooltip.classList.remove('invisible')
      tooltip.classList.add('opacity-100')

      tooltipArrow.classList.remove('invisible')
      tooltipArrow.classList.add('opacity-100')
    })

    resultContainer.addEventListener('mouseout', function resultMouseOut() {
      const tooltip = document.getElementById(`tooltip-animation_${i}`)
      const tooltipArrow = tooltip.querySelector('.tooltip-arrow')

      tooltip.classList.add('invisible')
      tooltip.classList.remove('opacity-100')

      tooltipArrow.classList.add('invisible')
      tooltipArrow.classList.remove('opacity-100')
    })

    const tooltip = document.createElement('div')
    tooltip.id = `tooltip-animation_${i}`
    tooltip.innerText = `${result} + ${initiativeBonus}`
    tooltip.className =
      'absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700 w-max -left-1/3 -top-[45px]'
    tooltip.setAttribute('role', 'tooltip')

    const tooltipArrow = document.createElement('div')
    tooltipArrow.className = 'tooltip-arrow left-1/3 top-[30px]'
    tooltipArrow.setAttribute('data-popper-arrow', true)

    tooltip.appendChild(tooltipArrow)
    resultContainer.appendChild(tooltip)
    resultContainer.appendChild(resultText)

    return resultContainer
  })

  const container = document.createElement('div')
  container.className = 'flex flex-col justify-center items-center flex-wrap w-full h-max gap-8 overflow-hidden pt-12'

  const resultsContainer = document.createElement('div')
  resultsContainer.className = 'inline-flex gap-4 flex-wrap justify-center items-center mb-4'
  resultsContainer.append(...diceResults)

  const sum = document.createElement('span')
  sum.innerText = `Suma: ${results.reduce((a, b) => a + b, 0)}`
  sum.className = 'font-bold'

  container.appendChild(resultsContainer)
  container.appendChild(sum)

  Swal.fire({
    title: 'Twoje wyniki',
    icon: 'info',
    html: container,
    showConfirmButton: true,
    confirmButtonText: 'OK'
  })
})
