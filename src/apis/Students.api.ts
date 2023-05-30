import { Student, Student_List } from 'types/Students.type'
import http from 'utils/http'

export const getStudents = (page: number | string, limit: number | string) => {
    return http.get<Student_List>('students', {
        params: {
            _page: page,
            _limit: limit
        }
    })
}

export const getStudent = (id: number | string) => http.get<Student>(`students/${id}`)

export const addStudent = (student: Omit<Student, 'id'>) => http.post<Student_List>('/students', student)