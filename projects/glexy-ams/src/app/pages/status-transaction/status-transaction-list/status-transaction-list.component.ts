import { Component, OnDestroy, OnInit } from '@angular/core';
import { StatusTransactionService } from '@services/status-transaction/status-transaction.service';
import { StatusTransaction } from '@models/status-transaction';
import { Subscription } from 'rxjs';
import { DeleteResDto } from '@dto/all-respons/delete-res-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status-transaction-list',
  templateUrl: './status-transaction-list.component.html',
  styleUrls: ['./status-transaction-list.component.css']
})
export class StatusTransactionListComponent implements OnInit, OnDestroy {

  listDataStatusTrx: StatusTransaction[] = []

  private unSubs?: Subscription
  private delUnSubs?: Subscription

  resDelete: DeleteResDto = new DeleteResDto()

  constructor(private statusTransactionService: StatusTransactionService, private router: Router) { }

  ngOnInit(): void {
    this.unSubs = this.statusTransactionService.getAll()?.subscribe(res => {
      this.listDataStatusTrx = res
    })
  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
    this.delUnSubs?.unsubscribe()
  }

  onUpdate(id: string): void {
    this.router.navigateByUrl(`/glexy/status-trx/${id}`)
  }

  onDelete(id: string) :void {
    this.unSubs = this.statusTransactionService.getById(id)?.subscribe(result => {
      if (confirm("Are you sure to delete " + result.nameStatusTr)) {
        this.delUnSubs = this.statusTransactionService.deleteById(id)?.subscribe(result => {
          this.resDelete = result
          window.location.reload();
        })
      }
    })
  }
}
