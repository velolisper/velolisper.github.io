// WORLD.JS

function populateWorld() {

}

function activeWorld() {
    // this function should provide a space for the world and all creatures within it to do their thing
    let isActive = false;
    let currentTurn = 0;
    let ticker = function() {
        currentTurn+=1;

    }

    while(isActive == true) {
        // game loop here
    }

}

const originalCreatures = ['Dodo', 'Raptor', 'Triceratops', 'Parasaur', 'Meganeura', 'Dilophosaur', 'Carnotaurus', 'Stegosaur', 'Brontosaur', 'Paraceratherium', 'Trilobyte', 'Myrmidons', 'Rex', 'Allosaurus', 'Ankylosaur', 'Microraptor', 'Troodon', 'Compsagnathus', 'Dimorphodon', 'Dimetrodon', 'Spinosaurus', 'Carbonemys', 'Phiomia', 'Titanoboa', 'Beelzebufo', 'Achinata', 'Bear', 'Equus', 'Beaver', 'Pteranodon', 'Tapejara', 'Quetzelcoatlus', 'Argentavis', 'Pelagornis', 'Hesperornis', 'Icthyornis', 'Archeoptyrex', 'Mammoth', 'WRhino', 'Sabertooth', 'Baryonyx', 'Bat', 'Spider', 'Centipede', 'Mesopithecus', 'Gigantopithecus', 'Iguanadon', 'Kentrosaurus', 'Diplodocus', 'Glyptodon', 'Chalcotherium', 'Megatherium', 'Ichtyosaur', 'Plesiosaur', 'Coelecanth', 'Salmon', 'Piranha', 'Cnideria', 'Eel', 'Mosasaur', 'Eurypterid', 'GSquid', 'Lanturnfish', 'Basilosaurus', 'Megalosaurus', 'Elk', 'Giganotosaurus', 'Titanosaurus', 'Thylacoleo', 'Direwolf', 'Hyenadont', 'Enteledont', 'Leedsitchys', 'Bees', 'Leeches', 'Megalodon', 'Otter', 'Penguin', 'Phorusraccus', 'Sarcosuchus', 'Kaprosuchus', 'Therizinosaur']

const newCreatures = ['Rorqual', 'Cachalot', 'Macrauchenia', 'Capybara', 'Bison']