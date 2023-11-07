// ?character=e2811bc0-f94a-47f9-80d7-d3d24136a138

export function getCharacterId() {
  const query = new URLSearchParams(window.location.search)

  return query.get('character')
}
