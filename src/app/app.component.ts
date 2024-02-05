// app.component.ts
import { Component, OnInit,ViewChild } from '@angular/core';
import { AppService } from './app.service';
declare  var jQuery:  any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  @ViewChild('closebutton') closebutton!:any;
  @ViewChild('closesuccess') closesuccess!:any;

  constructor(private appService: AppService) {}

  title = 'angular-project';
  newName: string | undefined;
  selectedRowIndex: any | undefined;
  datas: any;
  searchText:any
  filteredData:any

  ngOnInit(): void {
    this.fetchData(); // Corrected method name
  }


  fetchData() {
    this.appService.Alldata().subscribe(
      (res) => {
        this.datas = res;
        this.filteredData = res;
        console.log(res);
      }
    );
  }



page: number = 1;
count: number = 0;
tableSize: number = 10;
tableSizes: any = [3, 6, 9, 12];
onTableDataChange(event: any) {
    this.page = event;
    this.ngOnInit();
  }
onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.ngOnInit();
}

paginatedData: any;
onSearch() {
  this.filteredData = this.datas.filter((item: any) =>
    item.name.toLowerCase().includes(this.searchText.toLowerCase())
  );
  this.count = this.filteredData.length;
  this.page = 1;
  this.updatePaginatedData();
}

updatePaginatedData() {
  const startIndex = (this.page - 1) * this.tableSize;
  const endIndex = startIndex + this.tableSize;
  this.paginatedData = this.filteredData.slice(startIndex, endIndex);
}

successModal(){ 
  (function ($) {
    $('#successModal').modal('show');
  })(jQuery);
};

confermation(){
  this.closebutton.nativeElement.click();
  this.closesuccess.nativeElement.click();

}
}
