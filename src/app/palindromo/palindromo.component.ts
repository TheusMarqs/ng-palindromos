import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  templateUrl: './palindromo.component.html',
  styleUrls: ['./palindromo.component.css']
})
export class PalindromoComponent {
  numero: number = 0;
  resultado : string = '';
  msg : string = '';

  Verificar() {
    const textoInicial = this.numero.toString();
    const textoInverso = textoInicial.split('').reverse().join('');

    if (this.numero < 10) {
      this.msg = 'Por favor, digite um valor com duas ou mais casas decimais';
    }

    else {
      if (textoInicial !== '') {
        if (textoInicial === textoInverso) {
          this.msg = 'O número ' + this.numero + ' é palíndromo';
        }

        else {
          this.msg = 'O número ' + this.numero + ' não é palíndromo';
        }
      }

    }
    this.resultado = this.msg;

  }
}
