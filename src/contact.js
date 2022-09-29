import './style.css';

export default function contactInfo() {
    const pageContent = document.getElementById('content');

    const contactHeadline = document.createElement('h2');
    contactHeadline.textContent = 'Local hours';
    pageContent.appendChild(contactHeadline);

    const calenderDiv = document.createElement('div');
    calenderDiv.setAttribute('id', 'store-hours');
    pageContent.appendChild(calenderDiv);

    const dateList = document.createElement('ul');
    dateList.setAttribute('id', 'weekly-times');
    calenderDiv.appendChild(dateList);

    const timeWeekDay = document.createElement('li');
    timeWeekDay.textContent = 'Closed all weekdays';
    dateList.appendChild(timeWeekDay);

    const timeSaturday = document.createElement('li');
    timeSaturday.textContent = 'Saturday: 11am - 5pm';
    dateList.appendChild(timeSaturday);

    const timeSunday = document.createElement('li');
    timeSunday.textContent = 'Sunday: 11am - 5pm';
    dateList.appendChild(timeSunday);

    const address = document.createElement('div');
    address.textContent = 'Located at 420 Smokers Ave.';
    pageContent.appendChild(address);
};