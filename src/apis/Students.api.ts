import { Student_List } from 'types/Students.type'
import http from 'utils/http'

export const getStudents = (page: number|string, limit:number|string) => {
    return http.get<Student_List>('students',{
        params:{
            _page: page,
            _limit: limit
        }
    })
}