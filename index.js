function imageViewModal(event) {
    const image = event.currentTarget

    const image_to_append = image.cloneNode(true)
    image_to_append.title = ""

    const closeIcon = makeCloseIcon()

    const modal = document.createElement("dialog")
    modal.append(image_to_append)

    modal.append(closeIcon)

    document.body.append(modal)
    modal.show()

    closeIcon.addEventListener("click", () => modal.remove())
}

function makeCloseIcon(params) {
    const svg_content = `
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.7678 15L24.6337 7.13375C25.1219 6.64562 25.1219 5.85406 24.6337 5.36625C24.1456 4.87812 23.3544 4.87812 22.8662 5.36625L15 13.2322L7.13406 5.36625C6.64593 4.87812 5.85437 4.87812 5.36625 5.36625C4.87812 5.85437 4.87812 6.64593 5.36625 7.13375L13.2325 15L5.36625 22.8662C4.87812 23.3544 4.87812 24.1459 5.36625 24.6337C5.61031 24.8778 5.93031 25 6.25 25C6.56968 25 6.89 24.8778 7.13406 24.6337L15 16.7678L22.8662 24.6337C23.1103 24.8778 23.4303 25 23.75 25C24.0697 25 24.39 24.8778 24.6337 24.6337C25.1219 24.1456 25.1219 23.3541 24.6337 22.8662L16.7678 15Z" fill="#CCCCCC"/>
    </svg>`

    const wrapper = document.createElement("div")
    wrapper.innerHTML = svg_content
    wrapper.classList.add("close-icon")
    wrapper.title = "Fechar"

    return wrapper
}

const images = document.querySelectorAll("details>img")
images.forEach(image => image.addEventListener("click", imageViewModal))

function navigate(event) {
    const target = event.currentTarget

    const href = target.dataset.href

    if (href) {
        const details = document.querySelector(`#${href}`)
        details.open = true

        window.scrollTo({
            top: details.offsetTop,
            behavior: "smooth"
        })
    }
}

const nav_links = document.querySelectorAll("nav ul li")

nav_links.forEach(link => link.addEventListener("click", navigate))