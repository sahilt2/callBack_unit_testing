'use strict';

const search = require('../carStorageFileCallback');

describe('testing callback',()=>{
    test('search with licence "ABC-1"',done=>{
        function cb(data){
            try{
                expect(data).toEqual([
                    {
                        "model":"Bored T-model","licence":"ABC-1"
                    }
                ]);
                done();
            }
            catch(error){
                done(error);
            }
        }
        search(cb,'licence','ABC-1');
    });
});

describe('testing with testEach', () => {
    const testValues=[
        // key     value,expected
        ['licence','XYZ',[]],
        ['model','Bored T-model',[
            {
                "model":"Bored T-model","licence":"ABC-1"
            },
            {
                "model":"Bored T-model","licence":"GTF-10"
            },
        ]]
    ];
    test.each(testValues)('%s,%s',(key,value,expected,done)=>{
        function cb(data){
            try{
                expect(data).toEqual(expected);
                done();
            }
            catch(error){
                done(error);
            }
        }
        search(cb,key,value);
    })
});
