import { $ } from '../common/variables';
import { fetchData } from './fetchData';

export const modalToggle = () => {
    const modalHeaderTitle = document.querySelector('.modal-container-title h1')
    const modalBodyTextWrapper = document.querySelector('.modal-paragraph-wrapper')
    const modalBodyTitle = document.querySelector('.modal-body-title')

    const displayProjectTitle = (event) => {
        const dataBtn = event.target.dataset.title;

        $(modalBodyTextWrapper).empty()
        modalHeaderTitle.textContent = ""
        modalBodyTitle.textContent = ""

        if(dataBtn) {
            modalHeaderTitle.textContent = `${dataBtn}`
        }

      const keys = ['id', 'description', 'goal']
      fetchData(event.target.dataset.id, '/assets/data/projects.json', '.modal-paragraph-wrapper', 'p', keys)

    }

    const openModal = (e) => {
        document.querySelector('.modal').classList.toggle('modal-opened');
        document.querySelector('body').classList.toggle('has-modal');
        if(e.target.dataset.typebtn === 'project-btn') {
            console.log('bouton trouvé slide', e.target.dataset.typebtn)
            document.querySelectorAll('.projects-section .swiper__inner-btn button').forEach(function (btn) {
                displayProjectTitle(e)
            })
        } else if(e.target.dataset.typebtn === 'team-btn') {
            document.querySelectorAll('.box').forEach(function (btn) {
                displayProjectTitle(e)
            })
        } else {
            $(modalBodyTextWrapper).empty()
            modalHeaderTitle.textContent = ""
            modalBodyTitle.textContent = ""
        }
    }

    document.querySelectorAll('.modal-close-btn, .modal-open-btn').forEach(function (element) {
        element.removeEventListener('click', openModal);
        element.addEventListener('click', openModal);
    });
};
