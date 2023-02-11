import {ChangeDetectorRef, Component} from '@angular/core';
import {BehaviorSubject, Subscription} from "rxjs";
import {CompteepargneService} from "../../../services/compteepargne.service";
import {FormationService} from "../../../services/formation.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-epargnemensuel',
  templateUrl: './epargnemensuel.component.html',
})
export class EpargnemensuelComponent {

  capitalinitial:any;
  versementmensuel:any;
  rendementannuel:any;
  dureeepargne:any;
  capitaltotal:any;

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  private unsubscribe: Subscription[] = [];

  constructor(private cdr: ChangeDetectorRef, private compteepargneService: CompteepargneService, private modalService: NgbModal) {
    const loadingSubscr = this.isLoading$
      .asObservable()
      .subscribe((res) => (this.isLoading = res));
    this.unsubscribe.push(loadingSubscr);
  }

  ngOnInit(): void {}

  saveSettings() {
    this.isLoading$.next(true);
    setTimeout(() => {
      this.isLoading$.next(false);
      this.cdr.detectChanges();
    }, 1500);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }


  SimulateurEpargneMensuel() {
    console.log("capitalinitial " + this.capitalinitial);

    this.compteepargneService.SimulateurEpargneMensuel(this.capitalinitial, this.versementmensuel, this.rendementannuel, this.dureeepargne).subscribe(res=>this.capitaltotal=res);

  }

}
