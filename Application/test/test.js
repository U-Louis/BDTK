
QUnit.module("Groupe Birth")
 
        QUnit.test('Test true de la rgex input date of birth', assert => {
                assert.true(controlInputBirth("28/10/1991"));
        })

        QUnit.test('Test false du format  03/10/19991 de la rgex input date of birth', assert => {
                assert.false(controlInputBirth("03/10/19991"));
        })

        QUnit.test('Test false du format 2/10/1991 de la rgex input date of birth', assert => {
                assert.false(controlInputBirth("2/10/1991"));
        })

        QUnit.test('Test false du format 32/10/1991 de la rgex input date of birth', assert => {
                assert.false(controlInputBirth("32/10/1991"));
        })



        QUnit.test('test false  i de la regex date of birth', assert => {
                assert.false(controlInputBirth("i"));
        });

        QUnit.test('test false 28101991 de la regex date of birth', assert => {
                assert.false(controlInputBirth("28101991"));
        });



QUnit.module("Groupe adress");
        QUnit.test('test vrai de la regex de l\' adresse', assert => {
                assert.true(controlInputAddress("35 rue des exemples"));
        });

      QUnit.test('test false d\' un nombre la regex de l\'adresse', assert => {
        assert.false(controlInputAddress("75000"));
      });

      QUnit.test('test false d\'une seule chaine de la regex du code postale', assert => {
        assert.false(controlInputAddress("rue"));
      });

      

QUnit.module("Groupe Postal code");

        QUnit.test('test vrai de la regex du code postale', assert => {
                assert.true(controlInputPostal("75000"));
        });

        QUnit.test('test false chaîne de la regex du code postal', assert => {
                assert.false(controlInputPostal("i"));
        });

        QUnit.test('test false du format CCCCC de la regex code postal', assert => {
                assert.false(controlInputPostal("75 000"));
        });


QUnit.module("Group Mobile Number")

        QUnit.test('test vrai de la regex du numéro mobile avec numéro commençant par 06', assert => {
                assert.true(controlInputNumberMobile("06 00 00 00 00"));
        });

        QUnit.test('test vrai de la regex du numéro mobile avec numéro commençant par 07', assert => {
                assert.true(controlInputNumberMobile("07 00 00 00 00"));
        });

        QUnit.test('test false de la regex du numéro mobile avec numéro commençant par autre chose que 06 ou 07', assert => {
                assert.false(controlInputNumberMobile("02 00 00 00 00"));
        });

        QUnit.test('test false mauvais format de la regex du numéro mobile', assert => {
                assert.false(controlInputNumberMobile("060000"));
        });

        QUnit.test('test false chaîne de caractère regex numéro mobile', assert => {
                assert.false(controlInputNumberMobile("hkdp"));
        });

QUnit.module("Group Home Number")
        QUnit.test('test vrai de la regex du numéro fixe avec numéro commençant par 01', assert => {
                assert.true(controlInputHome("01 00 00 00 00"));
        });

        QUnit.test('test vrai de la regex du numéro fixe avec numéro commençant par 02', assert => {
                assert.true(controlInputHome("02 00 00 00 00"));
        });

        QUnit.test('test vrai de la regex du numéro fixe avec numéro commençant par 03', assert => {
                assert.true(controlInputHome("03 00 00 00 00"));
        });

        QUnit.test('test vrai de la regex du numéro fixe avec numéro commençant par 04', assert => {
                assert.true(controlInputHome("04 00 00 00 00"));
        });

        QUnit.test('test vrai de la regex du numéro fixe avec numéro commençant par 05', assert => {
                assert.true(controlInputHome("05 00 00 00 00"));
        });

        QUnit.test('test false de la regex du numéro fixe avec numéro commençant par autre chose que 01 ou 02 ou 03 ou 04 ou 05', assert => {
                assert.false(controlInputHome("06 00 00 00 00"));
        });

        QUnit.test('test false mauvais format de la regex du numéro fixe', assert => {
                assert.false(controlInputHome("060000"));
        });

        QUnit.test('test false chaîne de caractère regex numéro fixe', assert => {
                assert.false(controlInputHome("hkdp"));
        });


QUnit.module("Group Email")
        QUnit.test('Test true de la rgex input email', assert => {
                assert.true(controlInputEmail("exemple.50@test.gif"));
        })

        QUnit.test('test false avec string i de la regex email', assert => {
                assert.false(controlInputEmail("i"));
        });

        QUnit.test('test false avec format i@ de la regex email', assert => {
                assert.false(controlInputEmail("i@"));
        });

        QUnit.test('test false avec string i@gt de la regex email', assert => {
                assert.false(controlInputEmail("gt"));
        });

        QUnit.test('test false avec int 153 de la regex email', assert => {
                assert.false(controlInputEmail("153"));
        });

QUnit.module("Groupe User")

        QUnit.test('Test true de l\'input user', assert => {
                assert.true(testUser("1" , "jean-denise.labibliothecaire"));
        })

        QUnit.test('test false de l\'input user', assert => {
                assert.false(testUser("2" , "cedric"));
        });

QUnit.module("Groupe Password")
        QUnit.test('Test true de l\'input password', assert => {
                assert.true(testPassword("1" , "motdepasse1"));
        })

        QUnit.test('test false de l\'input password', assert => {
                assert.false(testPassword("2" , "motdepasse1"));
        });
/*
QUnit.test("Groupe Connection Control")
        QUnit.test('Test true de la connexion', assert => {
                assert.true(connectControl("jean-denise.labibliothecaire" , "motdepasse1"));
        })

        QUnit.test('test false de la connexion', assert => {
                assert.false(connectControl("sedoriku.shiroimatsu" , "motdepasse1"));
        });
/** */