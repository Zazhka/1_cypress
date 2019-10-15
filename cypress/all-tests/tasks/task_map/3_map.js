describe('12.3 Коллекции. Map vs Object.', () => {

    let planetsArray = [
        {planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395},
        {planet: "Venus", radius: 6052, density: 5.24, distance: 0.723},
        {planet: "Earth", radius: 6378, density: 5.52, distance: 1},
        {planet: "Mars", radius: 3396, density: 3.93, distance: 1.53},
        {planet: "Jupiter", radius: 71492, density: 1.33, distance: 5.21},
        {planet: "Saturn", radius: 60268, density: 0.69, distance: 9.551},
        {planet: "Uranus", radius: 25559, density: 1.27, distance: 19.213},
        {planet: "Neptune", radius: 24764, density: 1.64, distance: 30.07}
    ]

    let planetsMap = new Map();

    it('Task 1', () => {
        planetsArray.forEach(element => {
            let key = element.planet;
            delete element.planet;
            let value = element;
            planetsMap.set(key, value);
        })
    })
    
    it('Task 2', () => {
        planetsMap.forEach((value, key) => {
            cy.log(key + ': ' + Object.keys(value).map(objKey => objKey + ':' + value[objKey]).join(', '));
        }) 
    })

    it('Task 3', () => {
        cy.log(JSON.stringify(planetsMap.get('Saturn')));
    })

    it('Task 4', () => {
        cy.log(planetsMap.size);
    })
    
    it('Task 5', () => {
        let planetsSet = new Set(['Mercury', 'Not Mercury']);
        planetsSet.forEach(element => {
            cy.log(element + ': ' + planetsMap.has(element));
        })
    })

    it('Task 6', () => {
        cy.log(planetsMap.delete('Uranus'));
    })

    it('Task 7', () => {
        let newPlanetsMap = new Map();
        newPlanetsMap.set('New Planet', {radius: 123456, density: 9.99, distance: 99.234});
        newPlanetsMap.set('New Planet 2', {radius: 234523, density: 3.23, distance: 235.378});

        let merged = new Map([...planetsMap, ...newPlanetsMap]);
    })

    it('Task 8', () => {
        let planet = {planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395}
        let mercuryMap = new Map()

        for (let key in planet) {
            mercuryMap.set(key, planet[key]);
        }
    })
    
})  