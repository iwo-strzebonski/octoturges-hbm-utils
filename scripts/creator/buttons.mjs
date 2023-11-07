import { GLOBALS } from '../constants.mjs'
import { importCharacter } from '../helpers.mjs'

document.getElementById('character-creator').addEventListener('submit', function (e) {
  try {
    e.preventDefault()

    const formData = new FormData(this)

    const data = {
      id: CHARACTER_ID,
      ...Object.fromEntries(formData)
    }

    const blob = new Blob([JSON.stringify(data)], {
      type: 'application/json'
    })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url

    Swal.fire({
      title: 'Podaj nazwę pliku',
      input: 'text',
      inputLabel: 'Nazwa pliku (bez rozszerzenia)',
      inputPlaceholder: 'Wpisz nazwę pliku...',
      inputValue: data.name.toLowerCase().replace(/ /g, '-'),
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'Musisz podać nazwę pliku!'
        }
      }
    }).then((result) => {
      try {
        if (!result.isConfirmed) {
          return
        }

        console.debug(result.value)

        link.download = `${result.value}.json`
        link.click()
        link.remove()

        Swal.fire({
          title: 'Sukces',
          icon: 'success',
          text: 'Postać została wyeksportowana pomyślnie.',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (error) {
        Swal.fire({
          title: 'Błąd',
          icon: 'error',
          text: `W trakcie importu postaci wystąpił błąd (${error.message}).`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  } catch (error) {
    Swal.fire({
      title: 'Błąd',
      icon: 'error',
      text: `W trakcie importu postaci wystąpił błąd (${error.message}).`,
      showConfirmButton: false,
      timer: 1500
    })
  }
})

document.getElementById('import-character').addEventListener('click', function () {
  try {
    const fileInput = document.createElement('input')
    fileInput.type = 'file'
    fileInput.accept = 'application/json'

    fileInput.addEventListener('change', function () {
      try {
        const file = this.files[0]
        const reader = new FileReader()

        reader.addEventListener('load', function () {
          const data = JSON.parse(this.result)

          GLOBALS.CHARACTER_ID = data.id

          importCharacter(data)
        })

        reader.readAsText(file)

        Swal.fire({
          title: 'Sukces',
          icon: 'success',
          text: 'Postać została zaimportowana pomyślnie.',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (error) {
        Swal.fire({
          title: 'Błąd',
          icon: 'error',
          text: `W trakcie importu postaci wystąpił błąd (${error.message}).`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })

    fileInput.click()
  } catch (error) {
    Swal.fire({
      title: 'Błąd',
      icon: 'error',
      text: `W trakcie importu postaci wystąpił błąd (${error.message}).`,
      showConfirmButton: false,
      timer: 1500
    })
  }
})

document.getElementById('add-skill').addEventListener('click', function () {
  const skillElement = document.querySelector("select[name='skills']")

  if (!skillElement.value) {
    return
  }

  createSkill(skillElement.value)
})

document.getElementById('add-talent').addEventListener('click', function () {
  const talentElement = document.querySelector("select[name='talents']")

  if (!talentElement.value) {
    return
  }

  createTalent(talentElement.value)
})

document.getElementById('buy-attribute-points').addEventListener('click', function () {
  Swal.fire({
    title: 'UWAGA',
    icon: 'warning',
    text: 'Funkcja w trakcie tworzenia! Nie jest zgodna z zasadami gry!'
  }).then(() => {
    const totalAttributePoints = document.getElementById('total-attribute-points')
    const remainingExp = document.getElementById('remaining-exp')
    const totalExp = document.getElementById('total-exp')

    Swal.fire({
      title: 'Kup Punkty Atrybutów (PA)',
      text: 'Ile punktów atrybutów chcesz kupić?',
      input: 'number',
      inputPlaceholder: 'Wpisz ilość punktów atrybutów...',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'Musisz podać ilość punktów atrybutów!'
        } else if (Number(value) * 5 > Number(remainingExp.value)) {
          return 'Nie masz wystarczającej ilości punktów doświadczenia!'
        }
      }
    }).then((result) => {
      if (!result.isConfirmed) {
        return
      }

      const points = Number(result.value)

      totalAttributePoints.value = Number(totalAttributePoints.value) + points
      totalExp.value = Number(totalExp.value) - points * 5

      totalAttributePoints.dispatchEvent(new Event('change'))
      totalExp.dispatchEvent(new Event('change'))

      Swal.fire({
        title: 'Sukces',
        icon: 'success',
        text: 'Punkty atrybutów zostały zakupione pomyślnie.',
        showConfirmButton: false,
        timer: 1500
      })
    })
  })
})
