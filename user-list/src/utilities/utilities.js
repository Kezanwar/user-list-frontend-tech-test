// basic utilities

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const createDate = (date) => {
  return {
    // day: date.getDate(),
    // month: date.getMonth(),
    // year: date.getFullYear(),
    ISODateAndTimeArr: date.toISOString().split('T'),
    // timeArr: function () {
    //   return this.ISODateAndTimeArr[1].split(':')
    // },
    // getTime: function () {
    //   let [hour, min] = this.timeArr()
    //   return `${hour}:${min}`
    // },
    dateArr: function () {
      return this.ISODateAndTimeArr[0].split('-')
    },
    getShortDate: function () {
      let [year, month, day] = this.dateArr()
      day = day < 10 ? day.slice(-1) : day
      month = month < 10 ? month.slice(-1) : month
      year = year.slice(-2)
      return `${day}/${month}/${year}`
    },
  }
}

export const returnNA = (val) => {
  if (val !== null || val) return capitalizeFirstLetter(val)
  else return 'N/A'
}
