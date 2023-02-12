let { Repository } = require('./solution');
let { expect } = require('chai');

describe('Repository', () => {
    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };

    let entity = {
        name: "Pesho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    };
    let secondEntity = {
        name: "Gosho",
        age: 22,
        birthday: new Date(1998, 0, 7)
    }
    describe('Initialization', () => {
        it("Should add props property on init", () => {
            let repository = new Repository(properties);
            expect(repository).to.have.property('props');
            expect(repository.props).to.deep.equal(properties);
            expect(typeof repository.props).to.equal('object');
        });

        it("Should have property data on init", () => {
            let repository = new Repository(properties);
            expect(repository).to.have.property('data');
            expect(typeof repository.data).is.equal('object');
        });
    
        describe('add', ()=> {
            it('Add with valid input', ()=>{
                let valid = new Repository(properties);
                expect(valid).to.have.property('props');
                expect(valid.props).to.deep.equal(properties);
                expect(typeof valid.props).to.equal('object');
                expect(valid).to.have.property('data');
                expect(typeof valid.data).is.equal('object');
            })
            it ('Add with invalid  or missing input', ()=> {
                let repository = new Repository(properties);
                let missingBirthday = {
                    name: 12,
                    age: 22,
                };
                expect(()=> repository.add(missingBirthday)).to.throw(Error, 'Property birthday is missing from the entity!');
            });
            it('Should return incremented id if valid entity is added', () => {
                let repository = new Repository(properties);
    
                expect(repository.add(entity)).to.equal(0);
                expect(repository.add(entity)).to.equal(1);
            });
            
        })
        
        describe('Get id',()=> {
            it('valid', ()=> {
                let repository = new Repository(properties);
            repository.add(entity);
            repository.add(secondEntity);
            expect(repository.getId(0)).to.deep.equal(entity);
            expect(repository.getId(1)).to.deep.equal(secondEntity);
            
            })
            it ('invalid', ()=> {
                let repository = new Repository(properties);
                repository.add(entity);
                repository.add(secondEntity);
                expect(()=>repository.getId(3)).to.throw(Error,'Entity with id: 3 does not exist!')
            })
        });
        describe('Count', ()=> {
            it ('empty counter',()=> {
                let counter = new Repository(properties);
                expect(counter.count).to.equal(0);
            });
            it ('counter',()=> {
                let repo = new Repository(properties);

                repo.add(entity);
                repo.add(entity);
                expect(repo.count).to.equal(2);
                repo.del(1);
                expect(repo.count).to.equal(1);
                repo.del(0);
                expect(repo.count).to.equal(0);
            })
            
        });
         describe('Update ID',()=> {
            it('Should validate when updating', () => {
                let invalidEntity1 = {
                    age: 22,
                    birthday: new Date(1998, 0, 7)
                };
    
                let invalidEntity2 = {
                    name: "Pesho",
                    birthday: new Date(1998, 0, 7)
                };
    
                let invalidEntity3 = {
                    name: "Pesho",
                    age: 22,
                };
    
                let repo = new Repository(properties);
    
                repo.add(entity);
    
                expect(() => repo.update(0, invalidEntity1)).to.throw(Error, `Property name is missing from the entity!`)
                expect(() => repo.update(0, invalidEntity2)).to.throw(Error, `Property age is missing from the entity!`)
                expect(() => repo.update(0, invalidEntity3)).to.throw(Error, `Property birthday is missing from the entity!`)
            });
             
            it ('valid', ()=> {
                let repository = new Repository(properties);
                repository.add(entity);
                repository.add(secondEntity);
                repository.update(0,secondEntity);
                expect(repository.getId(0)).to.deep.equal(secondEntity);
            })
            it ('invalid', ()=> {
                let repository = new Repository(properties);
                repository.add(entity);
                repository.add(secondEntity);
                expect(()=>repository.update(3,secondEntity)).to.throw(Error, 'Entity with id: 3 does not exist!')
            })
         });
         describe ('Delete ID', ()=> {
            it ('valid',()=>{
                let repository = new Repository(properties);
                repository.add(entity);
                repository.add(secondEntity);
                repository.del(0);
                expect(repository.count).to.equal(1);
            });
            it ('invalid',()=> {
                let repository = new Repository(properties);
                repository.add(entity);
                repository.add(secondEntity);
                expect(()=> repository.del(15)).to.throw(Error,'Entity with id: 15 does not exist!');
            })
         });
        
    });
})