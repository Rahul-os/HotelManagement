import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from './hotel-information';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //var ROOT_URL = "http://hotelmanagement-env.eba-byszbdrw.us-east-2.elasticbeanstalk.com"

  upadateEmployeeInformation: any;
  roomListForEmployee: any;
  constructor(private http: HttpClient, private router: Router) { }

  adminEmployeeList() {
    return this.http.get<any>('http://hotelmanagement-env.eba-byszbdrw.us-east-2.elasticbeanstalk.com/getEmployeeList');

  }

  deleteEmployeeInfo(data) {
    console.log(data);
    return this.http.delete(`http://hotelmanagement-env.eba-byszbdrw.us-east-2.elasticbeanstalk.com/deleteEmployee/${data.employeeId}`);
  }

  updateEmployeeInfo(data) {
    console.log(data);
    return this.http.put('http://hotelmanagement-env.eba-byszbdrw.us-east-2.elasticbeanstalk.com/updateEmployeeInformation', data);
  }


  addEmployee(data): Observable<any> {
    console.log(data);
    return this.http.put<any>('http://hotelmanagement-env.eba-byszbdrw.us-east-2.elasticbeanstalk.com/addEmployee', data);
  }

  getHotelInfo(data): Observable<Hotel> {
    console.log('............getHotelInfo', data);
    return this.http.post<Hotel>('http://hotelmanagement-env.eba-byszbdrw.us-east-2.elasticbeanstalk.com/getHotelInfoForEmployee', data);
  }

  employeeRoomList(data): Observable<Hotel> {
    console.log('............employeeRoomList', data);
    return this.http.post<Hotel>('http://hotelmanagement-env.eba-byszbdrw.us-east-2.elasticbeanstalk.com/getRoomListForEmployee', data);
  }

  employeeBookRoom(data): Observable<any> {
    console.log(data);
    return this.http.put<any>('http://hotelmanagement-env.eba-byszbdrw.us-east-2.elasticbeanstalk.com/hotelBookingFromEmployee', data);
  }

  employeeInfoForUpdation(employeeInfo) {

    console.log('...........in hotel service..........', employeeInfo);
    this.upadateEmployeeInformation = employeeInfo;

    console.log('.......updateHotelInfo.......', this.upadateEmployeeInformation);
    this.router.navigateByUrl('/vertical-header/admin-update-employee');

  }

  employeeRoomListData(data) {
    this.roomListForEmployee = data;
  }
}
