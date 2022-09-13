let energyConsumption = document.getElementById('energy')
let batteryCapacity = document.getElementById('capacity')
let solarGeneration = document.getElementById('solar')
let costPerUnit = document.getElementById('cost');
let energyNeeded;
let costPer;
let hours = 8;
let calculatedEnergy = document.querySelector('.energies')
let calculatedCost = document.querySelector('.per-unit')

let form = document.querySelector('.row');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let just = Number(solarGeneration.value) + Number(batteryCapacity.value);
    energyNeeded = Number(energyConsumption.value) - just;
    costPer = Number(costPerUnit.value) * hours;
    calculatedEnergy.textContent = energyNeeded;
    calculatedCost.textContent = costPer;
})
