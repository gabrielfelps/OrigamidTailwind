export default class Today {
  constructor(day) {
    this.day = day;
  }

  setDay(today) {
    const weekDay = [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sabado',
    ];

    const weekDayName = weekDay[today];
    this.day.innerText = weekDayName;
  }

  getDay() {
    const today = new Date().getDay();
    this.setDay(today);
  }

  init() {
    this.getDay();
  }
}
