import { Component } from '@angular/core';
import { parcelamientoImages } from 'src/app/constant/parcelamiento';
import { mobiliarioImgs } from 'src/app/constant/dist-mobiliario';
import { estacionamiento } from 'src/app/constant/distrubucion-estacionamiento';
import { mapasGeo } from 'src/app/constant/mapas-geo';
import { modelado3d } from 'src/app/constant/modelado3d';
import { plantasArq } from 'src/app/constant/plantasArq';
import { IProject } from 'src/app/project.interface';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: { class: 'h-100' },
})
export class HomeComponent {
  public readonly parcelamientoImages: string[] = parcelamientoImages;
  public readonly mobiliarioImgs: string[] = mobiliarioImgs;
}
