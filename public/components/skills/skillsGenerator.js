export default (container, skillsList) => {
    const skillsListContainer = document.getElementById(container);

    for(let skill of skillsList) {
        const skillComponent = document.createElement("li");
        skillComponent.innerHTML = skill;

        skillsListContainer.appendChild(skillComponent);
    }
}