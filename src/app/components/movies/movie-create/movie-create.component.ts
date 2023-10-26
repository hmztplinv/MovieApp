import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
  providers: [MovieService]  // Eğer MovieService @Injectable içinde providedIn: 'root' olarak tanımlanmışsa, bu satıra gerek yoktur.
})
export class MovieCreateComponent implements OnInit {
  movieForm: FormGroup;

  constructor(private fb: FormBuilder, private movieService: MovieService) {
    this.movieForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],  // Burada düzeltildi
      isPopular: [false], // Başlangıç değeri olarak false
      categoryId: ['1', [Validators.required]],
      // datePublished: ['', [Validators.required]]  // Eğer bu alanı kullanacaksanız, yorumu kaldırın.
    });
  }

  ngOnInit(): void {
    // Başlangıçta yapılacak işlemler burada olabilir.
  }

  onSubmit() {
    if (this.movieForm.valid) {
      this.movieService.createMovie(this.movieForm.value).subscribe(
        response => {
          console.log('Film başarıyla oluşturuldu.', response);
        },
        error => {
          console.error('Film oluşturulamadı.', error);
        }
      );
    } else {
      alert('Lütfen tüm zorunlu alanları doldurun.');
    }
  }
}
