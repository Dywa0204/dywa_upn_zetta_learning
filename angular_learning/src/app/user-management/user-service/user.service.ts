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
} 