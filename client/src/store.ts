import { action, makeObservable, observable } from "mobx";
import { User } from "./models/user.interface";

export class UserStore {
    @observable
    currentUser: User = {};

    @action
    setCurrentUser(user: User) {
        this.currentUser = user;
    }

    @action
    resetCurrentUser() {
        this.currentUser = {};
    }

    constructor() {
        makeObservable(this);
    }
}