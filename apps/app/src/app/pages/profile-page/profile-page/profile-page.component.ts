import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from './profile.service';
import { Observable, Subject } from 'rxjs';
import { UserProfile } from '../model/userProfile';
import { WebcamImage, WebcamModule } from 'ngx-webcam';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadBytes,
} from '@angular/fire/storage';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule, WebcamModule, MatButtonModule],
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent {
  profile$: Observable<UserProfile | null>;

  trigger$ = new Subject<void>();

  @ViewChild('filePreview')
  private filePreview!: ElementRef;

  constructor(
    private readonly profileService: ProfileService,
    private readonly storage: Storage
  ) {
    this.profile$ = this.profileService.getProfile();
  }

  takePhoto() {
    this.trigger$.next();
  }

  handleSnapshot($event: WebcamImage) {
    this.filePreview.nativeElement.src = $event.imageAsDataUrl;

    const base64Img = $event.imageAsBase64;

    const u8arr = this.toByteArray(base64Img);
    const filename = 'tmp.jpeg';
    const file: File = new File([u8arr], filename, { type: 'image/jpeg' });

    const fileDetails = ref(this.storage, filename);
    uploadBytes(fileDetails, file)
      .then(() => {
        return getDownloadURL(fileDetails);
      })
      .then((url) => console.log(url));

    /** As observable  :
     * from(uploadBytes(fileDetails, file))
     *       .pipe(switchMap(() => getDownloadURL(fileDetails)))
     *       .subscribe((url) => console.log(url));
     */
  }

  hasPreview() {
    const preview = this.filePreview?.nativeElement?.src;
    return preview && !preview.includes('#');
  }

  private toByteArray(base64Img: string) {
    const bstr = atob(base64Img);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return u8arr;
  }
}
