import uuid4 from 'https://cdn.jsdelivr.net/gh/tracker1/node-uuid4/browser.mjs'

import { SKILLS, TALENTS, RACES, MAGIC_TYPES, GLOBALS } from '../constants.mjs'
import { importCharacter } from '../helpers.mjs'
import { TEST_CONNECTION, getCharacter } from '../redis.mjs'
import { getCharacterId } from '../query.mjs'

const raceSelector = document.querySelector("select[name='race']")
const magicSelector = document.querySelector("select[name='magic-type']")

for (const race in RACES) {
  const option = document.createElement('option')

  option.value = race
  option.innerText = RACES[race]

  raceSelector.appendChild(option)
}

for (const type in MAGIC_TYPES) {
  if ('subtypes' in MAGIC_TYPES[type]) {
    const optgroup = document.createElement('optgroup')

    optgroup.label = MAGIC_TYPES[type].name

    for (const subtype in MAGIC_TYPES[type].subtypes) {
      const option = document.createElement('option')

      option.value = subtype
      option.innerText = MAGIC_TYPES[type].subtypes[subtype]

      optgroup.appendChild(option)
    }

    magicSelector.appendChild(optgroup)
  } else {
    const option = document.createElement('option')

    option.value = type
    option.innerText = MAGIC_TYPES[type].name

    magicSelector.appendChild(option)
  }
}

for (const skill in SKILLS) {
  const skillElement = document.querySelector("select[name='skills']")

  const option = document.createElement('option')

  option.value = skill
  option.innerText = SKILLS[skill]

  skillElement.appendChild(option)
}

for (const talent in TALENTS) {
  const talentElement = document.querySelector("select[name='talents']")

  if ('types' in TALENTS[talent]) {
    const optgroup = document.createElement('optgroup')
    optgroup.label = TALENTS[talent].name

    for (const type in TALENTS[talent].types) {
      if ('subtypes' in TALENTS[talent].types[type]) {
        for (const subtype in TALENTS[talent].types[type].subtypes) {
          const option = document.createElement('option')

          option.value = `${talent}_${type}_${subtype}`
          option.innerText = TALENTS[talent].types[type].subtypes[subtype]

          optgroup.appendChild(option)
        }
      } else {
        const option = document.createElement('option')

        option.value = `${talent}_${type}`
        option.innerText = TALENTS[talent].types[type].name

        optgroup.appendChild(option)
      }
    }

    talentElement.appendChild(optgroup)
  } else {
    const option = document.createElement('option')

    option.innerText = TALENTS[talent].name
    option.value = talent

    talentElement.appendChild(option)
  }
}

const id = getCharacterId()

GLOBALS.CHARACTER_ID = id || uuid4()

if (id) {
  try {
    await TEST_CONNECTION()

    const data = await getCharacter(GLOBALS.CHARACTER_ID)

    importCharacter(data)

    Swal.fire({
      title: 'Sukces',
      icon: 'success',
      text: 'Postać została zaimportowana pomyślnie.',
      showConfirmButton: false,
      timer: 1500
    })
  } catch (error) {
    console.error(error)

    Swal.fire({
      title: 'Błąd',
      icon: 'error',
      text: `W trakcie importu postaci wystąpił błąd (${error.message}).`,
      showConfirmButton: false,
      timer: 1500
    })
  }
}
