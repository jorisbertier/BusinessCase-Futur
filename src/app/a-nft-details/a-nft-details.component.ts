import { Component } from '@angular/core';
import { NftService } from '../nft.service';
import { ActivatedRoute } from '@angular/router';
import { IEth } from 'src/interface/eth/eth.interface';
import { EthService } from '../../service/Eth/eth.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-a-nft-details',
  templateUrl: './a-nft-details.component.html',
  styleUrls: ['./a-nft-details.component.scss']
})
export class ANftDetailsComponent {

  nft: any;
  ethList: IEth[] = [];
  ethActualPrice: IEth | undefined;


 
  constructor(private nftService: NftService, private route: ActivatedRoute, private ethService: EthService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nftService.getNftById(params['id']).subscribe(data =>{
        this.nft = data;
        }) 
    })

    this.ethService.getPriceEthLastSevenWeek().subscribe(ethListResult => {
      this.ethList = ethListResult;
        console.table(this.ethList);
      });

    this.ethService.getActualPriceEth().subscribe(ethResultOne => {
      this.ethActualPrice = ethResultOne;
        console.log(this.ethActualPrice);
      });

      const ethPrices: number [] = [];
      const ethUpdateDates: string [] = [];

      this.ethService.getPriceEthLastSevenWeek().subscribe(ethListResult => {
        this.ethList = ethListResult;
      
        for (const eth of this.ethList) {
          ethPrices.push(eth.currentPrice / 100 * this.nft?.price);

          const updateDate = new Date(eth.updateDate);
          const formattedDate = `${updateDate.getDate()}/${updateDate.getMonth() + 1}/${updateDate.getFullYear()} ${updateDate.getHours()} h :${updateDate.getMinutes()} min`;
          ethUpdateDates.push(formattedDate);
        }
      
        myChart.data.labels = ethUpdateDates;
        myChart.data.datasets[0].data = ethPrices;
        myChart.update(); // Update the chart to reflect the new data
      });


      let myChart = new Chart("myChart", {
        type: 'bar',
        data: {
          labels: ethUpdateDates, // Use the array for labels
          datasets: [{
            label: 'Prix ETH en €',
            data: ethPrices,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 1,
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

  }

  getNftById(id:number) {
    this.nft = this.nftService.getNftById(id);
  }

}
