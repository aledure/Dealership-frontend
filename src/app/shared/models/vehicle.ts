export class Vehicle {
    bodytype: string
    year: number
    make: string
    model: string
    color: string
    mileage: number
    purchase_year: number
    condition: string
    image: string
    price: number
    created_at: string
    updated_at: string
    constructor({
        bodytype = '',
        year = null,
        make = '',
        model = '',
        color = '',
        mileage = null,
        purchase_year = null,
        condition = '',
        image = '',
        price = null,
        ...rest
    }) {
// assigning values from API input
        Object.assign(this, rest)
        this.bodytype = bodytype,
        this.year = year,
        this.make = make,
        this.model = model,
        this.color = color,
        this.mileage = mileage,
        this.purchase_year = purchase_year
        this.condition = condition,
        this.image = image,
        this.price = price
    }
}
