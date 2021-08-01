QUnit.test('test de la regex de nom', assert => {
        assert.true(controlInputText("mp"));
      });
QUnit.test('test de la regex de nom', assert => {
        assert.false(controlInputText("i"));
});
 
QUnit.test('Test de la rgex input mobile', asserts => {
        asserts.true(controlInputBirth("28/10/1991"));
})