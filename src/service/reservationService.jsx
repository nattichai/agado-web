export class reservationService {
  static getReservations = () => {
    return JSON.parse(localStorage.getItem("reservations"));
  }

  static getReservationOf = (uid) => {
    let reservations = this.getReservations();
    reservations = reservations.filter(reservation => "" + reservation.uid === "" + uid );
    return reservations;
  }

  static createReservation = (reservation) => {
    let reservations = this.getReservations();
    reservation.rid = reservations.length + 1;
    reservations.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(reservations));
    return true;
  }

  static editReservation = (rid, editedReservation) => {
    let reservations = this.getReservations();
    for (let i = 0; i < reservations.length; i++) {
      if ("" + rid === "" + reservations[i].rid) {
        reservations[i] = {
          ...reservations[i],
          ...editedReservation
        }
        localStorage.setItem("reservations", JSON.stringify(reservations));
        return true;
      }
    }
    return false;
  }

  static deleteReservation = (rid) => {
    let reservations = this.getReservations();
    reservations = reservations.filter(reservation => "" + reservation.rid !== "" + rid);
    localStorage.setItem("reservations", JSON.stringify(reservations));
    return true;
  }
}