export default function NegativeHover(data) {
  this.name = data.name || 'default'
  this.inactiveClass = data.inactiveClass ? data.inactiveClass : 'inactive-group-target'
}

NegativeHover.prototype.init = function () {
  const linkGroup = document.querySelector(`[data-negative-hover=${this.name}`)
  const linkGroupLinks = [...linkGroup.querySelectorAll(`[data-negative-hover-target=${this.name}`)]
  const self = this

  linkGroupLinks.forEach(function (link, index) {
    let activeLink

    link.addEventListener('mouseover', function () {
      activeLink = link

      linkGroupLinks.forEach(function (link) {
        if (activeLink != link) link.classList.add(self.inactiveClass)
      })
    })

    link.addEventListener('mouseleave', function () {
      linkGroupLinks.forEach((link) => link.classList.remove(self.inactiveClass))
    })
  })
}
