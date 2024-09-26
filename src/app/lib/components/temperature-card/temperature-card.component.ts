import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

const modules = [CommonModule];

@Component({
  selector: 'app-temperature-card',
  standalone: true,
  imports: [modules],
  templateUrl: './temperature-card.component.html',
  styleUrl: './temperature-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemperatureCardComponent {
  @Input() header: string = 'Today';
  @Input() temperature: number = 20;
  @Input() description: string = 'Mist';
  @Input() isActive: boolean = false;
}
