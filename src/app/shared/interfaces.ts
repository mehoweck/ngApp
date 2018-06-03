import {Observable} from 'rxjs';

export interface AuthServiceInterface {
    logIn (authData: AuthDataInterface): void;
    logOut (): void;
    logged(): void;
}

export interface HttpServiceInterface {
    fetch (params?: any): Observable<any>;
    add (item): Observable<any>;
    update (item): Observable<any>;
    remove (id): Observable<any>;
}

export interface HttpResponseInterface {
    ok: boolean;
    data: any[];
    total: number;
    msg: string;
    error: string;
}

export interface ItemInterface {
    category: string;
    id?: number;
    imgSrc?: string;
    price: number;
    title: string;
}

export interface AuthDataInterface {
    username: string;
    password: string;
}

