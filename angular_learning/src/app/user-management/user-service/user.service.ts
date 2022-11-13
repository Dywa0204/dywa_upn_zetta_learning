import { Injectable } from '@angular/core';
import { sample, User } from './user.model';

@Injectable()
export class UserService {
    user = sample;
    userFound: User[] = [];

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

    searchUser(keyword: string){
        this.userFound = [];
        for(let i = 0; i < this.user.length; i++){
            if(this.normalizeText(this.user[i].name).includes(this.normalizeText(keyword)))
                this.userFound.push(this.user[i]);
        }

        return this.userFound;
    }

    normalizeText(text: string){
        text = text.replace(/\s/g, '');
        text = text.toLowerCase();
        text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return text
    }
} 