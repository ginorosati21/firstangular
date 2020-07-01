import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaListItem } from 'src/app/models';
import { selectMediaListItemModel, AppState } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-media-container',
  templateUrl: './media-container.component.html',
  styleUrls: ['./media-container.component.css']
})
export class MediaContainerComponent implements OnInit {

  listModel$: Observable<MediaListItem[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.listModel$ = this.store.pipe(
      select(selectMediaListItemModel)
    );
  }

}
