export function formatTime(time) {
  // Hours, minutes and seconds
  const hrs = Math.floor(~~(time / 3600)) // eslint-disable-line
  const mins = Math.floor(~~((time % 3600) / 60)) // eslint-disable-line
  const secs = Math.floor(time % 60)

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = ""

  if (hrs > 0) {
    ret += `${hrs}:${mins < 10 ? "0" : ""}`
  }

  ret += `${mins}:${secs < 10 ? "0" : ""}`
  ret += `${secs}`
  return ret
}

export function renderValueText(time) {
  const formattedTime = formatTime(time)
  const split = formattedTime.split(":")
  const seconds = split.pop()
  const minutes = split.pop()

  const renderedText =
    minutes === 0
      ? `${seconds} seconds`
      : `${minutes} minutes, ${seconds} seconds`
  return renderedText
}

export function renderValueNow(time) {
  const hrs = Math.floor(~~(time / 3600)) // eslint-disable-line
  const mins = Math.floor(~~((time % 3600) / 60)) // eslint-disable-line
  const secs = Math.floor(time % 60)
  return hrs * 3600 + mins * 60 + secs
}
