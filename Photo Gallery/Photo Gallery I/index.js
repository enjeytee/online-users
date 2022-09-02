async function getPhotos() {
    let response = await fetch("photos.json")
    let photos = await response.json()
    return photos
}

getPhotos().then(photos => {
    let myPhotosHtml = photos.map(photo => {
        return `<img class="my-photo" src="https://picsum.photos/id/${photo.id}/100/100" alt="%{photo.title}"/>`
    }).join('')
    document.body.innerHTML = `<div class="my-photos">${myPhotosHtml}</div>`
})
