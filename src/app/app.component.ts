import { Component } from '@angular/core';

@Component({
  selector: 'app-root',                 // html 코드에서 이 값을 이용해서 해당 component를 사용하게 됩니다.
  templateUrl: './app.component.html',  // component에서 사용하게 될 html 파일의 위치입니다. 하나의 component에는 하나의 template만 사용가능합니다.
  styleUrls: ['./app.component.css']    // template에서 사용하게 될 css파일들의 위치입니다. 하나의 component에서 여러 파일을 사용가능하기 때문에 배열로 작성합니다.
})
export class AppComponent {
  title = 'todo-list';
}
