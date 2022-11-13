import { Injectable } from '@angular/core';
import { sample, User } from './user.model';

@Injectable()
export class UserService {
    user = sample;

    getAllUser(){
        return this.user;
    }

    getUser(index: number){
        return this.user[index];
    }

    checkId(id: number){
        let found = false;
        for(let i = 0; i < this.user.length; i++){
            if(this.user[i].idNumber == id){
                found = true;
                break;
            }
        }
        return found
    }

    addUser(values: any){
        this.user.push(values);
    }

    editUser(index: number, values: any){
        this.user[index] = values;
    }

    /* onFormSubmit(values: any){
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
    } */

    

    

    /* editUser(index: number, values: any){
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
    } */
} 