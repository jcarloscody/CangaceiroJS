class Projeto {
    projectTemplate: HTMLTemplateElement;
    appDiv: HTMLDivElement;
    element: HTMLFormElement;


    constructor() {
        this.projectTemplate = document.getElementById('project-input')! as HTMLTemplateElement;
        this.appDiv = document.getElementById('app')! as HTMLDivElement;

        const importNodeFirstElementChild = document.importNode(this.projectTemplate.content, true).firstElementChild
        this.element = importNodeFirstElementChild! as HTMLFormElement;
        this.element.querySelector
        this.attach()
    }

    attach (){
        this.appDiv.insertAdjacentElement("afterbegin",this.element);
    }
}


let project = new Projeto()