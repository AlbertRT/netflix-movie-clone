// season selector
const seasonSelector = document.querySelector(".season-selection")
const season1 = document.querySelector("#season-1")
const season2 = document.querySelector("#season-2")

seasonSelector.addEventListener("change", () => {
    if (seasonSelector.value == 0) {
        season2.classList.remove("active")
        season1.classList.add("active")
    } else if (seasonSelector.value == 1) {
        season1.classList.remove("active")
        season2.classList.add("active")
    }
})

// layout system
const defaultViewButton = document.querySelector(".layout-selector .grid-1")
const smallViewButton = document.querySelector(".layout-selector .grid-2")
const seasonEpisodeListContainer = document.querySelectorAll(".season-episode-list-container")

defaultViewButton.addEventListener("click", () => {
    // ! remove the active class on smallViewButton
    smallViewButton.classList.remove("active")
    defaultViewButton.classList.add("active")

    seasonEpisodeListContainer.forEach(episodeList => {
        episodeList.classList.remove("view-small")
        episodeList.classList.add("view-default")
    })
})
smallViewButton.addEventListener("click", () => {
    // ! remove the active class on defaultViewButton
    defaultViewButton.classList.remove("active")
    smallViewButton.classList.add("active")

    seasonEpisodeListContainer.forEach(episodeList => {
        episodeList.classList.remove("view-default")
        episodeList.classList.add("view-small")
    })
})