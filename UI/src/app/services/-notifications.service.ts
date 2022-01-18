import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private toastr: ToastrService) {}

  showSuccess(message: any, title: any) {
    return this.toastr.success(message, title, {
      timeOut: 2000,
    });
  }
  showError(message: any, title: any) {
    return this.toastr.error(message, title, {
      timeOut: 2000,
    });
  }
}
