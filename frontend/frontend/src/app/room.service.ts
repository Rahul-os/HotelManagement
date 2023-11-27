import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RoomService {

  upadateRoomInformation: any;
  constructor(private http: HttpClient, public router: Router) { }

  //var ROOT_URL = "http://http://hotelmanagement-env.eba-byszbdrw.us-east-2.elasticbeanstalk.com"

  adminRoomList() {
    return this.http.get<any>('http://hotelmanagement-env.eba-byszbdrw.us-east-2.elasticbeanstalk.com/getRoomList');

  }

  deleteRoomInfo(data) {
    console.log(data);
    return this.http.delete(`http://hotelmanagement-env.eba-byszbdrw.us-east-2.elasticbeanstalk.com/deleteRoom/${data.roomId}`);
  }

  updateRoomInfo(data) {
    console.log(data);
    return this.http.put('http://hotelmanagement-env.eba-byszbdrw.us-east-2.elasticbeanstalk.com/updateRoomInforamtion', data);
  }

  addRoom(data): Observable<any> {
    console.log(data);
    return this.http.put<any>('http://hotelmanagement-env.eba-byszbdrw.us-east-2.elasticbeanstalk.com/addRoomInformation', data);
  }

  roomInfoForUpdation(roomInfo) {
    console.log('...........in hotel service..........', roomInfo);
    this.upadateRoomInformation = roomInfo;

    console.log('.......updateHotelInfo.......', this.upadateRoomInformation);
    this.router.navigateByUrl('/vertical-header/admin-update-room');
  }

}
