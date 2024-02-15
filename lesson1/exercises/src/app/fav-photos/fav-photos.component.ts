import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://rvb-img.reverb.com/image/upload/s--MINK5bci--/a_0/f_auto,t_large/v1707004903/en3kgrjpoeit2fgqnjyj.jpg';
  image2 = 'https://rvb-img.reverb.com/image/upload/s--npGZ-X1K--/a_0/t_card-square/v1707167944/szhw0kfozepfghvkpbll.jpg';
  image3 = 'https://image.mux.com/AliviPHFYvRhi6Sq4w3nNySxsE00wYFVhfa8uDiMhGLA/thumbnail.jpg?token=eyJhbGciOiJSUzI1NiIsImtpZCI6Ik5CY3o3Sk5RcUNmdDdWcmo5MWhra2lEY3Vyc2xtRGNmSU1oSFUzallZMDI0IiwidHlwIjoiSldUIn0.eyJzdWIiOiJBbGl2aVBIRll2UmhpNlNxNHczbk55U3hzRTAwd1lGVmhmYTh1RGlNaEdMQSIsImV4cCI6MTcxMDA2MDAyOCwiYXVkIjoidCIsInRpbWUiOjB9.n2rsEHv-qgToDvG7kWb3OV-qgVQSefLgLzjNdMAhwxGoIYD7zIHpqUtNiZO860Z8sCcA_r2vbP9Aq3o4ri_LzcCSZv8xSv8nmDrBjh-A4l6aZZ6s3UyAcC3NS_Rzb72ZvLxAyjy1ZEfUfFooQf7HpEpK4Pe3U4wFTCRNU5aY76IesyUd4vQGyU_JbHB56n1MC_mVKYmS-nHYXXZxx9CcyKQTIdhK_utflkRj5YqQ5brzkO245Jgjm8Q5hTH5R8c45vQ8Dj3C4C_DBiJBBvE62b98F_2hJTtlCBzCqjjvLxJYpy_2lSELX2awbSkyUgsCh4OdgP4gr0J5c7cM9Zw1mg';

  constructor() { }

  ngOnInit() {
  }

}
