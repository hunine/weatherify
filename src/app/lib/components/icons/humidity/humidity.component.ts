import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-humidity-icon',
  standalone: true,
  imports: [],
  templateUrl: './humidity.component.html',
  styleUrl: './humidity.component.scss',
})
export class HumidityComponent {
  @Input() customClass: string = 'w-[24px] h-[24px]';
}
