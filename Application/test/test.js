QUnit.module("Groupe Nom");

QUnit.test('test de la regex de nom', assert => {
        assert.true(controlInputText("mp"));
      });
QUnit.test('test de la regex de nom', assert => {
        assert.false(controlInputText("i"));
});

QUnit.module("Groupe Birth")
 
QUnit.test('Test true de la rgex input date of birth', asserts => {
        asserts.true(controlInputBirth("28/10/1991"));
})

QUnit.test('test false de la regex date of birth', assert => {
        assert.false(controlInputBirth("i"));
});

QUnit.test('test false de la regex date of birth', assert => {
        assert.false(controlInputBirth("28101991"));
});
