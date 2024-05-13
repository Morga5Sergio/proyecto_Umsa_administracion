import { Component } from '@angular/core';

import { PdfMakeWrapper, Txt } from 'pdfmake-wrapper';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
// import * as pdfFonts from 'pdfMake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-reporte-verano',
  templateUrl: './reporte-verano.component.html',
  styleUrls: ['./reporte-verano.component.scss']
})
export class ReporteVeranoComponent {
  pdfData: any;

  ngOnInit() {
    this.generarPDFKArla();
  }

  generarPDFKArla() {
    const pdfMaker = new PdfMakeWrapper();

    /*var dd = {
      content: [
        { text: 'Del 20 de diciembre 2019 al 8 de enero del 2020', style: 'header' },
        
        { text: 'Anexo', style: 'anotherStyle' },
        
      ],
    
      styles: {
        header: {
          alignment:'right'
        },
        anotherStyle: {
          
          alignment: 'left'
        }
      }
    };*/

    var dd = {
      content: [
        
        {
          columns: [
            {
              width: 450,
              float: 'left',
              text: 'Del 20 de diciembre 2019 al 8 de enero del 2020.'
            },
            {
              float: 'right',
              text: 'Anexo.'
            },
            
          ]
        },
        {text: 'Defining column widths', style: 'subheader'},
        'Tables support the same width definitions as standard columns:',
        {
          bold: true,
          ul: [
            'auto',
            'star',
            'fixed value'
          ]
        },
        {
          style: 'tableExample',
          table: {
            widths: [100, '*', 200, '*'],
            body: [
              ['width=100', 'star-sized', 'width=200', 'star-sized'],
              ['fixed-width cells have exactly the specified width', {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}, {text: 'nothing interesting here', italics: true, color: 'gray'}]
            ]
          }
        },
        {
          style: 'tableExample',
          table: {
            widths: ['*', 'auto'],
            body: [
              ['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
            ]
          }
        },
        {
          style: 'tableExample',
          table: {
            widths: ['*', 'auto'],
            body: [
              ['This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.', {text: 'I am auto sized.', noWrap: true}],
            ]
          }
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',
        {
          text: 'Subheader 2 - using subheader style',
          style: 'subheader'
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',
        {
          text: 'It is possible to apply multiple styles, by passing an array. This paragraph uses two styles: quote and small. When multiple styles are provided, they are evaluated in the specified order which is important in case they define the same properties',
          style: ['quote', 'small']
        }
      ],
      styles: {
        leftk: {
          width: 50,
          float:'left',
          bold: true
        },
        rightk: {
          width: 50,
          float:'right',
          bold: true
        },
        subheader: {
          fontSize: 15,
          bold: true
        },
        quote: {
          italics: true
        },
        small: {
          fontSize: 8
        }
      }
      
    }

    let objetoIfram = document.getElementById('tagDataPdf');

    const pdfDocGenerator = pdfMake.createPdf(dd);
    pdfDocGenerator.getBase64((data) => {
      console.log(data);
      this.pdfData = data;
      if (objetoIfram != null) {
        objetoIfram.setAttribute('src', 'data:application/pdf;base64, ' + data);
      }
    });
  }

}
