import { Component } from '@angular/core';
import { NftService } from '../nft.service';
import { ActivatedRoute } from '@angular/router';
import { IEth } from 'src/interface/eth/eth.interface';
import { EthService } from '../../service/Eth/eth.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { CookieService } from 'ngx-cookie-service';
import { INft } from '../../interface/nft/nft.interface';
import { CartService } from '../../service/Cart/cart.service';

import { FavorisService } from '../favoris.service';

@Component({
  selector: 'app-a-nft-details',
  templateUrl: './a-nft-details.component.html',
  styleUrls: ['./a-nft-details.component.scss']
})
export class ANftDetailsComponent {

  nft: any;
  nftCart: any;
  ethList: IEth[] = [];
  ethActualPrice: IEth | undefined;
  public productList: any;

  addToCartMessage: string = '';
  addToFavoritetMessage: string = '';


 
  constructor(
    private nftService: NftService,
    private route: ActivatedRoute,
    private ethService: EthService,
    private favorisService: FavorisService,
    private CartService: CartService,
    ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nftService.getNftById(params['id']).subscribe(data =>{
        this.nft = data;
        console.table(this.nft);
        }) 
    })
    
    this.ethService.getPriceEthLastSevenWeek().subscribe(ethListResult => {
      this.ethList = ethListResult;
      });

    this.ethService.getActualPriceEth().subscribe(ethResultOne => {
      this.ethActualPrice = ethResultOne;
      });
      console.log(this.ethActualPrice);

      const ethPrices: number [] = [];
      const ethUpdateDates: string [] = [];

      this.ethService.getPriceEthLastSevenWeek().subscribe(ethListResult => {
        this.ethList = ethListResult;
      
        for (const eth of this.ethList) {
          ethPrices.push(eth.currentPrice / 100 * this.nft?.price);

          const updateDate = new Date(eth.updateDate);
          const day = updateDate.getDate();
          const month = updateDate.getMonth() + 1;
          const year = updateDate.getFullYear() % 100;

          const formattedDay = day < 10 ? `0${day}` : day;
          const formattedMonth = month < 10 ? `0${month}` : month;

          const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;
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

      this.productList.array.forEach((a:any) => {
        Object.assign(a,{quantity:1, total:a.price})
      });
  }

  getNftById(id:number) {
    this.nft = this.nftService.getNftById(id);
  }

  addToCart(nftCart : INft) {
    this.CartService.addToCart(nftCart);
    this.addToCartMessage = "Ajout au panier effectué";
    console.log(nftCart);
    
  }

  removeFromCart(nftCart : any) {
    this.CartService.removeFromCart(nftCart);
  }

  getCarts() {
    this.CartService.getCarts();
  }

  addToFavoris(nft: INft) {
    this.favorisService.addToFavoris(nft);
    this.addToFavoritetMessage = "Ajout aux favoris effectué";
    console.log(nft);
  }

  removeFromFavoris(nft: any) {
    this.favorisService.removeFromFavoris(nft);
  }

  getFavoris() {
    return this.favorisService.getFavoris();
  }
}
