function game(){
    
}
let player=document.querySelector(".playerScore");
let computer=document.querySelector(".computerScore");
let board=document.querySelector(".playerScoreBoard");
let computerBoard=document.querySelector(".computerScoreBoard");
console.log('computerBoard element:', computerBoard);
player.addEventListener("click",()=>{
    const container = document.createElement('div');
    container.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="player" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`;
    const svg = container.firstChild;
    svg.classList.add("animation");
    board.appendChild(container)
})
computer.addEventListener("click",()=>{
    const computerContainer = document.createElement('div');
    computerContainer.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" class="computer" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-frown"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`;
    const computerSvg = computerContainer.firstChild;
    computerSvg.classList.add("animation");
    computerBoard.appendChild(computerContainer)
})