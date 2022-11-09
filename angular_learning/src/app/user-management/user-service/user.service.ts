import { Injectable } from '@angular/core';
import { User, Users } from './user.model';

@Injectable()
export class UserService {
    user = Users;

    onFormSubmit(values: any){
        this.user.push({
            idNumber: values.idNumber,
            name: values.name,
            age: values.age,
            gender: values.gender,
            email: values.email,
            position: values.position,
            marital: values.marital,
            addresess: {
                address: values.address,
                zipCode: values.zipCode,
                city: values.city,
                country: values.country
            }
        })
    }

    getAllUser(){
        return this.user;
    }

    checkId(id: number){
        let found = false;
        this.user.forEach(item => {
            found = item.idNumber === id ? true : false;
        })
        return found
    }

    editUser(index: number, values: any){
        this.user[index].idNumber = values.idNumber,
        this.user[index].name = values.name,
        this.user[index].age = values.age,
        this.user[index].gender = values.gender,
        this.user[index].email = values.email,
        this.user[index].position = values.position,
        this.user[index].marital = values.marital,
        this.user[index].addresess.address = values.address,
        this.user[index].addresess.zipCode = values.zipCode,
        this.user[index].addresess.city = values.city,
        this.user[index].addresess.country = values.country
    }
} 