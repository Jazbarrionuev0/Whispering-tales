export type Tale = {
    id : number,
    name : string,
    description: string,
    image: string,
    content: string,
    date: Date,
    user: User,
    category: Category

}

export type User = {
    id : number,
    name : string,
    username: string,
    password: string,
    tales: Tale[],
}

export type Category = {
    id : number,
    name : string,
}

export type TaleCategory = {
    id : number,
    name : string,
    tales: Tale[],
}

