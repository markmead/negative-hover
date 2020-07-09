export default function NegativeHover(data) {
  this.name = data.name || 'default'
  this.inactiveClass = data.inactiveClass ? data.inactiveClass : 'inactive-hover-target'
}

NegativeHover.prototype.init = function () {
  const group = document.querySelector(`[data-negative-hover='${this.name}']`)
  const targets = [...group.querySelectorAll(`[data-negative-hover-target='${this.name}']`)]
  const self = this

  targets.forEach(function (target) {
    let active

    target.addEventListener('mouseover', function () {
      active = target

      targets.forEach(function (target) {
        if (active != target) target.classList.add(self.inactiveClass)
      })
    })

    target.addEventListener('mouseleave', function () {
      targets.forEach((target) => target.classList.remove(self.inactiveClass))
    })
  })
}
