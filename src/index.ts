import { Data } from '../src/idata';

export default class NegativeHover {
  parentElement: HTMLElement | null;
  targetElements: Array<HTMLElement>;
  inactiveClass: string;

  constructor(private parent: string, private data: Data) {
    this.parentElement = document.querySelector(this.parent);
    this.targetElements = [
      ...document.querySelectorAll(this.data.target)
    ] as Array<HTMLElement>;
    this.inactiveClass = this.data.css;
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
          targetElement.classList.add(this.inactiveClass);
        }
      }
    }
  }

  private remove(): void {
    if (this.targetElements) {
      for (const targetElement of this.targetElements) {
        targetElement.classList.remove(this.inactiveClass);
      }
    }
  }

  public init(): void {
    this.control();
  }
}