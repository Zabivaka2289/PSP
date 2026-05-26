import { HomePage } from "./pages/home/index.js";
import { CalculatorPage } from "./pages/calculator/index.js";
import { AboutPage } from "./pages/about/index.js";
import { AUPage } from "./pages/au/index.js";

const root = document.getElementById('root');

class App {
    constructor() {
        this.currentPage = null;
        this.initNavigation();
        // По умолчанию показываем HomePage (заметки)
        this.showHome();
    }

    showHome() {
        this.currentPage = new HomePage(root);
        this.currentPage.render();
    }

    showCalculator() {
        this.currentPage = new CalculatorPage(root);
        this.currentPage.render();
    }

    showAbout() {
        this.currentPage = new AboutPage(root);
        this.currentPage.render();
    }

    showAU() {
        this.currentPage = new AUPage(root);
        this.currentPage.render();
    }

    initNavigation() {
        const logo = document.getElementById('logo');
        const subCalc = document.getElementById('sub-calc');
        const subAbout = document.getElementById('sub-about');
        const subAu = document.getElementById('sub-au');
        const tabView = document.getElementById('tab-view');

        logo.addEventListener('click', () => this.showHome());
        subCalc.addEventListener('click', () => this.showCalculator());
        subAbout.addEventListener('click', () => this.showAbout());
        subAu.addEventListener('click', () => this.showAU());

        // Переключение градиента (как в оригинале)
        let gradientIndex = 0;
        tabView.addEventListener('click', () => {
            gradientIndex = 1 - gradientIndex;
            if (gradientIndex === 1) document.body.classList.add('gradient-alt');
            else document.body.classList.remove('gradient-alt');
        });
    }
}

const app = new App();