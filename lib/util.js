export const getMilliseconds = function(duration, defaults) {
  const t = {
    ms:           1,
    second:       1000,
    minute:       60000,
    hour:         3600000,
    day:          3600000 * 24,
    week:         3600000 * 24 * 7,
    month:        3600000 * 24 * 30,
    year:         3600000 * 24 * 365,
  }

  if (typeof duration === 'number') return duration

  if (typeof duration === 'string') {
    var split = duration.match(/^([\d\.,]+)\s(\w+)$/)

    if (split.length === 3) {
      var len = parseFloat(split[1])
      var unit = split[2].replace(/s$/i,'').toLowerCase()
      if (unit === 'm') {
        unit = 'ms'
      }

      return (len || 1) * (t[unit] || 0)
    }
  }

  return defaults
}
