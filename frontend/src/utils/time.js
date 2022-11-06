import moment from 'moment'

function startInterval() {
  setInterval(() => {
    this.currentTime = moment().format('HH:mm:ss')
  }, 1000)
}

async function saveTime() {
  this.nothingToDelete = false
  const time = this.currentTime
  const res = await fetch('http://localhost:5555/times', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ time }),
  })
  const json = await res.json()
  if (json.insertId) {
    this.savedTimes.unshift({ id: json.insertId, time })
    this.$toast.success(`Время ${time} сохранено`, { position: 'top-right' })
  }
}

async function deleteOneItem(id) {
  return await fetch(`http://localhost:5555/time/${id}`, {
    method: 'DELETE',
  })
}

async function deleteTime(id) {
  const res = await deleteOneItem(id)
  const json = await res.json()
  if (json.affectedRows) {
    this.savedTimes = this.savedTimes.filter((savedTime) => savedTime.id !== id)
    this.$toast.error(`Время с ID ${id} удалено`, {
      position: 'top-right',
    })
  }
}

async function deleteAll() {
  if (checkIfEmpty()) return

  this.nothingToDelete = false
  this.deleteInProgress = true
  let currentItem = null
  while(1) {
    if (this.savedTimes.length === 0) break
    currentItem = this.savedTimes[0]
    await deleteOneItem(currentItem.id)
    this.savedTimes.splice(0, 1)
  }

  this.deleteInProgress = false
}

function checkIfEmpty() {
  if (this.savedTimes.length === 0) {
    this.nothingToDelete = true
    setTimeout(() => {
      this.nothingToDelete = false
    }, 5 * 1000)
    return true
  }
  return false
}

export { startInterval, saveTime, deleteTime, deleteOneItem, deleteAll }
