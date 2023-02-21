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

function makeCloseIcon() {
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

function makeLinkIcon() {
    const svg_content = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.01063 5.92887C8.85753 5.83044 8.679 5.80374 8.51406 5.8405C8.35087 5.8768 8.20126 5.97524 8.1037 6.12706C8.0057 6.27974 7.97903 6.45737 8.01535 6.62144C8.0512 6.7855 8.14965 6.93597 8.30189 7.03356C8.93496 7.43913 9.31253 8.12776 9.31253 8.875C9.31253 9.4595 9.08503 10.0086 8.67203 10.4216L6.04703 13.0466C5.63359 13.46 5.08409 13.6875 4.50003 13.6875C3.29383 13.6875 2.31253 12.7062 2.31253 11.5C2.31253 10.9155 2.54003 10.3664 2.95303 9.95344L4.19815 8.70789C4.32939 8.57665 4.39329 8.40383 4.39065 8.23189C4.38759 8.06783 4.32372 7.90506 4.19815 7.77994C4.06996 7.65174 3.90196 7.58744 3.73442 7.58744C3.56642 7.58744 3.39842 7.6513 3.27068 7.77994L2.02554 9.0255C1.364 9.68613 1 10.5651 1 11.5C1 13.4298 2.5702 15 4.5 15C5.43494 15 6.31387 14.636 6.97494 13.9745L9.59994 11.3495C10.261 10.6893 10.625 9.80994 10.625 8.875C10.625 7.67844 10.0217 6.57726 9.01063 5.92887ZM11.5 1C10.5651 1 9.68613 1.364 9.02506 2.0255L6.40006 4.6505C5.739 5.31067 5.375 6.19006 5.375 7.12456C5.375 8.32113 5.97833 9.42274 6.98937 10.0711C7.1425 10.1691 7.321 10.1958 7.48594 10.1591C7.64911 10.1232 7.79874 10.0248 7.8963 9.87294C7.9943 9.71983 8.021 9.5422 7.98467 9.37813C7.9488 9.21406 7.85037 9.06356 7.69811 8.96644C7.06547 8.56044 6.68747 7.8718 6.68747 7.12456C6.68747 6.54006 6.91497 5.991 7.32797 5.578L9.953 2.953C10.3664 2.54 10.9159 2.3125 11.5 2.3125C12.7062 2.3125 13.6875 3.2938 13.6875 4.49956C13.6875 5.08406 13.46 5.63313 13.047 6.04613L11.8019 7.29126C11.6706 7.4225 11.6067 7.59533 11.6094 7.76726C11.6124 7.93133 11.6763 8.09409 11.8019 8.2192C11.9301 8.34739 12.0981 8.41126 12.2661 8.41126C12.4341 8.41126 12.6021 8.34739 12.7298 8.2192L13.9749 6.97363C14.636 6.31387 15 5.4345 15 4.49956C15 2.5702 13.4298 1 11.5 1Z" fill="black"/>
    </svg>
    `

    const wrapper = document.createElement("div")
    wrapper.innerHTML = svg_content

    return wrapper
}

const images = document.querySelectorAll("details>img")
images.forEach(image => image.addEventListener("click", imageViewModal))

function navigate(target) {
    if (target) {
        const detail = target
        detail.open = true

        window.scrollTo({
            top: detail.offsetTop,
            behavior: "smooth"
        })

        // const details = document.querySelectorAll("details.topic")
        // details.forEach(detail => detail.style.display = "none")

        // detail.style.display = ""
    }
}

function generate_topics() {
    const details_topics = document.querySelectorAll("details.topic")

    details_topics.forEach(detail => {
        const summary = detail.querySelector("summary")
        const title = summary.textContent

        const li = document.createElement("li")
        li.innerHTML = `<span>${title}</spam>`
        li.appendChild(makeLinkIcon())

        li.addEventListener("click", () => navigate(detail))

        const nav = document.querySelector("nav ul")
        nav.append(li)
    })
}

generate_topics()

// const nav_links = document.querySelectorAll("nav ul li")

// nav_links.forEach(link => link.addEventListener("click", navigate))