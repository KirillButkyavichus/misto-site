import { Counter } from './counter';

// Находим элемент с фильтром
const filterWindow = document.querySelector('.main-filter__body');

// Находим кнопку фильтра
const filterButton = document.querySelector('.main-filter__label-icon');
const mainFilter = document.querySelector('.main-filter');

// "Навешиваем" обработчик события на кнопку фильтра
if(filterButton){
  filterButton.addEventListener('click', handleFilterButtonClick);
}
// Функция обработчик события для клика по кнопке фильтра
function handleFilterButtonClick() {
  mainFilter.classList.toggle('main-filter_active');
  filterWindow.classList.toggle('main-filter__body_active');
};

const modals = document.querySelectorAll('.modal');
const modalIcons = document.querySelectorAll('.js-modal-btn');
for(const modalIcon of modalIcons) {
  modalIcon.addEventListener('click', handleModalIconClick)
}

for(const modal of modals) {
  modal.addEventListener('click', handleModalCloseClick)
}

function handleModalCloseClick(e){
  const {target,currentTarget}=e;
  if(!target.classList.contains("modal__card-header_close")){
    return;
  } 
  currentTarget.classList.remove('modal_active');
  document.body.classList.remove('hidden');
} 

function handleModalIconClick(e){
  const attributeValue = e.target.getAttribute('data-modal');
  const modal = document.querySelector(attributeValue);
  modal.classList.add('modal_active');
  document.body.classList.add('hidden');
};

const counters = document.querySelectorAll('.js-counter');

for (const counter of counters) {
  new Counter(counter, {
    initialValue: 5,
  });
}
