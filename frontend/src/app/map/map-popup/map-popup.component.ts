import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertiesService } from 'src/app/properties/properties.service';
import { Property } from 'src/app/shared/interface/property';

@Component({
    selector: 'app-map-popup',
    templateUrl: './map-popup.component.html',
    styleUrls: ['./map-popup.component.css'],
    standalone: false
})
export class MapPopupComponent implements OnInit {
  @Input() property: Property;
  constructor(
    public changeDetector: ChangeDetectorRef,
    private router: Router,
    private propertiesService: PropertiesService
  ) {}

  ngOnInit() {}

  viewMore() {
    this.router.navigate(['/properties', this.property.property_id]);
  }
}
