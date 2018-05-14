import * as angular from 'angular';

export class ConfirmDeleteService {
  isConfirmShow: boolean;
  afterConfirmHandler: Function;

  constructor(
  ) {
    this.isConfirmShow = false;
  }

  show(id, cb){
    this.isConfirmShow = true;
    this.afterConfirmHandler = cb;

  }


}