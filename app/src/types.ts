export interface IProduct {
    id: string,
    title: string,
    price: {
        currency: string,
        amount: number,
        decimals: number
    },
    picture: string,
    condition: string,
    freeShipping: boolean,
    soldQuantity: number,
    description: string,
    state: string,
    categories: string[]
}