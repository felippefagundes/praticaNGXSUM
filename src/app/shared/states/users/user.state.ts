import { Injectable } from '@angular/core';
import { User } from './../../models/user.model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UserService } from '../../services/user.service';
import { tap } from 'rxjs/operators';
import { GetUsers } from './user.action';

export class UserStateModel{
  users: User[];
  selectedUser: User;
}

@State<UserStateModel>({
  name: 'users',
  defaults: {
    users: [],
    selectedUser: null,
  },
})
@Injectable()
export class UserState{
  constructor(private userService: UserService){}

  @Selector()
  static getSelectedUser(state: UserStateModel){
    return state.selectedUser;
  }

  @Selector()
  static getUserList(state: UserStateModel){
    return state.users;
  }

  @Action(GetUsers)
  getUsers({getState, setState}: StateContext<UserStateModel>){
    return this.userService.getAll().pipe(tap((result)=> {
      const state = getState();
      setState({
        ...state,
        users: result,
      })
    })
  )}


}

