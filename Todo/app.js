function displayGeorgiaDateTime() {
  const now = new Date();

  const georgiaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Tbilisi" }));

  const dateFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', dateFormatOptions).format(georgiaTime);

  // Format the time
  const timeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false, 
    timeZoneName: 'short'
  };

  const formattedTime = new Intl.DateTimeFormat('en-US', timeFormatOptions).format(georgiaTime);

  document.querySelector('.georgian-time').innerHTML = `<p>Date: ${formattedDate}</p><p>Time: ${formattedTime}</p>`;
}

setInterval(displayGeorgiaDateTime, 1000);

displayGeorgiaDateTime();


const add = document.querySelector('.addicon');
const list = document.querySelector('.todolist');

add.addEventListener('click', () => {
  const note = document.querySelector('#note').value;
  const currentDate = new Date().toLocaleString();

  const listItem = document.createElement('div');
  listItem.classList.add('listcontainer');

  const content = `
      <div>
        <h2>${note}</h2>
        <p>${currentDate}</p>
      </div>
      <div class="imglistcontainer">
        <img class="circle" src="./assets/circle.svg" alt="Check">
        <img class="delete" src="./assets/delete.svg" alt="Delete">
      </div>
    `;
  listItem.innerHTML = content;

  list.appendChild(listItem);
  console.log(note);
});

list.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('circle')) {
    if (target.src.includes('circle')) {
      target.src = './assets/checkbox.svg';
      const h2 = target.closest('.listcontainer').querySelector('h2');
      h2.style.textDecoration = 'line-through';
    } else {
      target.src = './assets/circle.svg';
      const h2 = target.closest('.listcontainer').querySelector('h2');
      h2.style.textDecoration = 'none';
    }
  } else if (target.classList.contains('delete')) {
    const listItem = target.closest('.listcontainer');
    if (listItem) {
      listItem.remove();
    }
  }
});

