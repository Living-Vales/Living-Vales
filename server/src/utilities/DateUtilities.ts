
class DateUtilities {

    /**
     * Date deve ser no formato dd/mm/yyyy
     * @param date string
     * @returns Date
     */
    public formatStringDmY(date: String): Date {
        const arr = date.split("-")
        
        return new Date(
            Number.parseInt(arr[2]),
            Number.parseInt(arr[1]) - 1,
            Number(arr[0])
            )
    }
}

export default DateUtilities;