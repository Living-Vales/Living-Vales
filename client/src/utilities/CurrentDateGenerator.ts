const currentDate = new Date()
    
const currentMonth = currentDate.getMonth() + 1;
const lastDayDate = new Date( currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
const lastDay = lastDayDate.toLocaleDateString().split('/')[0];

export const fromDateInitialText : string = currentDate.getFullYear()  + '-0' + currentMonth + '-01'
export const toDateInitialText : string = currentDate.getFullYear()  + '-0' + currentMonth + '-' + lastDay