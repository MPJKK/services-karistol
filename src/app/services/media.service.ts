import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MediaService {

  testi = 'gagaga';
  apiUrl = 'http://media.mw.metropolia.fi/wbma';

  constructor(private http: HttpClient) {
  }

  getAllMedia() {
    return this.http.get(this.apiUrl + '/media');
  }

}
