'use strict';

const submitBtn = document.querySelector('.btn');
const birthdayDate = document.querySelector('#birthday');
const text = document.querySelector('h1');
const presentDate = new Date();
const presentDay = presentDate.getDate();
const presentMonth = presentDate.getMonth();
const presentYear = presentDate.getFullYear();

const timeLeft = function (date1, date2) {
  const time = Math.floor(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));
  return (text.textContent = `${time} days left for the special date`);
};

submitBtn.addEventListener('click', function () {
  const fullDate = new Date(birthdayDate.value);
  const date = fullDate.getDate();
  const month = fullDate.getMonth();
  const nextBirthday =
    (date < presentDay && month <= presentMonth) ||
    (date >= presentDay && month < presentMonth)
      ? new Date(presentYear + 1, month, date, 0, 0)
      : new Date(presentYear, month, date, 0, 0);

  console.log(timeLeft(presentDate, nextBirthday));
});
