import { Data } from '../src/idata';

export default class NegativeHover {
  parentElement: HTMLElement | null;
  targetElements!: Array<HTMLElement>;
  inactiveClass: string[] | string;

  constructor(private parent: string, private data: Data) {
    this.parentElement = document.querySelector(this.parent);
    this.inactiveClass = this.data.css;

    if (this.parentElement) {
      this.targetElements = [
        ...this.parentElement.querySelectorAll(this.data.target)
      ] as Array<HTMLElement>;
    }
  }

  private control(): void {
    if (this.targetElements) {
      for (const targetElement of this.targetElements) {
        targetElement.addEventListener("mouseover", () =>
          this.hover(targetElement)
        );

        targetElement.addEventListener("mouseleave", () => this.remove());
      }
    }
  }

  private hover(activeElement: HTMLElement): void {
    if (this.targetElements && activeElement) {
      for (const targetElement of this.targetElements) {
        if (targetElement !== activeElement) {
          this.addClass(targetElement);
        }
      }
    }
  }

  private remove(): void {
    if (this.targetElements) {
      for (const targetElement of this.targetElements) {
        this.removeClass(targetElement);
      }
    }
  }

  private removeClass(currentElement: HTMLElement): void {
    if (this.inactiveClass instanceof Array) {
      for (const currentClass of this.inactiveClass) {
        currentElement.classList.remove(currentClass);
      }
    } else {
      currentElement.classList.remove(this.inactiveClass);
    }
  }

  private addClass(currentElement: HTMLElement): void {
    if (this.inactiveClass instanceof Array) {
      for (const currentClass of this.inactiveClass) {
        currentElement.classList.add(currentClass);
      }
    } else {
      currentElement.classList.add(this.inactiveClass);
    }
  }

  public init(): void {
    this.control();
  }
}