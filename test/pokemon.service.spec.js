const assert = require('chai').assert;
//import {Pokemon} from "../src/entity/Pokemon"
import {getPokemon} from "../src/providers/pokemon.service"


describe('Services', function(){

    describe('getPokemon', function(){
        it('Pokemon is as expected',function(){
            assert.typeOf(getPokemon,'{string, number,string,string}')
        });
    });
    
})