import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wind-icon',
  standalone: true,
  imports: [],
  templateUrl: './wind.component.html',
  styleUrl: './wind.component.scss',
})
export class WindComponent {
  @Input() customClass: string = 'w-[24px] h-[24px]';
}
