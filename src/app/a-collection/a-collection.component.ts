import { Component, OnInit } from '@angular/core';
import { NftService } from '../nft.service';
import { UserService } from 'src/service/user/user.service';
import { INft } from 'src/interface/nft/nft.interface';
import { EthService } from 'src/service/Eth/eth.service';
import { IEth } from 'src/interface/eth/eth.interface';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-a-collection',
  templateUrl: './a-collection.component.html',
  styleUrls: ['./a-collection.component.scss']
})
export class ACollectionComponent implements OnInit {

  userData: any;
  nfts: any;
  nftList: INft[] = [];
  ethActualPrice: IEth | undefined;
  ethYesterdayPrice: IEth | undefined;

  nft: any;
  nftCart: any;
  ethList: IEth[] = [];
  productList: any;
  


  constructor(
    private userService: UserService,
    private nftService: NftService,
    private ethService: EthService
      ) {
      
      }

  ngOnInit() {
    this.getNftUserConnected();
    
    this.userService.getUserData().subscribe(user => {
      if (user) {
        const userId = user.id;
        this.getNftsForUser(userId);
      }
    });

    this.ethService.getActualPriceEth().subscribe(ethResultOne => {
      this.ethActualPrice = ethResultOne;
    });
    
    this.totalPriceNft();
    this.getYesterdayPriceEth();
      

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
    
      console.log(ethPrices);
      myChart.data.labels = ethUpdateDates;
      myChart.data.datasets[0].data = ethPrices;
      myChart.update(); // Update the chart to reflect the new data
      console.log(myChart);
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

    console.log(myChart);
    this.productList.array.forEach((a:any) => {
      Object.assign(a,{quantity:1, total:a.price})
    });
    console.log(this.productList);

  }

  getNftUserConnected() {

    this.userService.getUserData().subscribe(
      (userData) => {
        // Utilisez les données de l'utilisateur connecté ici, par exemple :
        // console.log('Données de l\'utilisateur connecté :', userData);
        this.userData = userData;
      },
      (error) => {
        console.error('Erreur lors de la récupération des données de l\'utilisateur :', error);
      }
    );
  }
  
  
  getNftsForUser(id : number) {
    this.nftService.getNftsForUser(id).subscribe(nftListResult => {
      this.nftList = nftListResult;
        // console.table(this.nftList);
      });
  }

  deleteNftById(id: number, index: number) {
    this.nftService.deleteNftById(id).subscribe(resultatDelete => {
      this.nftList.splice(index,1);
      // console.log(this.nftList);
    });
  }

  confirmDeleteNft(id: number, index: number): void {
    const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer cet élément ? Cela sera définitif !!');
    if (confirmation) {
      this.deleteNftById(id, index);
    }
  }

  totalPriceNft(): number {
    let total = 0;
    for (const nft of this.nftList) {
      total += nft.price;
    }
    console.log(total);
    return total;
  }


  getYesterdayPriceEth() {
    this.ethService.getYesterdayPriceEth().subscribe(ethResultYesterday => {
      this.ethYesterdayPrice = ethResultYesterday;
      });
  }

  /////CHART
  

}
