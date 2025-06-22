import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn:'root',
})
export class AuthService{
    isLoggedIn : boolean = false;
    userList:any[] = [
        {id:1,firstName:'User',lastName:'Admin',email:'useradmin@gmail.com',password:'user@1234'},
        {id:1,firstName:'Rahul',lastName:'Kumar',email:'rahul@gmail.com',password:'rahul@1234'},
        {id:1,firstName:'Mahesh',lastName:'Kumar',email:'mahesh@gmail.com',password:'rahul@1234'},
        {id:1,firstName:'Kishor',lastName:'Kumar',email:'kishor@gmail.com',password:'rahul@1234'},
        {id:1,firstName:'Rahul',lastName:'Kumar',email:'rahul@gmail.com',password:'rahul@1234'},
    ]
    constructor(private router:Router){}

    login(params:any){
        let user = this.userList.find(user => user.email === params.email && user.password === params.password);
        if(user){
            console.log('user--------',user);
            
            this.isLoggedIn = true;
            localStorage.setItem('token','mock-token-1234');
            return {user:user};
        }else{
            this.isLoggedIn = false;
            return {user: user};
        }
    }

    logout(){
        this.isLoggedIn = false;
        localStorage.setItem('token','false');
        this.router.navigate(['/overview/auth'])
    }

    isAuthenticate(){
        return !!localStorage.getItem('token');
    }
}