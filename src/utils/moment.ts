import moment from "moment"

export const getDateFormat = (time = new Date(), display = 'DD/MM/YYYY') => {
    return moment(time).format(display)
}