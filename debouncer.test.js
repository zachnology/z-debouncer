const debouncer = require('./debouncer');

test('Three requests in 1 second only fire once', done => {
    let scopedVariable = 1;

    function callback() {
        try {
            expect(scopedVariable).toBe(2);
            done();
        } catch (error) {
            done(error);
        }
        }

    function testFunc() { scopedVariable++; }

    let debounce = debouncer.create(1000);

    debounce.add(testFunc);
    debounce.add(testFunc);
    debounce.add(function() {
        testFunc();
        callback();
    });
});

test('Three requests in 1 second only fire once with no param', done => {
    let scopedVariable = 1;

    function callback() {
        try {
            expect(scopedVariable).toBe(2);
            done();
        } catch (error) {
            done(error);
        }
        }

    function testFunc() { scopedVariable++; }

    let debounce = debouncer.create();

    debounce.add(testFunc);
    debounce.add(testFunc);
    debounce.add(function() {
        testFunc();
        callback();
    });
});

test('Multiple instances do not cause scope pollution', done => {
    let scopedVariable = 1;
    let scopedVariable2 = 1;
    let scopedVariable3 = 1;

    function callback() {
        try {
            expect(scopedVariable).toBe(2);
            done();
        } catch (error) {
            done(error);
        }
        }

    function testFunc() { scopedVariable++; }
    function testFunc2() { scopedVariable2++; }
    function testFunc3() { scopedVariable3++; }

    let debounce = debouncer.create();
    let debounce2 = debouncer.create();
    let debounce3 = debouncer.create();

    debounce.add(testFunc);
    debounce.add(function() {
        testFunc();
        callback();
    });

    debounce2.add(testFunc2);
    debounce3.add(testFunc3);
});