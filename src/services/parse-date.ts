export const parseDate = (date: string) => {
    date = date.replace('T', ', ')
    return date.replace('Z', '')
}