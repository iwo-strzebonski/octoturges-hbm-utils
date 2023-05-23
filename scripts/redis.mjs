import uuid4 from 'https://cdn.jsdelivr.net/gh/tracker1/node-uuid4/browser.mjs'

// e2811bc0-f94a-47f9-80d7-d3d24136a138
// 7724c833-f1da-4dad-8a22-0a65260bbde6
// dac2b810-fb58-4d46-a06b-c8703562982c
// 385c6c4e-9d5c-472d-aeae-77ee8e7fb7b4

const HTTP_HEADERS = {
  Authorization:
    'Bearer ApjnASQgNWYxYWYyYjAtNTIzNS00ZmEyLTk0ZDctOWFkYzIzY2RjNTMwfC0_ubWlLkhW7agnBoRpnQyrw5I9rLs8vYUjCbQZnYU='
}

export async function TEST_CONNECTION() {
  return fetch('https://eu1-divine-cardinal-39143.upstash.io/get/foo', {
    headers: HTTP_HEADERS
  }).then((response) => response.json())
}

export async function getCharacter(id) {
  const characterResponse = (
    await fetch(`https://eu1-divine-cardinal-39143.upstash.io/hgetall/${id}`, {
      headers: HTTP_HEADERS
    }).then((response) => response.json())
  ).result

  const characterData = {}

  for (let i = 0; i < characterResponse.length; i += 2) {
    const key = characterResponse[i]
    const value = characterResponse[i + 1]

    characterData[key] = value
  }

  return characterData
}
