interface Company{
    name: string,
    user_type: string
}

export interface Data {
    _id: number,
    email: string,
    civility: string,
    first_name: string,
    last_name: string,
    company: Company,
    user_status: string,
    count_document: number
}