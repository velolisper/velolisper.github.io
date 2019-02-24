// WORLD.JS

function populateWorld() {

}

function activeWorld() {
    // this function should provide a space for the world and all creatures within it to do their thing
    let isActive = true;
    let currentTurn = 0;
    let ticker = function() {
        currentTurn+=1;

    }

    while(isActive == true) {
        // game loop here

    }
}

var animal = {
    // defining animal traits
    create: function () {
        let animal = Object.create(this);
        return animal;
    }
}


const originalBeasts = ['Dodo', 'Raptor', 'Triceratops', 'TimberRattler', 'Parasaur', 'Meganeura', 'Dilophosaur', 'Carnotaurus', 'Stegosaur', 'Brontosaur', 'Paraceratherium', 'Trilobyte', 'Myrmidons', 'Rex', 'Allosaurus', 'Ankylosaur', 'Microraptor', 'Troodon', 'Compsagnathus', 'Dimorphodon', 'Dimetrodon', 'Spinosaurus', 'Carbonemys', 'Deinotherium', 'Anaconda', 'Prionosuchus', 'Achinata', 'Bear', 'Equus', 'Beaver', 'Pteranodon', 'Tapejara', 'Quetzelcoatlus', 'Argentavis', 'Pelagornis', 'Hesperornis', 'Icthyornis', 'Archeoptyrex', 'Mammoth', 'WRhino', 'Sabertooth', 'Baryonyx', 'Bat', 'Spider', 'Centipede', 'Mesopithecus', 'Paranthropus', 'Iguanadon', 'Kentrosaurus', 'Diplodocus', 'Glyptodon', 'Chalcotherium', 'Megatherium', 'Ichtyosaur', 'Plesiosaur', 'Coelecanth', 'Salmon', 'Piranha', 'Cnideria', 'Eel', 'Mosasaur', 'Eurypterid', 'GSquid', 'Lanturnfish', 'Basilosaurus', 'Megalosaurus', 'Elk', 'Giganotosaurus', 'Titanosaurus', 'Thylacoleo', 'Direwolf', 'Hyenadont', 'Enteledont', 'Bees', 'Leeches', 'Megalodon', 'Otter', 'Penguin', 'Phorusraccus', 'Sarcosuchus', 'SeaKrait', 'Andrewsarchus', 'Therizinosaur', 'Rorqual', 'Cachalot', 'Macrauchenia', 'Capybara', 'Bison', 'Orca', 'Yutyrannus']

const originalPlants = ['Kelp', 'Teosinte', 'Pine', 'Cattail', 'Maple', 'Apple', 'Fern', 'Seagrass', 'Grape', 'Ivy', 'Sumac', 'Yew', 'Oak', 'Hemp', 'Barley', 'Rice', 'Nightshade', 'Rosemary', 'Deathcap', 'Skyshroom', 'Steakshroom', 'Lavender', 'Pitcher', 'GreatPitcher']