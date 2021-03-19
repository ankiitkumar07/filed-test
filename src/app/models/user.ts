export class User {
    firstName: String
    lastName: String
    email: String
    monthlyAdvertisingBudget: number
    countryCode: number
    phoneNumber: number

    constructor(firstName: string, lastName: string, email: string, monthlyAdvertisingBudget: number, countryCode: number, phoneNumber: number) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.monthlyAdvertisingBudget = monthlyAdvertisingBudget
        this.countryCode = countryCode
        this.phoneNumber = phoneNumber
    }
}
