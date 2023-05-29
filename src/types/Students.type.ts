export interface Student{
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    gender: string, 
    country: string,
    avatar: string,
    btc_address: string
}

export type Student_List = Pick<Student, 'id' | 'email' | 'avatar' | 'last_name'> []