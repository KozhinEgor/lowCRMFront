import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";


@Injectable({ providedIn: 'root' })
export class MessageSink  {

  private snackBarConfigForLevel(level: "REGULAR" | "WARNING" | "ERROR"): any {
    return {
      horizontalPosition: "left",
      verticalPosition: "bottom",
      duration: 6000,
      panelClass: level === "REGULAR"
        ? "snackbar-regular"
        : level === "WARNING"
          ? "snackbar-warning"
          : "snackbar-error"
    }
  }

  private consoleWrite(level: "REGULAR" | "WARNING" | "ERROR", message: string) {
    switch (level) {
      case "REGULAR":
        console.log(message);
        break;
      case "WARNING":
        console.warn(message);
        break;
      case "ERROR":
        console.error(message);
        break;
    }
  }

  constructor(private snackBar: MatSnackBar) {
  }

  write$(level: "REGULAR" | "WARNING" | "ERROR", message: string): Observable<void> {
    return new Observable<void>((subscriber) => {
      this.consoleWrite(level, message);
      this.snackBar.open(message, "Закрыть", this.snackBarConfigForLevel(level));
      subscriber.complete();
    })
  }
}
